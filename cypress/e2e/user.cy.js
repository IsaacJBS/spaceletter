const userEmail = "d@gmail.com"

describe('Subscription in spaceletter', () => {
  it('should return an error because form is empty', () => {
    cy.visit('/')

    cy.get('form').submit()

    cy.contains("Por favor, insira um e-mail")
  })

  it('should pass because email was informed', () => {
    cy.get('form').click().type(userEmail).submit()

    cy.contains("Cadastrado com sucesso")
  });

  it('should not pass because email has already been registered', () => {
    cy.get('form').click().type(userEmail).submit()

    cy.contains("Email já cadastrado")
  });
})

describe("Unsubscription flow", () => {
  it('should go to unsub page', () => {
    cy.visit("/unsub");
  });

  it('should return an error because input is empty', () => {
    cy.get('form').submit()

    cy.contains("Por favor, insira um e-mail")
  });

  it('unsubscribe the user', () => {
    cy.get('form').type(userEmail).submit()

    cy.contains("O sinal da sua base foi desligado")
  });
})

describe("Error page", () => {
  it('should redirect to error page', () => {
    cy.visit("/error")
    cy.contains("Ooops, página não encontrada")
  });
})