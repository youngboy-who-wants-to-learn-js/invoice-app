import renderInputRadio from "./renderInputRadio";
import { onSubmit, onBlurName } from "../handlers/formHandlers";
import { showTemplate, hideTemplate, TEMPLATE_DATA } from "../utils";

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

    const name = localStorage.getItem("name");
    const payment = localStorage.getItem("payment");

    if (name && payment) {
      form.name.value = name;
      form.payment.value = payment;
    }

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
