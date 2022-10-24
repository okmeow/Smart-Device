const callMeButton = document.querySelector('.header__call-me-button');
const closeModalFormButton = document.querySelector('.modal__close-button');
const modalForm = document.querySelector('.modal');
const modalFormInputs = document.querySelectorAll('.modal__input');

const closeModalForm = () => {
  modalForm.classList.add('modal--close');
  document.removeEventListener('keydown', onModalFormEscKeydown);
  document.querySelector(".page__body").style.overflow = 'scroll';
};

const openModalForm = (evt) => {
  evt.preventDefault();
  modalForm.classList.remove('modal--close');
  document.addEventListener('keydown', onModalFormEscKeydown);
  closeModalFormButton.addEventListener('click', closeModalForm);
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

const modalFormHandler = () => {
  callMeButton.addEventListener('click', openModalForm);
};

export {modalFormHandler};
