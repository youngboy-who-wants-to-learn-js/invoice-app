import "@/styles/index.scss";

import { onSubmit, onBlurName } from "./scripts/handlers";
import { showFormTemplate, removeFormTemplate } from "./scripts/helpers";
import { signInWithGoogle, signOutGoogle, auth } from "./scripts/firebase";

const signInButton = document.querySelector("#google-sign-in");
const signOutButton = document.querySelector("#google-sing-out");

auth.onAuthStateChanged((user) => {
  if (user) {
    showFormTemplate();
    const form = document.querySelector("#form");
    form.addEventListener("submit", onSubmit);
    form.name.addEventListener("blur", onBlurName(form));
  } else {
    const formContainer = document.querySelector("#form-container");
    if (formContainer) {
      removeFormTemplate();
    }
  }
});

signInButton.addEventListener("click", signInWithGoogle);
signOutButton.addEventListener("click", signOutGoogle);
//TODO new Date(2021, 11 , 0).getDate()
//TODO 3 месяца назад, 3 вперед
//TODO брать с локал сторедж прошлый месяц и подставлять текущий
//TODO add env
//TODO clean form after submit
//TODO add local storage
