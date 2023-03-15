describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should contain the welcome message", () => {
    cy.contains("Welcome to MTG React App");
  });
});
