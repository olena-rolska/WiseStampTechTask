import "../support/commands";

const beetLinkedin = "https://www.linkedin.com/company/beetroot-se/";
const beetYoutube = "https://www.youtube.com/@beetroot5192";
const beetInstagram = "https://www.instagram.com/beetroot.se/";
const beetTwitter = "https://twitter.com/LoveBeetroot";
const beetFacebook = "https://www.facebook.com/beetroot.se";
const beetTiktok = "https://www.tiktok.com/@simplybotanical?lang=en";

const wiseLinkedin = "https://www.linkedin.com/company/wisestamp/";
const wiseYoutube = "https://www.youtube.com/@wisestamp";
const wiseInstagram = "https://www.youtube.com/@wisestamp";
const wiseTwitter = "https://twitter.com/WiseStamp";
const wiseFacebook = "https://www.facebook.com/WiseStamp";
const wiseTiktok = "https://www.tiktok.com/@wisestamp?lang=en";

describe("Edit an app", () => {
  before(() => {
    cy.visit("https://webapp.wisestamp.com/editor");
  });
  it("Add an app", () => {
    cy.addAnApp(
      beetLinkedin,
      beetYoutube,
      beetInstagram,
      beetTwitter,
      beetFacebook,
      beetTiktok
    );
  });
  it("Check application", () => {
    cy.checkAnApp();
  });
  it("Edit application", () => {
    cy.get("[aid='page.editor.apps.social_buttons.edit']").click({
      force: true,
    });
    cy.editAnApp(
      wiseLinkedin,
      wiseYoutube,
      wiseInstagram,
      wiseTwitter,
      wiseFacebook,
      wiseTiktok
    );
  });
  it("Check application after edit", () => {
    cy.checkAnApp();
  });
  after("Clean up test data", () => {
    cy.get(".addon__remove", { timeout: 10000 }).click({ force: true });
  });
});
