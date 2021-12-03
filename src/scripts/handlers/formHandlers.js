import createPdf from "../utils/pdf";

import { makePaymentValue } from "../utils/utils";
import { validators, validatorsResolvers } from "../utils/validators";
import { hidePaymentPopUp, showPaymentPopUp } from "../utils/dom";

export async function onSubmit(e) {
  const fields = document.querySelectorAll("#form > .form__item > input");
  // const form = document.querySelector("#form");
  // const formData = new FormData(form);
  // for (const entry of formData) {
  //   console.log(entry[0] + "=" + entry[1]);
  // }
  e.preventDefault();
  const pdfData = {};
  let isValid = true;

  fields.forEach((input) => {
    if (validators.required(input.value)) {
      validatorsResolvers.valid(input);
      pdfData[input.name] = input.value;
    } else {
      isValid = false;
      validatorsResolvers.invalid(input);
    }
  });
  if (isValid) {
    await createPdf(pdfData);
  }
}

export const onBlurName = (e) => {
  const form = e.target.closest("form");
  const { value } = form.name;
  if (value) {
    const closestElem = form.payment.closest("div");
    form.payment.value = makePaymentValue(value);
    form.payment.style.border = "3px solid green";

    showPaymentPopUp(closestElem, true);

    setTimeout(() => {
      form.payment.style.border = "2px solid gray";
      hidePaymentPopUp();
    }, 2000);
  }
};
