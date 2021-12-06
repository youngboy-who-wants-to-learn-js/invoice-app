import renderInputRadio from "./renderInputRadio";
import { onSubmit, onBlurName } from "../handlers/formHandlers";
import { showTemplate, hideTemplate, TEMPLATE_DATA } from "../utils";
// import { TEMPLATE_DATA } from "../utils/constants";

const renderForm = (user) => {
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
    form.name.addEventListener("blur", onBlurName);
    renderInputRadio();
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
};

export default renderForm;
