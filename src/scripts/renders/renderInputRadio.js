import {
  generatePeriod,
  createRadioFormItem,
  MAP_NUMBER_TO_MONTH,
} from "../utils";

// <label class="form__item-radio-label">
//   <input type="radio" name="date" value="1" />
//   <span>HTML</span>
// </label>

const renderInputRadio = () => {
  const radioInputsContainer = document.querySelector(
    "#radio-labels-container"
  );
  const currentMonth = new Date().getMonth() + 1;
  const period = generatePeriod();
  const radioInputsElements = period.map(({ month, year }) =>
    createRadioFormItem(
      `${year}-${month}`,
      currentMonth === month,
      `${MAP_NUMBER_TO_MONTH[month]} ${year}`
    )
  );

  radioInputsContainer.append(...radioInputsElements);
};

export default renderInputRadio;
