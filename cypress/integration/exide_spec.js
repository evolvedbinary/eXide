describe('eXide', function() {
  it('should load', function() {
    // Go to eXide
    cy.visit('/eXide/index.html')

    // Reload in case there is weird earler version warning
    cy.reload(true)

  })
  // more tests here
})
