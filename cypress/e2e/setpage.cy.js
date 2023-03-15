describe("Setpage", () => {
  beforeEach(() => {
    cy.visit("/setpage/");
  });

  //   mock this test so that it does not repeatedly call the API
  //   it("should display set links after choosing type and hitting submit", () => {
  //     cy.get("select").select("core");
  //     cy.get("button.button-81").click();
  //     cy.contains("Tenth Edition");
  //   });

  it("should display set links after choosing type and hitting submit with mock data", () => {
    cy.intercept("GET", "https://api.magicthegathering.io/v1/sets?type=core", {
      fixture: "sets.json",
    });
    cy.get("select").select("core");
    cy.get("button.button-81").click();
    cy.contains("Tenth Edition");
  });
});
