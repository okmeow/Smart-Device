// Блок кода для изменений порядка фокуса на форме (Удалить, если нужен нормальный порядок фокуса)

const feedbackButton = document.querySelector('[data-feedback-button="feedback-button"]');
const feedbackCheckbox = document.querySelector('[data-feedback-checkbox="feedback-checkbox"]');
const feedbackTextarea = document.querySelector('[data-feedback-textarea="feedback-textarea"]');
const feedbackInputPhone = document.querySelector('[data-input-feedback-phone="input-phone"]');
const footerLogo = document.querySelector('[data-footer-logo="footer-logo"]');

const isTabKey = (evt) => evt.key === 'Tab';

const feedbackFormHandlers = () => {
  feedbackTextarea.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      feedbackCheckbox.focus();
    };
    if (evt.shiftKey && isTabKey(evt)) {
      evt.preventDefault();
      feedbackInputPhone.focus();
    }
  });

  feedbackCheckbox.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      feedbackButton.focus();
    };
    if (evt.shiftKey && isTabKey(evt)) {
      evt.preventDefault();
      feedbackTextarea.focus();
    }
  });

  feedbackButton.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      footerLogo.focus();
    };
    if (evt.shiftKey && isTabKey(evt)) {
      evt.preventDefault();
      feedbackCheckbox.focus();
    }
  });

  footerLogo.addEventListener('keydown', (evt) => {
    if (evt.shiftKey && isTabKey(evt)) {
      evt.preventDefault();
      feedbackButton.focus();
    }
  });
};

export {feedbackFormHandlers};
// Конец блока для изменения порядка фокуса
