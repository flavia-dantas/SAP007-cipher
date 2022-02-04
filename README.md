#  :lock: Security Cipher :key:

A aplicação web desenvolvida para criptografar / descriptografar mensagem.

## :book: Índice

- [Prefácio](#Prefácio)
- [Projeto](#Projeto)
- [Layout](#Layout)
- [Desenvolvimento](#Desenvolvimento)

---

## :memo: Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra ABACATE será DEDFDWH

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## :computer: Projeto

O Security Cipher foi desenvolvido para atender o público que necessita de segurança e privacidade. Através da aplicação web é possível escrever mensagens e criptografar transformando de forma secreta e segura. A mensagem é protegida por meio de criptografia pode ser lida somente com a chave correta (deslocamento da letra).  

### Interface do usuário (UI)

A interface permite ao usuário:

##### Criptografar:

- Digitar uma mensagem (texto) para ser cifrada.
- Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
- Clicar no botão Cifrar.
- Ver o resultado da mensagem cifrada

##### Descriptografar:

- Digitar uma mensagem (texto) para ser decifrada.
- Inserir o mesmo _offset_ ultilizado na criptografia indicando quantas posições de deslocamento de caracteres para descifrar.
- Clicar no botão Descifrar.
- Ver o resultado da mensagem decifrada.

## :bulb: Layout

- Este projeto deve ser resolvido individualmente.

- O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
  
- Tempo para completar: tempo referência 2 semanas.

- ### UX (User eXperience)

  - [ ] **Desenhar a aplicação pensando e entendendo o usuário**

  - [ ] **Criar protótipos para obter feedback e iterar**

  - [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## :gear: Desenvolvimento

Para desenvolvimento do projeto foram utilizados:

- HTML
- CSS
- JavaScript

