//открытие и закрытите формы авторизации
const authform = document.querySelector(".auth-form");
const authformbg = document.querySelector(".auth-form-bg");

document
  .querySelector(".main-container-header-enter")
  .addEventListener("click", () => {
    authform.classList.contains("auth-form-show")
      ? authform.classList.remove("auth-form-show")
      : authform.classList.add("auth-form-show");
    authformbg.classList.contains("auth-form-bg")
      ? authformbg.classList.remove("auth-form-bg-show")
      : authformbg.classList.add("auth-form-bg-show");
  });
//закрытите формы авторизации по крестику
document.querySelector(".auth-form-closebtn").addEventListener("click", () => {
  authformbg.classList.add("auth-form-bg-show");
  authform.classList.add("auth-form-show");
  resetForm.classList.remove("visible");
  authSection.classList.remove("collapse");
  newPasswordSection.classList.remove("visible");
  resetSectionCode2.classList.remove("visible");
});
let passwordIcon = document.querySelectorAll(".passwordIcon");
//скрыть показать пароль
passwordIcon.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentElement.querySelector("input[type=password]")) {
      item.parentElement.querySelector("input[type=password]").type = "text";
    } else if (item.parentElement.querySelector("input[type=text]")) {
      item.parentElement.querySelector("input[type=text]").type = "password";
    }
  });
});

let onValidationAuth = () => {
  let empty = Array.from(authInput).filter(
    (i) =>
      i.value === null || i.value === "" || i.value === i.value.defaultValue
  );
  let isfull = Array.from(authInput).filter(
    (i) =>
      i.value !== null || i.value !== "" || i.value !== i.value.defaultValue
  );

  isfull.forEach((item) => {
    item.classList.remove("is-danger");
    item.nextElementSibling.classList.remove("help");
  });

  empty.forEach((item) => {
    item.classList.toggle("is-danger");
    item.nextElementSibling.classList.toggle("help");
  });
};

let authInput = document.querySelectorAll("input[name=authInput]");
let authSubmit = document.getElementById("authform");
let reset = document.getElementById("reset");
//
authSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  onValidationAuth();
  console.log($(authSubmit).serializeArray());
});

reset.addEventListener("submit", (e) => {
  e.preventDefault();
  onValidationAuth();
});

//валидация при вводе
authInput.forEach((item) => {
  item.addEventListener("change", (e) => {
    onValidationAuth();
  });
});

let btnSubmitResetCode = document.getElementById("btnSubmitResetCode");
let btnSubmitResetCode2 = document.getElementById("btnSubmitResetCode2");
let resetPassword = document.getElementById("resetPassword");
let resetForm = document.querySelector(".resetSection");
let authSection = document.querySelector(".authSection");
let newPasswordSection = document.querySelector(".newPasswordSection");
let resetSectionCode2 = document.querySelector(".resetSectionCode2");

resetPassword.addEventListener("click", () => {
  resetForm.classList.add("visible");
  authSection.classList.add("collapse");
});

btnSubmitResetCode.addEventListener("click", () => {
  resetForm.classList.remove("visible");
  resetSectionCode2.classList.add("visible");
});
btnSubmitResetCode2.addEventListener("click", () => {
  resetSectionCode2.classList.remove("visible");
  newPasswordSection.classList.add("visible");
});
