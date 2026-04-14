#!/usr/bin/env python3
"""
padroniza_fotos.py — Uniformização automática de fotos de palestrantes
70ª RBras · 2026

Uso:
    python padroniza_fotos.py --entrada /caminho/para/fotos_originais --saida assets/fotos

Instalar dependências (uma vez):
    pip install Pillow opencv-python rembg numpy onnxruntime

O que o script faz em cada foto:
  1. Detecta o rosto com OpenCV
  2. Recorta um quadrado centralizado no rosto (com margem proporcional)
     → Fallback: recorte central se nenhum rosto for encontrado
  3. Remove o fundo com rembg (modelo U2-Net — baixado automaticamente na 1ª vez)
  4. Substitui o fundo por cinza neutro (#F0F0F0)
  5. Normaliza brilho e contraste
  6. Redimensiona para 400×400 px
  7. Salva como JPG de alta qualidade em --saida
"""

import argparse
import sys
from pathlib import Path

# ── Verificação de dependências ────────────────────────────────────────────────
_faltando = []
try:
    from PIL import Image, ImageEnhance
except ImportError:
    _faltando.append("Pillow")
try:
    import cv2
except ImportError:
    _faltando.append("opencv-python")
try:
    import numpy as np
except ImportError:
    _faltando.append("numpy")
try:
    from rembg import remove as rembg_remove
except ImportError:
    _faltando.append("rembg")

if _faltando:
    print("Dependências faltando:", ", ".join(_faltando))
    print("Instale com:")
    print("  pip install " + " ".join(_faltando) + " onnxruntime")
    sys.exit(1)


# ── Configurações ──────────────────────────────────────────────────────────────
TAMANHO_FINAL  = (400, 400)       # px · largura × altura do arquivo de saída
COR_FUNDO      = (240, 240, 240)  # RGB · cinza claro neutro (#F0F0F0)
MARGEM_ROSTO   = 0.40             # fração do quadro deixada como margem (cada lado)
BRILHO_ALVO    = 1.05             # >1 = mais claro · 1.0 = sem ajuste
CONTRASTE_ALVO = 1.10             # >1 = mais contraste
SATURACAO_ALVO = 0.92             # <1 = leve dessaturação para aparência coesa
FORMATOS       = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".tif"}


# ── Funções ────────────────────────────────────────────────────────────────────

def detectar_rosto(img_cv):
    """Retorna (x, y, w, h) do maior rosto encontrado, ou None."""
    path = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    detector = cv2.CascadeClassifier(path)
    cinza = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
    rostos = detector.detectMultiScale(
        cinza, scaleFactor=1.1, minNeighbors=5, minSize=(50, 50)
    )
    if len(rostos) == 0:
        return None
    return max(rostos, key=lambda r: r[2] * r[3])  # maior área


def calcular_recorte(x, y, w, h, img_w, img_h):
    """Quadrado centralizado no rosto com margens proporcionais."""
    cx = x + w // 2
    cy = y + h // 2
    # 'lado' garante que o rosto ocupe (1 - 2*MARGEM) do quadro
    lado = int(max(w, h) / (1.0 - 2.0 * MARGEM_ROSTO))
    x0 = max(0, cx - lado // 2)
    y0 = max(0, cy - lado // 2)
    x1 = min(img_w, x0 + lado)
    y1 = min(img_h, y0 + lado)
    # Corrige se encostou na borda
    if x1 - x0 < lado:
        x0 = max(0, x1 - lado)
    if y1 - y0 < lado:
        y0 = max(0, y1 - lado)
    return x0, y0, x1, y1


def processar(caminho_entrada: Path, caminho_saida: Path):
    nome = caminho_entrada.name
    print(f"  {nome:<40}", end="", flush=True)

    # 1. Carregar
    try:
        img_pil = Image.open(caminho_entrada).convert("RGBA")
        img_cv  = cv2.imread(str(caminho_entrada))
    except Exception as e:
        print(f"ERRO ao abrir: {e}")
        return

    # 2. Detectar rosto e recortar
    rosto = detectar_rosto(img_cv) if img_cv is not None else None
    if rosto is not None:
        x, y, w, h = rosto
        x0, y0, x1, y1 = calcular_recorte(x, y, w, h, img_pil.width, img_pil.height)
        img_pil = img_pil.crop((x0, y0, x1, y1))
        metodo = "rosto detectado"
    else:
        lado = min(img_pil.width, img_pil.height)
        mx   = (img_pil.width  - lado) // 2
        my   = (img_pil.height - lado) // 2
        img_pil = img_pil.crop((mx, my, mx + lado, my + lado))
        metodo = "recorte central"

    # 3. Remover fundo (rembg baixa o modelo U2-Net automaticamente na 1ª vez)
    try:
        img_sem_fundo = rembg_remove(img_pil)
    except Exception as e:
        print(f"ERRO rembg: {e}")
        return

    # 4. Compor sobre fundo sólido neutro
    fundo = Image.new("RGBA", img_sem_fundo.size, (*COR_FUNDO, 255))
    fundo.paste(img_sem_fundo, mask=img_sem_fundo.split()[3])
    img_final = fundo.convert("RGB")

    # 5. Normalizar brilho, contraste e saturação
    img_final = ImageEnhance.Brightness(img_final).enhance(BRILHO_ALVO)
    img_final = ImageEnhance.Contrast(img_final).enhance(CONTRASTE_ALVO)
    img_final = ImageEnhance.Color(img_final).enhance(SATURACAO_ALVO)

    # 6. Redimensionar para 400×400
    img_final = img_final.resize(TAMANHO_FINAL, Image.LANCZOS)

    # 7. Salvar como JPG
    destino = caminho_saida.with_suffix(".jpg")
    try:
        img_final.save(destino, "JPEG", quality=92, optimize=True)
        print(f"OK  [{metodo}]  →  {destino.name}")
    except Exception as e:
        print(f"ERRO ao salvar: {e}")


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Padroniza fotos de palestrantes para o site da 70ª RBras."
    )
    parser.add_argument(
        "--entrada", required=True,
        help="Pasta com as fotos originais"
    )
    parser.add_argument(
        "--saida", default="assets/fotos",
        help="Pasta de destino (padrão: assets/fotos)"
    )
    args = parser.parse_args()

    entrada = Path(args.entrada).expanduser().resolve()
    saida   = Path(args.saida).expanduser().resolve()

    if not entrada.is_dir():
        print(f"Pasta de entrada não encontrada: {entrada}")
        sys.exit(1)

    saida.mkdir(parents=True, exist_ok=True)

    fotos = sorted(f for f in entrada.iterdir() if f.suffix.lower() in FORMATOS)
    if not fotos:
        print(f"Nenhuma imagem encontrada em: {entrada}")
        sys.exit(1)

    print(f"\nPadronizando {len(fotos)} foto(s)")
    print(f"  Entrada : {entrada}")
    print(f"  Saída   : {saida}")
    print(f"  Fundo   : RGB{COR_FUNDO}  |  Tamanho: {TAMANHO_FINAL[0]}×{TAMANHO_FINAL[1]} px\n")

    for foto in fotos:
        processar(foto, saida / foto.stem)

    print(f"\n✓ Concluído! {len(fotos)} foto(s) processada(s) em '{saida}'.")
    print("  Revise os arquivos gerados antes de publicar o site.")


if __name__ == "__main__":
    main()
