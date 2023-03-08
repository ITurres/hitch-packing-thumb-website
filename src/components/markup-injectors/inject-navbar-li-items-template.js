import { navbarLiItemTemplate } from "../markup-templates/navbar-li-items-template.js";
import { navbarLiItemsData } from "../db-like/navbar-li-items-data.js";

const navbarItemsHolder = document.querySelector(
  "[data-inject-navbar-li-items-template]"
);

Object.values(navbarLiItemsData).forEach((item) => {
  navbarItemsHolder.innerHTML += navbarLiItemTemplate(
    item.htmlPage,
    item.faClass,
    item.spantText
  );
});
