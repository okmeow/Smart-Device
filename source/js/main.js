import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {modalFormHandler} from './modules/modal.js'
// import {modalFormHandler, modalFormFocusHandlers} from './modules/modal.js'
import {mobileFooterNavClickHandler, mobileFooterContactsClickHandler} from './modules/footer-menu.js'
import {telMask} from './modules/tel-mask.js'
import {breakpointChecker} from './modules/breakpoint-checker.js'
import {feedbackFormHandlers} from './modules/feedback-form.js'

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  breakpointChecker();
  telMask();
  mobileFooterNavClickHandler();
  mobileFooterContactsClickHandler();
  feedbackFormHandlers();
  modalFormHandler();
  // modalFormFocusHandlers();
  console.log('a');
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
