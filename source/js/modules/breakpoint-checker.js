const footerNavTitle = document.querySelector('[data-footer-navigation-title="footer-navigation-title"]');
const footerContactsTitle = document.querySelector('[data-footer-contacts-title="footer-contacts-title"]');
const welcomeButton = document.querySelector('[data-welcome-button="welcome-button"]');
const catalogTitle = document.querySelector('[data-catalog-title="catalog-title"]');

const breakpoint = window.matchMedia(`(max-width:767px)`);
const breakpointChecker = () => {
  if (breakpoint.matches) {
    footerNavTitle.tabIndex="0";
    footerContactsTitle.tabIndex="0";
    welcomeButton.textContent="Бесплатная консультация";
    catalogTitle.textContent="Товары и услуги Uger";
  } else {
    footerNavTitle.tabIndex="-1";
    footerContactsTitle.tabIndex="-1";
    welcomeButton.textContent="Получить бесплатную консультацию";
    catalogTitle.textContent="Uger предлагает следующие товары и услуги";
  }
}
breakpoint.addListener(breakpointChecker);
breakpointChecker();

export {breakpointChecker};
