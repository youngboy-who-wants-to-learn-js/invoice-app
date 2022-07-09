import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import download from "downloadjs";

import { LineConfiguration, TextConfiguration } from "./constants";
import * as DateHelpers from "./utils";

import TahomaBold from "../../fonts/TahomaBold.ttf";
import CalibriBold from "../../fonts/calibri_bold.ttf";

export default async function createPdf({
  name,
  payment,
  amount,
  date,
  receiptmoneydate,
}) {
  const myPdfDoc = await PDFDocument.create();

  const resFonts = await fetch(TahomaBold);
  const resCalibri = await fetch(CalibriBold);

  const fontBytes = await resFonts.arrayBuffer();
  const fontCalibriBytes = await resCalibri.arrayBuffer();

  myPdfDoc.registerFontkit(fontkit);

  const tahomaBold = await myPdfDoc.embedFont(fontBytes);
  const calibriBold = await myPdfDoc.embedFont(fontCalibriBytes);
  const timesRoman = await myPdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = myPdfDoc.addPage([612, 792]);

  // draw all lines;

  LineConfiguration.forEach((config) => {
    page.drawLine(config);
  });

  // print all template text

  Object.entries(
    TextConfiguration(tahomaBold, calibriBold, timesRoman)
  ).forEach(([text, config]) => {
    page.drawText(text, config);
  });

  page.drawText(name, {
    x: 73,
    y: 660,
    font: tahomaBold,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText(DateHelpers.getMonthYear(date), {
    x: 135,
    y: 645,
    size: 10.5,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  });

  page.drawText(DateHelpers.getFullDate(receiptmoneydate), {
    x: 476,
    y: 645,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  });

  page.drawText(DateHelpers.getStringMonthYear(date), {
    x: 138,
    y: 413,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  });

  page.drawText(DateHelpers.getAmount(amount), {
    x: 374,
    y: 320,
    size: 10,
    color: rgb(0, 0, 0),
    font: tahomaBold,
  });

  page.drawText(payment, {
    x: 72,
    y: 205,
    color: rgb(0, 0, 0),
    size: 14,
    font: calibriBold,
  });

  const myPdfBytes = await myPdfDoc.save();

  download(
    myPdfBytes,
    `Invoice ${DateHelpers.getMonthYear(date, ".")} ${
      process.env.J
    } ${DateHelpers.getMonth(date)}.pdf`,
    "application/pdf"
  );
}
