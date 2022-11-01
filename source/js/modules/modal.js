const callMeButton = document.querySelector('[data-header-call-me-button="header-call-me-button"]');
const closeModalFormButton = document.querySelector('[data-modal-close-button="modal-close-button"]');
const modalForm = document.querySelector('[data-modal="modal"]');
const modalFormInputs = document.querySelectorAll('[data-modal-input="modal-input"]');
const header = document.querySelector('[data-header="header"]');
const mainContainer = document.querySelector('[data-main-container="main-container"]');
const footer = document.querySelector('[data-footer="footer"]');
const body = document.querySelector('[data-body="body"]');

// Блок кода для изменений порядка фокуса на форме (Удалить, если нужен нормальный порядок фокуса)

const modalButton = document.querySelector('[data-modal-button="modal-button"]');
const modalCheckbox = document.querySelector('[data-modal-checkbox="modal-checkbox"]');
const modalTextarea = document.querySelector('[data-modal-textarea="modal-textarea"]');

const isTabKey = (evt) => evt.key === 'Tab';

const modalFormFocusHandlers = () => {
  modalTextarea.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      modalCheckbox.focus();
    };
  });

  modalCheckbox.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      modalButton.focus();
    };
  });

  modalButton.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      evt.preventDefault();
      closeModalFormButton.focus();
    };
  });
};

// Конец блока для изменения порядка фокуса

const closeModalForm = () => {
  modalForm.classList.add('modal--close');
  document.removeEventListener('keydown', onModalFormEscKeydown);
  document.removeEventListener('mouseup', clickOutsideModalForm);
  body.style.overflow = 'scroll';
  header.removeAttribute('inert');
  mainContainer.removeAttribute('inert');
  footer.removeAttribute('inert');
};

const openModalForm = () => {
  modalForm.classList.remove('modal--close');
  document.addEventListener('keydown', onModalFormEscKeydown);
  closeModalFormButton.addEventListener('click', closeModalForm);
  document.addEventListener('mouseup', clickOutsideModalForm);
  modalFormInputs[0].focus();
  body.style.overflow = 'hidden';
  header.inert = "true";
  mainContainer.inert = "true";
  footer.inert = "true";
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function onModalFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalForm();
  }
};

function clickOutsideModalForm (evt) {
  if (evt.target.classList.contains('modal')) {
    return closeModalForm();
  };
  return evt;
};

const modalFormHandler = () => {
  callMeButton.href="#";
  callMeButton.addEventListener('click', openModalForm);
};

export {modalFormHandler, modalFormFocusHandlers};
