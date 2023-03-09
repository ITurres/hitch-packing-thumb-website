export const navbarLiItemTemplate = (htmlPage, faClass, spanText) => {
  return `<li class="my-navbar__li">
<a class="my-navbar__link" href="${htmlPage}"
  ><i class="${faClass}"></i>
  <span class="my-navbar__item">${spanText}</span></a>
</li>`;
};
