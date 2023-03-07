export const navbarLiItemTemplate = (htmlPage, faClass, spanText) => {
  return `<li class="navbar__li">
<a class="navbar__link" href="${htmlPage}"
  ><i class="${faClass}"></i>
  <span class="navbar__item">${spanText}</span></a>
</li>`;
};
