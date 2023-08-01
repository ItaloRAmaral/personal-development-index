# Lecture 03 - Development of microservices with Nest.js

### 1 - Introdução

Visão geral do projeto

![Project Overview](./images/project_overview.png)

### 2 - Nest.js

Nest.js é um framework robusto para a construção de aplicações eficientes, confiáveis e escaláveis em Node.js. Ele se destaca particularmente na construção de microserviços, pois possui mecanismos nativos para comunicação entre sistemas, como gRPC e Kafka.

Nest.js é um framework para construção de aplicações server-side eficientes, confiáveis e escaláveis em Node.js. Ele usa JavaScript progressivo, é construído com TypeScript (preserva compatibilidade com JavaScript puro) e combina elementos de OOP (Programação Orientada a Objetos), FP (Programação Funcional) e FRP (Programação Reativa Funcional).

Aqui estão alguns pontos-chave sobre o Nest.js:

<b>Modularidade:</b> Nest.js usa um sistema de módulos que permite uma estrutura organizada e separada por responsabilidades. Cada parte da aplicação (como um componente de usuário, serviço de autenticação, etc.) pode ser colocada em um módulo separado.

<b>Injeção de Dependência:</b> Nest.js tem um poderoso sistema de Injeção de Dependência (DI) que facilita a construção de aplicações grandes e complexas.

<b>Suporte para TypeScript:</b> Nest.js é construído com TypeScript, o que significa que você tem a vantagem de tipos estáticos e recursos modernos de JavaScript.

<b>Decoradores:</b> Nest.js faz uso extensivo de decoradores, que são uma funcionalidade do TypeScript (e proposta para JavaScript). Os decoradores permitem adicionar metadados e alterar o comportamento das classes, métodos, propriedades, etc.

<b>Testabilidade:</b> Nest.js foi projetado com a testabilidade em mente, então ele fornece ferramentas e suporte para tornar o teste de suas aplicações o mais fácil possível.

<b>Arquitetura escalável:</b> Nest.js fornece uma arquitetura out-of-the-box que permite aos desenvolvedores criar aplicações altamente testáveis, escaláveis e facilmente mantidas.

<b>Suporte para várias plataformas:</b> Nest.js não é limitado a uma única plataforma. Ele funciona com várias plataformas como Express (o padrão), Fastify, etc.

<b>Suporte para programação orientada a objetos e funcional:</b> Nest.js combina elementos de programação orientada a objetos (OOP), programação funcional (FP) e programação reativa funcional (FRP).

<b>Middleware, pipes, guards, interceptors:</b> Nest.js fornece vários componentes de software para lidar com diferentes aspectos do processamento de solicitações HTTP, como middleware, pipes (para validação e transformação de dados), guards (para controle de acesso) e interceptors (para aspectos de corte transversal, como logging ou transformação de dados).

<b>Suporte para GraphQL:</b> Nest.js tem suporte integrado para GraphQL, uma alternativa popular a REST para a construção de APIs.

Em resumo, Nest.js é um framework poderoso e flexível para a construção de aplicações server-side em Node.js. Ele fornece uma estrutura sólida que ajuda a garantir que as aplicações sejam construídas de forma consistente, testável e escalável.

Para criar um novo projeto Nest.js, basta rodar o seguinte comando: 

```bash
npx @nestjs/cli new <nome.do.projeto>
```

Para criar um novo modulo no projeto:

```bash
npx @nestjs/cli generate module prisma
```

Para trabalhar com microservicços/kafka com Nest.js, devemos baixar essas seguintes libs
  - @nestjs/microservices
  - kafkajs


### 3 - MongoDB

A escolha de um banco de dados para um projeto é uma decisão crítica que pode ter um impacto significativo no desempenho e na escalabilidade da aplicação. Neste caso, o MongoDB foi escolhido por várias razões.

Primeiro, o MongoDB é um banco de dados NoSQL, o que significa que ele é orientado a documentos e não requer um esquema rígido. Isso oferece uma grande flexibilidade, pois permite a inserção de informações adicionais nos documentos conforme necessário. Esta flexibilidade é especialmente útil em um ambiente de desenvolvimento em constante evolução, onde novos campos de dados podem ser necessários ao longo do tempo.

Além disso, o MongoDB permite um modelo de dados diversificado. À medida que a aplicação evolui, os dados armazenados podem se tornar cada vez mais complexos, e o MongoDB é capaz de lidar com essa complexidade.

Por fim, o MongoDB foi escolhido por sua integração com o Prisma, um ORM (Object-Relational Mapping) que facilita o trabalho com bancos de dados em aplicações Node.js. A combinação de MongoDB e Prisma permite um desenvolvimento mais ágil e eficiente.

Em resumo, a escolha do MongoDB foi motivada por sua flexibilidade, capacidade de lidar com dados complexos e diversificados, e sua integração com ferramentas úteis como o Prisma.