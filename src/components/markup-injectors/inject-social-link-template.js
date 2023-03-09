import { socialLinkTemplate } from "../markup-templates/social-link-template.js";
import { socialLinksData } from "../db-like/social-links-data.js";

const socialLinksHolder = document.querySelector("[data-inject-social-links]");

Object.values(socialLinksData).forEach((link) => {
  socialLinksHolder.innerHTML += socialLinkTemplate(
    link.linkHref,
    link.faClass
  );
});
