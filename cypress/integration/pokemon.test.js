describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('should go to the correct page when a pokemon is clicked', () => {
    cy.visit('http://localhost:5000')
    cy.contains('charmander').click()
    cy.contains('blaze')
  })
})
