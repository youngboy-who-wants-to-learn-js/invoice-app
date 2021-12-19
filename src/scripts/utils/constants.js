import { rgb } from "pdf-lib";

export const LineConfiguration = [
  {
    start: { x: 71, y: 656 },
    end: { x: 541, y: 656 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 565 },
    end: { x: 541, y: 565 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 515 },
    end: { x: 541, y: 515 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 565 },
    end: { x: 72, y: 515 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 541, y: 565 },
    end: { x: 541, y: 515 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 428 },
    end: { x: 541, y: 428 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 405 },
    end: { x: 541, y: 405 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 72, y: 428 },
    end: { x: 72, y: 405 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
  {
    start: { x: 541, y: 428 },
    end: { x: 541, y: 405 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 1,
  },
];

export const TextConfiguration = (tahomaBold, calibriBold, timesRoman) => ({
  [process.env.A]: {
    x: 72,
    y: 645,
    size: 10.5,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.B]: {
    x: 446,
    y: 645,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.C]: {
    x: 77,
    y: 550,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.D]: {
    x: 77,
    y: 536,
    size: 12,
    color: rgb(0, 0, 0),
    font: timesRoman,
  },
  [process.env.E]: {
    x: 77,
    y: 522,
    size: 12,
    color: rgb(0, 0, 0),
    font: timesRoman,
  },
  [process.env.F]: {
    x: 72,
    y: 456,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.G]: {
    x: 77,
    y: 413,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.H]: {
    x: 72,
    y: 320,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  },
  [process.env.I]: {
    x: 72,
    y: 228,
    color: rgb(0, 0, 0),
    size: 14,
    font: calibriBold,
  },
});

const mapNumberToMonth = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const MAP_NUMBER_TO_MONTH = Object.freeze(mapNumberToMonth);

export const TEMPLATE_DATA = {
  formTemplate: {
    templateId: "#form-template",
    templateContainerId: "#template-container",
    containerId: "#form-container",
  },
  lockTemplate: {
    templateId: "#lock-template",
    templateContainerId: "#template-container",
    containerId: "#lock-container",
  },
};

export const classNameBtnHidden = "btn_hidden";
export const classNameProfileHidden = "profile-info_hidden";
export const classNameRadioLabel = "form__item-radio-label";

export const fields = ["name", "payment", "amount", "date"];

export const ERROR_MESSAGE = {
  required: "This is required field",
  lessZero: "Number cannot be less than 0",
};
