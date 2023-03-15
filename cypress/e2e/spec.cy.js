describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("http://127.0.0.1:5173/");

    cy.contains("Welcome to MTG React App");
  });
});
