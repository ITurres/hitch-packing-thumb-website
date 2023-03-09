export const socialLinkTemplate = (linkHref, faClass) => {
  return `<a
  target="_blank"
  href="${linkHref}"
  class="social-grid__item"
>
  <i class="${faClass}"></i>
</a>`;
};
