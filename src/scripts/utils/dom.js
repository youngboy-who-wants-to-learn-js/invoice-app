import { classNameRadioLabel } from "./constants";

export const showPaymentPopUp = (element) => {
  const popUpTemplate = document.querySelector("#payment-popup-notice");
  const clone = popUpTemplate.content.cloneNode(true);
  const popUp = document.querySelector("#payment-popup");
  if (!popUp) {
    element.append(clone);
  }
};

export const hidePaymentPopUp = () => {
  const popUp = document.querySelector("#payment-popup");
  if (popUp) {
    popUp.remove();
  }
};

export const showTemplate = (templateId, templateContainerId) => {
  const template = document.querySelector(templateId);
  const container = document.querySelector(templateContainerId);
  const clone = template.content.cloneNode(true);

  container.append(clone);
};

export const hideTemplate = (containerId) => {
  const container = document.querySelector(containerId);
  container.remove();
};

export const cx = {
  add: (elem, className) => {
    if (!elem.classList.contains(className)) {
      elem.classList.add(className);
    }
  },
  remove: (elem, className) => {
    if (elem.classList.contains(className)) {
      elem.classList.remove(className);
    }
  },
  has: (elem, className) => elem.classList.contains(className),
};

export const createRadioFormItem = (
  inputValue = "",
  checked = false,
  title = ""
) => {
  const label = document.createElement("label");
  label.classList.add(classNameRadioLabel);

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "date";
  input.value = inputValue;
  input.checked = checked;

  const span = document.createElement("span");
  span.textContent = title;
  label.append(input, span);
  return label;
};

export const createErrorMessageElement = () => {
  const div = document.createElement("div");
  div.classList.add("validations-error");
  div.innerText = "This is required field";
  return div;
};

export const getInputByName = (intputName) =>
  document.querySelector(`[name=${intputName}]`);

export const clearForm = (form) => {
  for (let input of form.elements) {
    if (input.type === "radio") {
      input.checked = false;
    } else {
      input.value = "";
    }
  }
};
