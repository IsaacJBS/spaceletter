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
    cy.get('form').click().type("d@gmail.com").submit()

    cy.contains("Email já cadastrado")
  });
})

describe("Admin register and login", () => {
  it('should return an error because form is empty', () => {
    cy.visit('/register')

    cy.get('form').submit()

    cy.contains("Por favor, insira um e-mail")
    cy.contains("Por favor, insira uma senha")
  });

  it('should test if admin can register', () => {
    cy.get('form').within(() => {
      cy.get("input").first().type("admin@gmail.com")
      cy.get("#pass").type("12344567")


      cy.get("button").contains("Enviar").click()
    })

    cy.contains("Admin cadastrado")
  });

  it('should not pass becaus admin has already been registered', () => {
    cy.get('form').within(() => {
      cy.get("input").first().type("admin@gmail.com")
      cy.get("#pass").type("12344567")


      cy.get("button").contains("Enviar").click()
    })

    cy.contains("Email já cadastrado")
  });
})