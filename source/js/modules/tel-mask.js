// Источник https://web-revenue.ru/verstka/maska-vvoda-telefona-v-input-na-js
// Внесены изменения под ТЗ

function telMask () {
  [].forEach.call( document.querySelectorAll('[data-input-phone="input-phone"]'), (input) => {
  let keyCode;
  function mask (event) {
    event.keyCode && (keyCode = event.keyCode);
    const pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, (a) => {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 4);
      new_value = new_value.slice(0, i )
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function(a) {
          return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
  input.addEventListener('click', () => {
    if (input.value.length < 5) {
      input.selectionStart = input.value.length;
    }
  });

  });
};

export {telMask};
