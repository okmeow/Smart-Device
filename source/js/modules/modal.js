const callMeButton = document.querySelector('[data-header-call-me-button="header-call-me-button"]');
const closeModalFormButton = document.querySelector('[data-modal-close-button="modal-close-button"]');
const modalForm = document.querySelector('[data-modal="modal"]');
const modalFormInputs = document.querySelectorAll('[data-modal-input="modal-input"]');
const header = document.querySelector('[data-header="header"]');
const mainContainer = document.querySelector('[data-main-container="main-container"]');
const footer = document.querySelector('[data-footer="footer"]');
const body = document.querySelector('[data-body="body"]');

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

export {modalFormHandler};
