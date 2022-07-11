describe("Admin register", () => {
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

  it('should not pass because admin has already been registered', () => {
    cy.get("button").contains("Enviar").click()


    cy.contains("Email já cadastrado")
  });

  it('should redirect to login page', () => {
    cy.contains("Fazer login").click()

    cy.contains("Login")
  });
})

describe("Admin login", () => {
  it('should redirect to login', () => {
    cy.visit("/login")
    
  });

  it('should not login because the form is empty', () => {
    cy.get('form').submit()

    cy.contains("Por favor, insira um e-mail")
    cy.contains("Por favor, insira uma senha")
  });

  it('should test if admin can login', () => {
    cy.get('form').within(() => {
      cy.get("input").first().type("admin@gmail.com")
      cy.get("#pass").type("12344567")


      cy.get("button").contains("Enviar").click()
    })

    cy.contains("Login efetuado com sucesso")
  });
})

describe("Admin panel", () => {
  it('should redirect to panel', () => {
    cy.visit("/panel")

    cy.contains("Painel")
  });
})