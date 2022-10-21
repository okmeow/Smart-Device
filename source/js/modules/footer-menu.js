const footerNav = document.querySelector('.footer-navigation__list');
const footerNavTitle = document.querySelector('.footer-navigation__title');
const footerContacts = document.querySelector('.footer-contacts__wrapper');
const footerContactsTitle = document.querySelector('.footer-contacts__title');

// footer navigation

footerNav.classList.remove('footer-navigation__list--nojs');
footerNav.classList.remove('footer-navigation__list--opened');

const openFooterNav = () => {
  if (footerContacts.classList.contains('footer-contacts__wrapper--opened')) {
    closeFooterContacts();
  }
  footerNav.classList.add('footer-navigation__list--opened')
}

const closeFooterNav = () => {
  footerNav.classList.remove('footer-navigation__list--opened')
}

const toggleFooterNav = () => {
  if (footerNav.classList.contains('footer-navigation__list--opened')) {
    return closeFooterNav();
  }
  return openFooterNav();
}

const mobileFooterNavClickHandler = () => {
  return footerNavTitle.addEventListener('click', toggleFooterNav);
}

//footer contacts

footerContacts.classList.remove('footer-contacts__wrapper--nojs');
footerContacts.classList.remove('footer-contacts__wrapper--opened');

const openFooterContacts = () => {
  if (footerNav.classList.contains('footer-navigation__list--opened')) {
    closeFooterNav();
  }
  footerContacts.classList.add('footer-contacts__wrapper--opened')
}

function closeFooterContacts () {
  footerContacts.classList.remove('footer-contacts__wrapper--opened')
}

const toggleFooterContacts = () => {
  if (footerContacts.classList.contains('footer-contacts__wrapper--opened')) {
    return closeFooterContacts();
  }
  return openFooterContacts();
}

const mobileFooterContactsClickHandler = () => {
  return footerContactsTitle.addEventListener('click', toggleFooterContacts);
}

export {mobileFooterNavClickHandler, mobileFooterContactsClickHandler}
