import {
  makePaymentValue,
  formValidator,
  validatorsResolvers,
  hidePaymentPopUp,
  showPaymentPopUp,
  createPdf,
  fields,
  clearForm,
} from "../utils";

export async function onSubmit(e) {
  e.preventDefault();
  const form = document.querySelector("#form");
  const formData = new FormData(form);
  const pdfData = {};
  let isValid = true;

  fields.forEach((field) => {
    const value = formData.get(field);
    console.log(`name:${field} value: ${value}`);
    if (formValidator(field, value)) {
      validatorsResolvers.valid(field);
      pdfData[field] = value;
    } else {
      isValid = false;
      validatorsResolvers.invalid(field);
    }
  });

  if (isValid) {
    await createPdf(pdfData);
    clearForm(form);
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
