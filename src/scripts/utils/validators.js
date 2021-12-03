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
