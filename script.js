console.log("Script loaded");
const formEL = document.querySelector("#form");
const emailInputEl = document.querySelector("#email");
const errorMessageEl = document.querySelector(".input-error-hint");
const successMessageEl = document.querySelector(".success-message");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = emailInputEl.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue) {
    errorMessageEl.textContent = "Valid email required";
    errorMessageEl.style.display = "block";
    emailInputEl.classList.add("email-input-error");
    emailInputEl.focus();
    return;
  }
  if (!emailRegex.test(emailValue)) {
    errorMessageEl.textContent = "İnvalid email address";
    errorMessageEl.style.display = "block";
    emailInputEl.classList.add("email-input-error");
    emailInputEl.focus();
    return;
  }

  console.log("Form submitted successfully");
  emailInputEl.value = "";
  errorMessageEl.textContent = "";
  emailInputEl.classList.remove("email-input-error");
});

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => location.reload(), 500);
});
