describe('Subscription in spaceletter', () => {
  it('should return an error because form is empty', () => {
    cy.visit('/')

    cy.get('form').submit()

    cy.contains("Por favor, insira um e-mail")
  })

  it('should pass because email was informed', () => {
    cy.get('form').click().type("d@gmail.com").submit()

    cy.contains("Cadastrado com sucesso")
  });

  it('should not pass because email has already been registered', () => {
    cy.get('form').click().submit()

    cy.contains("Email já cadastrado")
  });
})