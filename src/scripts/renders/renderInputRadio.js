import {
  generatePeriod,
  createRadioFormItem,
  // useMonthToLastDay,
  MAP_NUMBER_TO_MONTH,
} from "../utils";

//TODO check if child elements need to be removed before redrawing
const renderInputRadio = () => {
  const radioInputsContainer = document.querySelector(
    "#radio-labels-container"
  );
  const currentMonth = new Date().getMonth() + 1;
  const period = generatePeriod();
  const radioInputsElements = period.map(({ month, year }) =>
    createRadioFormItem(
      `${year}-${month}`,
      month === currentMonth,
      `${MAP_NUMBER_TO_MONTH[month]} ${year}`
    )
  );

  radioInputsContainer.append(...radioInputsElements);
};

export default renderInputRadio;
