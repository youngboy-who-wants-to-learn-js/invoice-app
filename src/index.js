import "@/styles/index.scss";

import { onSubmit, onBlurName } from "./scripts/handlers";
import { showTemplate, hideTemplate } from "./scripts/helpers";
import { signInWithGoogle, signOutGoogle, auth } from "./scripts/firebase";
import { TEMPLATE_DATA } from "./scripts/constants";

const signInButton = document.querySelector("#google-sign-in");
const signOutButton = document.querySelector("#google-sing-out");

auth.onAuthStateChanged((user) => {
  if (user) {
    const lockContainer = document.querySelector(
      TEMPLATE_DATA.lockTemplate.containerId
    );
    showTemplate(
      TEMPLATE_DATA.formTemplate.templateId,
      TEMPLATE_DATA.formTemplate.templateContainerId
    );
    if (lockContainer) {
      hideTemplate(TEMPLATE_DATA.lockTemplate.containerId);
    }

    const form = document.querySelector("#form");
    form.addEventListener("submit", onSubmit);
    form.name.addEventListener("blur", onBlurName(form));
  } else {
    const formContainer = document.querySelector(
      TEMPLATE_DATA.formTemplate.containerId
    );

    if (formContainer) {
      hideTemplate(TEMPLATE_DATA.formTemplate.containerId);
    }
    showTemplate(
      TEMPLATE_DATA.lockTemplate.templateId,
      TEMPLATE_DATA.lockTemplate.templateContainerId
    );
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
