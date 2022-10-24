const callMeButton = document.querySelector('[data-header-call-me-button="header-call-me-button"]');
const closeModalFormButton = document.querySelector('[data-modal-close-button="modal-close-button"]');
const modalForm = document.querySelector('[data-modal="modal"]');
const modalFormInputs = document.querySelectorAll('[data-modal-inout="modal-input"]');

const closeModalForm = () => {
  modalForm.classList.add('modal--close');
  document.removeEventListener('keydown', onModalFormEscKeydown);
  document.removeEventListener('mouseup', clickOutsideCloseModalForm);
  document.querySelector(".page__body").style.overflow = 'scroll';
};

const openModalForm = (evt) => {
  evt.preventDefault();
  modalForm.classList.remove('modal--close');
  document.addEventListener('keydown', onModalFormEscKeydown);
  closeModalFormButton.addEventListener('click', closeModalForm);
  document.addEventListener('mouseup', clickOutsideCloseModalForm);
  modalFormInputs[0].focus();
  document.querySelector(".page__body").style.overflow = 'hidden';
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function onModalFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalForm();
  }
};

function clickOutsideCloseModalForm (evt) {
  if (evt.target.classList.contains('modal')) {
    return closeModalForm();
  };
  return evt;
};

const modalFormHandler = () => {
  callMeButton.addEventListener('click', openModalForm);
};

export {modalFormHandler};
