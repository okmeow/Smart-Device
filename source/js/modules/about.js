const showMoreButton = document.querySelector('[data-show-more="show-more"]')
const hiddenMobileAboutCompany = document.querySelector('[data-about-extra-description]');
const hiddenAdditionalAboutCompany = document.querySelector('[data-about-additional-description]');

showMoreButton.classList.remove('about__button--nojs');

const showExtraText = () => {
  hiddenMobileAboutCompany.classList.remove('is-hidden');
  hiddenAdditionalAboutCompany.classList.remove('is-hidden');
  hiddenMobileAboutCompany.classList.add('is-shown');
  hiddenAdditionalAboutCompany.classList.add('is-shown');
  showMoreButton.textContent = 'Свернуть'
};

const hideExtraText = () => {
  hiddenAdditionalAboutCompany.classList.add('is-hidden');
  hiddenAdditionalAboutCompany.classList.remove('is-shown');
  showMoreButton.textContent = 'Подробнее'
};

const toggleExtraText = () => {
  if (hiddenAdditionalAboutCompany.classList.contains('is-hidden')) {
    return showExtraText();
  }
  return hideExtraText();
};

const aboutButtonClickHandler = () => {
  return showMoreButton.addEventListener('click', toggleExtraText)
};

export {aboutButtonClickHandler};
