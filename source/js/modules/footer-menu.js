const footerNavLists = document.querySelectorAll('[data-footer-navigation-list="footer-navigation-list"]');
const footerNavTitle = document.querySelector('[data-footer-navigation-title="footer-navigation-title"]');
const footerContacts = document.querySelector('[data-footer-contacts-wrapper="footer-contacts-wrapper"]');
const footerContactsTitle = document.querySelector('[data-footer-contacts-title="footer-contacts-title"]');

// footer navigation

footerNavTitle.classList.remove('footer-navigation__title--nojs');
footerNavLists.forEach((item) => item.classList.remove('footer-navigation__list--nojs'));
footerNavLists.forEach((item) => item.classList.remove('footer-navigation__list--opened'));

const isEnterKey = (evt) => evt.key === 'Enter';

const onFooterNavTitleEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    if (footerNavTitle.classList.contains('footer-navigation__title--opened')) {
      return closeFooterNav();
    }
    return openFooterNav();
  }
};

footerNavTitle.addEventListener('keydown', onFooterNavTitleEnterKeydown);

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
};

const mobileFooterNavClickHandler = () => {
  return footerNavTitle.addEventListener('click', toggleFooterNav);
};

//footer contacts

footerContactsTitle.classList.remove('footer-contacts__title--nojs');
footerContacts.classList.remove('footer-contacts__wrapper--nojs');
footerContacts.classList.remove('footer-contacts__wrapper--opened');

const onFooterContactsTitleEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    if (footerContactsTitle.classList.contains('footer-contacts__title--opened')) {
      return closeFooterContacts();
    }
    return openFooterContacts();
  }
};

footerContactsTitle.addEventListener('keydown', onFooterContactsTitleEnterKeydown);

const openFooterContacts = () => {
  if (footerNavLists[0].classList.contains('footer-navigation__list--opened')) {
    closeFooterNav();
  }
  footerContactsTitle.classList.add('footer-contacts__title--opened');
  footerContactsTitle.classList.remove('footer-contacts__title--closed');
  footerContacts.classList.add('footer-contacts__wrapper--opened');
};

function closeFooterContacts () {
  footerContactsTitle.classList.remove('footer-contacts__title--opened');
  footerContactsTitle.classList.add('footer-contacts__title--closed');
  footerContacts.classList.remove('footer-contacts__wrapper--opened');
};

const toggleFooterContacts = () => {
  if (footerContacts.classList.contains('footer-contacts__wrapper--opened')) {
    return closeFooterContacts();
  }
  return openFooterContacts();
};

const mobileFooterContactsClickHandler = () => {
  return footerContactsTitle.addEventListener('click', toggleFooterContacts);
};



export {mobileFooterNavClickHandler, mobileFooterContactsClickHandler};
