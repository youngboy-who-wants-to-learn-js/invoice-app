import { ERROR_MESSAGE } from "./constants";
import { createErrorMessageElement, getInputByName, cx } from "./dom";

export const validators = {
  required(value) {
    if (typeof value !== "string") {
      return false;
    }

    const val = value.trim();
    if (val && val.length !== 0) {
      return true;
    }

    return false;
  },
  number(value) {
    const numberFromString = parseInt(value, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(numberFromString)) {
      return false;
    }
    if (numberFromString < 1) {
      return false;
    }
    return true;
  },
};

export const formValidator = (fieldName, val, setErrors) => {
  if (!validators.required(val)) {
    setErrors(fieldName, ERROR_MESSAGE.required);
    return false;
  }
  if (fieldName === "amount") {
    if (!validators.number(val)) {
      setErrors(fieldName, ERROR_MESSAGE.lessZero);
      return false;
    }
  }
  return true;
};

export const validatorsResolvers = {
  valid: (inputName) => {
    const input = getInputByName(inputName);
    cx.remove(input, "error");
    const parent = input.closest(".form__item");

    const { lastElementChild } = parent;
    if (lastElementChild && cx.has(lastElementChild, "validations-error")) {
      lastElementChild.remove();
    }
  },
  invalid: (inputName, errors) => {
    const input = getInputByName(inputName);

    const parent = input.closest(".form__item");
    const div = createErrorMessageElement(errors[inputName]);

    const { lastElementChild } = parent;
    if (lastElementChild && cx.has(lastElementChild, "validations-error")) {
      lastElementChild.remove();
    }

    cx.add(input, "error");
    parent.append(div);
  },
};
