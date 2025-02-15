Não precisa do servidor rodando para testar o componente

Usamos o cy.mount() para montar o componente em um elemento do DOM virtual, e o cy.get() para selecionar o elemento que queremos testar.

Podemos criar comandos customizados para facilitar a escrita dos testes. No exemplo abaixo, criamos um comando customizado para selecionar o elemento do componente.

```js
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})
```

E podemos usar o comando customizado no teste:

``` js
it('should render the component', () => {
  cy.mount(<App />)
  cy.getBySel('app').should('exist')
})
```

Para que o componente tenha os estilos css aplicados, precisamos importar o arquivo css no teste.

Para melhorar o tempo de execução de teste do Cypress, podemos deixar um estado pré setado para a renderização seja através do Redux ou Local Storage (depende de como o componente foi escrito)

Criei um componente simples de formulario para aplicar os testes que aprendi neste curso, e tanto o teste quanto o componente estão no /cypress/component/Forms.tsx e Forms.cy.jsx

Boas Práticas: 
  - Data-testid/aria-label: sempre quando for testar algum componente/pagina usar o cy.get através de data-testid ou aria-label. As boas práticas dizem que classe/id é uma coisa que pode mudar durante o tempo, e se mudar, o teste irá falhar. Já testid e aria-label em teoria não é para ficar mudando constantemente, fazendo com que o teste fique conciso e mais dificil de quebrar por parte dele.
