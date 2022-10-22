const callMeButton = document.querySelector('.header__call-me-button');
const closeModalFormButton = document.querySelector('.modal__close-button');
const modalForm = document.querySelector('.modal');
const modalFormInputs = document.querySelectorAll('.modal__input');

const closeModalForm = () => {
  modalForm.classList.add('modal--close');
  document.removeEventListener('keydown', onModalFormEscKeydown);
  document.querySelector(".page__body").style.overflow = 'scroll';
};

const openModalForm = () => {
  modalForm.classList.remove('modal--close');
  document.addEventListener('keydown', onModalFormEscKeydown);
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

const modalFormToggler = () => {
  callMeButton.addEventListener('click', openModalForm);
  closeModalFormButton.addEventListener('click', closeModalForm);
};

export {modalFormToggler};
