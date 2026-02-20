describe('Testes da Agenda de Contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    // Em vez de procurar um nome, espera o formulário ou a lista aparecer
    cy.get('form', { timeout: 10000 }).should('be.visible')
  })

  it('Deve adicionar um novo contato', () => {
    const nome = 'Karol Teste ' + Date.now()

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type('karol@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.get('.adicionar').click()

    cy.contains(nome).should('exist')
  })

  it('Deve editar um contato', () => {
    const nomeOriginal = 'Contato Editar ' + Date.now()
    const nomeEditado = 'Contato Editado ' + Date.now()

    // Cria o contato
    cy.get('input[placeholder="Nome"]').type(nomeOriginal)
    cy.get('input[placeholder="E-mail"]').type('editar@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11922222222')
    cy.get('.adicionar').click()
    cy.contains(nomeOriginal).should('exist')

    // Clica no botão EDITAR do contato criado
    cy.contains(nomeOriginal)
      .parents('.contato') 
      .find('.edit')
      .click()

    // Altera o nome
    cy.get('input[placeholder="Nome"]').clear().type(nomeEditado)
    
    // Clica em SALVAR/ALTERAR
    cy.get('.alterar').click()

    // Verifica a mudança
    cy.contains(nomeEditado).should('exist')
    cy.contains(nomeOriginal).should('not.exist')
  })

  it('Deve remover um contato', () => {
    const nome = 'Contato Para Remover ' + Date.now()

    // Cria o contato
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type('remover@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11911111111')
    cy.get('.adicionar').click()
    cy.contains(nome).should('exist')

    // Clica no botão DELETAR do contato criado
    cy.contains(nome)
      .parents('.contato')
      .find('.delete')
      .click()

    // Verifica que sumiu
    cy.contains(nome).should('not.exist')
  })
})