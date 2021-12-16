import {
  makePaymentValue,
  formValidator,
  validatorsResolvers,
  hidePaymentPopUp,
  showPaymentPopUp,
  createPdf,
  fields,
  clearForm,
  useErrors,
} from "../utils";

export async function onSubmit(e) {
  e.preventDefault();
  const form = document.querySelector("#form");
  const formData = new FormData(form);
  const pdfData = {};
  const initialErrors = {
    name: "",
    payment: "",
    amount: "",
    date: "",
  };
  const { errors, setErrors, cleanErrors } = useErrors(initialErrors);

  let isValid = true;

  fields.forEach((field) => {
    const value = formData.get(field);
    if (formValidator(field, value, setErrors)) {
      validatorsResolvers.valid(field);

      if (field === "amount") {
        pdfData[field] = parseInt(value);
      } else {
        pdfData[field] = value;
      }
    } else {
      isValid = false;
      validatorsResolvers.invalid(field, errors);
    }
  });

  if (isValid) {
    await createPdf(pdfData);
    cleanErrors();
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
