# Grafia oficial das pessoas do site da 70ª RBras

Este arquivo guarda a decisão da comissão sobre como cada pessoa é nomeada no site. Ele é editado à mão, nunca gerado por código, portanto nada aqui se perde quando os relatórios são reexecutados. A tarefa D4.2 do plano de fontes únicas lê esta tabela para montar o cadastro único em `data/pessoas.js`.

A lista nasceu do relatório `scripts/saida/pessoas-divergentes.md`, que agrupa por currículo Lattes as pessoas registradas mais de uma vez. Só entram aqui as que têm divergência real: grafia do nome diferente entre dois registros, instituição diferente, ou as duas coisas. Quem aparece duas vezes com registro idêntico não precisa de decisão.

Preencha apenas as duas últimas colunas. Enquanto uma linha estiver em branco, a D4.2 não tem como escolher sozinha, portanto ela para e pergunta. A coluna Lattes é o identificador estável: não a altere, pois é por ela que o código encontra a pessoa.

---

## Decisões pendentes

| Lattes           | Grafias registradas                                       | Instituições registradas | Grafia oficial                     | Instituição oficial |
| ---------------- | --------------------------------------------------------- | ------------------------ | ---------------------------------- | ------------------- |
| 3445977720574534 | Agatha Sacramento Rodrigues / Ágatha Sacramento Rodrigues | UFES                     | Ágatha Sacramento Rodrigues        | UFES                |
| 8916772290938469 | Anderson Luiz Ara / Anderson Ara                          | UFPR                     | Anderson Luiz Ara                  | UFPR                |
| 9315014843913122 | Carlos Cesar Trucios Maza / Carlos Trucius                | UNICAMP                  | Carlos Cesar Trucios Maza          | UNICAMP             |
| 8352484284929824 | Daiane Aparecida Zuanetti / Daiane Zuanetti               | UFSCar                   | Daiane Aparecida Zuanetti          | UFSCar              |
| 2458007865506934 | Idemauro Antonio Rodrigues de Lara                        | ESALQ (USP) / Esalq-USP  | Idemauro Antonio Rodrigues de Lara | ESALQ (USP)         |
| 8952048121396398 | Lia Hanna Martins Morita / Lia Hanna                      | UFMT                     | Lia Hanna Martins Morita           | UFMT                |
| 8041441890541410 | Rafael de Andrade Moral / Rafael Moral                    | Maynooth University      | Rafael de Andrade Moral            | Maynooth University |
| 9151825716259032 | Rafael Pimentel Maia / Rafael Maia                        | UNICAMP                  | Rafael Pimentel Maia               | UNICAMP             |
| 8870556978317000 | Vera Lucia Damasceno Tomazella / Vera Tomazella           | UFSCar e UFPB / UFSCar   | Vera Lucia Damasceno Tomazella     | UFSCar              |
| 6306080581906246 | Victor Freguglia Souza / Victor Freguglia                 | UNICAMP                  | Victor Freguglia Souza             | UNICAMP             |

Três observações sobre casos específicos. Carlos Trucius é erro de digitação, não variante legítima, assim como Ágatha com acento, que diverge do registro no Lattes. Idemauro é o único caso em que o nome coincide: a decisão é só entre as duas formas de escrever a instituição. Vera Lucia Damasceno Tomazella é a única com divergência dupla, pois além das duas grafias há a dúvida entre registrar uma instituição ou as duas.

---

## Como preencher

Na coluna de grafia oficial, escreva o nome completo exatamente como deve aparecer no site, com acentuação. Em caso de dúvida sobre a forma correta, o currículo Lattes da pessoa é a referência, acessível pelo endereço `http://lattes.cnpq.br/` seguido do número da primeira coluna.

Na coluna de instituição oficial, escreva a sigla ou o nome como deve aparecer nos cartões das comissões. Quando a pessoa tiver dois vínculos, decida se os dois aparecem: o site hoje mostra "UFSCar e UFPB" num lugar além de "UFSCar" em outro, o que é justamente a divergência a resolver.

Uma linha preenchida vale para todas as páginas. Depois da D4.2 a pessoa passa a existir uma única vez no repositório, referenciada por identificador nas comissões, entre os convidados além da programação do WASA, portanto corrigir um nome volta a ser a edição de um lugar só.

---

## Correspondências confirmadas

A programação do WASA citava os palestrantes por nome em texto, com o tratamento à frente, em grafias mais curtas do que as do cadastro. A tabela abaixo registra quem é quem, decisão tomada em 27/10/2026, pois nem toda correspondência era dedutível do repositório.

| Como aparecia na programação | Pessoa no cadastro |
|---|---|
| Prof. Francisco Louzada | Francisco Louzada Neto |
| Prof. Mário de Castro | Mário de Castro Andrade Filho |
| Profa. Vera Tomazella | Vera Lucia Damasceno Tomazella |
| Profa. Fernanda Lang Schumacher | Fernanda Lang Schumacher |
| Prof. Vinicius Calsavara | Vinicius Calsavara |

Quatro palestrantes não existiam em lugar nenhum do repositório, portanto entraram no cadastro apenas com nome além do tratamento: Gleici da Silva Castro Perdoná, Adriane Caroline Teixeira Portela, Pedro Luiz Ramos, somados ao próprio Francisco Louzada Neto, que tinha foto mas não tinha ficha. A instituição deles segue em branco, pois o site nunca a publicou. Preenchê-la é edição direta de `data/pessoas.js`, sem necessidade de nova decisão formal.

---

## Fora desta tabela

Sete pessoas aparecem duas vezes com grafia além de instituição idênticas, em geral por integrarem duas comissões. São Mariana Rodrigues Motta, Alex Rodrigo dos Santos Sousa, Benilton Carvalho, Larissa Ávila Matos, Nancy Lopes Garcia, Samara Flamini Kiihl além de Fernanda Lang Schumacher. A D4.2 as unifica sem decisão humana.

Três pessoas são citadas em mais de um arquivo, sendo Fernanda Lang Schumacher, Vera Tomazella além de Vinicius Calsavara. Nos dois primeiros casos a citação está na programação do WASA, que hoje escreve o nome em texto com o tratamento à frente. Depois da D4.2 essas citações passam a referenciar o cadastro, portanto o tratamento vira atributo da pessoa.

O relatório completo, com arquivo e seção de cada ocorrência, está em `scripts/saida/pessoas-divergentes.md`. Ele é regerado pelo comando `node scripts/checar_fontes.mjs --pessoas`, sempre que a comissão quiser conferir o estado atual dos dados.
