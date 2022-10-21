const footerNavLists = document.querySelectorAll('.footer-navigation__list');
const footerNavTitle = document.querySelector('.footer-navigation__title');
const footerContacts = document.querySelector('.footer-contacts__wrapper');
const footerContactsTitle = document.querySelector('.footer-contacts__title');

// footer navigation

footerNavLists.forEach((item) => item.classList.remove('footer-navigation__list--nojs'));
footerNavLists.forEach((item) => item.classList.remove('footer-navigation__list--opened'));

const openFooterNav = () => {
  if (footerContacts.classList.contains('footer-contacts__wrapper--opened')) {
    closeFooterContacts();
  }
  footerNavTitle.classList.add('footer-navigation__title--opened');
  footerNavTitle.classList.remove('footer-navigation__title--closed');
  footerNavLists.forEach((item) => item.classList.add('footer-navigation__list--opened'));
}

const closeFooterNav = () => {
  footerNavLists.forEach((item) => item.classList.remove('footer-navigation__list--opened'));
  footerNavTitle.classList.remove('footer-navigation__title--opened');
  footerNavTitle.classList.add('footer-navigation__title--closed');
}

const toggleFooterNav = () => {
  if (footerNavLists[0].classList.contains('footer-navigation__list--opened')) {
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
  if (footerNavLists[0].classList.contains('footer-navigation__list--opened')) {
    closeFooterNav();
  }
  footerContactsTitle.classList.add('footer-contacts__title--opened');
  footerContactsTitle.classList.remove('footer-contacts__title--closed');
  footerContacts.classList.add('footer-contacts__wrapper--opened');
}

function closeFooterContacts () {
  footerContactsTitle.classList.remove('footer-contacts__title--opened');
  footerContactsTitle.classList.add('footer-contacts__title--closed');
  footerContacts.classList.remove('footer-contacts__wrapper--opened');
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
