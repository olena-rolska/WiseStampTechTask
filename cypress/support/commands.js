Cypress.Commands.add(
  "addAnApp",
  (linkedin, youtube, instagram, twitter, facebook, tiktok) => {
    cy.get('[aid="page.editor.signature.tabs.addons"]').click({ force: true });
    cy.get('[aid="page.editor.apps.social_buttons"]').click();
    cy.get("input[aid='signature_editor.input.0:appdata:target']").type(
      linkedin,
      { force: true }
    );
    cy.get("input[aid='signature_editor.input.1:appdata:target']").type(
      youtube,
      {
        force: true,
      }
    );
    cy.get("input[aid='signature_editor.input.2:appdata:target']").type(
      instagram,
      { force: true }
    );
    cy.get("input[aid='signature_editor.input.3:appdata:target']").type(
      twitter,
      {
        force: true,
      }
    );
    cy.get("input[aid='signature_editor.input.4:appdata:target']").type(
      facebook,
      {
        force: true,
      }
    );
    cy.get(".listControl").click();
    cy.get("input[aid='signature_editor.input.8:appdata:target']").type(
      tiktok,
      {
        force: true,
      }
    );
    cy.get("img[alt='App Social Buttons Image']", { timeout: 5000 });

    cy.get(".btn__confirm").find("button").should("not.be.disabled");
    cy.get(".btn__confirm").find("button").click({ force: true });
  }
);

Cypress.Commands.add("checkAnApp", () => {
  cy.get(".addons__list").should(($addon) => {
    expect($addon).to.contain("Social Buttons");
  });

  cy.get("td > a", { timeout: 10000 }).should(($elem) => {
    expect($elem).to.have.length(6);
  });
});

Cypress.Commands.add(
  "editAnApp",
  (linkedin, youtube, instagram, twitter, facebook, tiktok) => {
    cy.get("input[aid='signature_editor.input.0:appdata:target']")
      .clear({ force: true })
      .type(linkedin, { force: true });
    cy.get("input[aid='signature_editor.input.1:appdata:target']")
      .clear({ force: true })
      .type(youtube, {
        force: true,
      });
    cy.get("input[aid='signature_editor.input.2:appdata:target']")
      .clear({ force: true })
      .type(instagram, { force: true });
    cy.get("input[aid='signature_editor.input.3:appdata:target']")
      .clear({ force: true })
      .type(twitter, {
        force: true,
      });
    cy.get("input[aid='signature_editor.input.4:appdata:target']")
      .clear({ force: true })
      .type(facebook, {
        force: true,
      });
    cy.get(".listControl").click();
    cy.get("input[aid='signature_editor.input.5:appdata:target']")
      .clear({ force: true })
      .type(tiktok, {
        force: true,
      });
    cy.get("img[alt='App Social Buttons Image']", { timeout: 5000 });

    cy.get(".btn__confirm").find("button").should("not.be.disabled");
    cy.get(".btn__confirm").find("button").click({ force: true });
  }
);
