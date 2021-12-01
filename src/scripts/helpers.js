export const showPopUp = (element) => {
  const popUpTemplate = document.querySelector("#payment-popup-notice");
  const clone = popUpTemplate.content.cloneNode(true);
  const popUp = document.querySelector("#payment-popup");
  if (!popUp) {
    element.append(clone);
  }
};

export const hidePopUp = (element) => {
  const popUp = document.querySelector("#payment-popup");
  popUp.remove();
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

export const validators = {
  required: (value) => {
    const val = value.trim();
    if (val && val.length !== 0) {
      return true;
    }

    return false;
  },
};

export const validatorsResolvers = {
  valid: (input) => {
    const nextElem = input.nextElementSibling;

    if (nextElem) {
      nextElem.remove();
      input.classList.remove("error");
    }
  },
  invalid: (input) => {
    const parent = input.closest("div");
    const div = document.createElement("div");
    div.classList.add("validations-error");
    div.innerText = "This is required field";

    input.classList.add("error");
    parent.append(div);
  },
};
