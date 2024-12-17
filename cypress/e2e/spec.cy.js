/* eslint-disable no-undef */
describe("Game", () => {
  const CARDS_SELECTOR = "[data-pokemon-id]";

  it("initialises correctly", () => {
    cy.visit("/");

    it("initialises both score and high score as 0", () => {
      cy.get("#currentScore").should("have.text", "0");
      cy.get("#highScore").should("have.text", "0");
    });

    it("initialises with 10 cards", () => {
      cy.get(CARDS_SELECTOR).should("have.length", 10);
    });
  });

  it("increments both score and high score by 1 when a card that has not been selected before is selected", () => {
    cy.visit("/");

    cy.get(CARDS_SELECTOR)
      .first()
      .click()
      .invoke("attr", "data-pokemon-id")
      .as("clickedPokemonId");

    cy.get("#currentScore").should("have.text", "1");
    cy.get("#highScore").should("have.text", "1");

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("#currentScore").should("have.text", "2");
    cy.get("#highScore").should("have.text", "2");
  });

  it("ends the game if the same Pokemon is selected again", () => {
    cy.visit("/");

    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get(CARDS_SELECTOR)
      .first()
      .click()
      .invoke("attr", "data-pokemon-id")
      .as("clickedPokemonId");

    cy.get("@clickedPokemonId")
      .should("exist")
      .then((clickedId) => {
        cy.get(CARDS_SELECTOR)
          .filter(`[data-pokemon-id="${clickedId}"]`)
          .click();
      });

    cy.then(() => {
      expect(stub.getCall(0).args[0]).to.include("selected");
    });
    cy.get("#currentScore").should("have.text", "0");
    cy.get("#highScore").should("have.text", "1");

    // reload gameboard
    cy.get(CARDS_SELECTOR).should("have.length", 10);
  });

  it("increases the high score only when it has been exceeded by the current score", () => {
    cy.visit("/");

    cy.get(CARDS_SELECTOR)
      .first()
      .click()
      .invoke("attr", "data-pokemon-id")
      .as("clickedPokemonId");

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("@clickedPokemonId")
      .should("exist")
      .then((clickedId) => {
        cy.get(CARDS_SELECTOR)
          .filter(`[data-pokemon-id="${clickedId}"]`)
          .click();
      });

    cy.get("#highScore").should("have.text", "3");

    // round is reset at this point

    cy.get(CARDS_SELECTOR)
      .first()
      .click()
      .invoke("attr", "data-pokemon-id")
      .as("clickedPokemonId");

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("#currentScore").should("have.text", "2");
    cy.get("#highScore").should("have.text", "3");

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("#highScore").should("have.text", "3");

    // a new high score is set at this point

    cy.get("@clickedPokemonId").then((clickedId) => {
      cy.get(CARDS_SELECTOR)
        .not(`[data-pokemon-id="${clickedId}"]`)
        .should("exist")
        .first()
        .click();
    });

    cy.get("#currentScore").should("have.text", "4");
    cy.get("#highScore").should("have.text", "4");
  });
});
