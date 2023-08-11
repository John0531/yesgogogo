describe('E-Commerce Test', () => {
  it("create new transaction", function () {
    cy.visit('http://localhost:8080/')

    cy.get('.ad').should('be.visible').then(() => {
      cy.get('.ad').click()
    })
    cy.contains('登入').click()
    cy.get('.action-email').type('0921820345')
    cy.get('.action-email').should('have.value', '0921820345')
    cy.get('.action-pwd').type('Yes123')
    cy.get('.action-pwd').should('have.value', 'Yes123')
    cy.get('.action-verify').type('Y123')

  })
  // it('create new transaction', () => {
  //   cy.visit('http://localhost:8080/')

  //   cy.get('.ad').click()
  //   cy.contains('登入').click()
  //   cy.get('.action-email').type('0921820345')
  //   cy.get('.action-email').should('have.value', '0921820345')
  //   cy.get('.action-pwd').type('Yes123')
  //   cy.get('.action-pwd').should('have.value', 'Yes123')
  //   cy.get('.action-verify').type('Yes123')

  // })
})