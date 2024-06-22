import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import Button from "./Button";
import DatsolLogo from "../assets/Logo.png";

const GeneratePDF = ({
  name,
  email,
  colleges,
  criteria,
  state,
  rank,
  jeeExam,
  stateQuota,
  categories,
}) => {
  const generatePdfDocument = async (type) => {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Embed the Helvetica-Bold font for headings and Helvetica for content
    const helveticaBoldFont = await pdfDoc.embedFont(
      StandardFonts.HelveticaBold
    );
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Add a page to the document
    const page = pdfDoc.addPage([600, 700]);

    // Set font sizes
    const fontSizeTitle = 18;
    const fontSizeHeading = 14;
    const fontSizeContent = 12;

    // Initial y position for content
    let yPosition = 650;

    // Title
    page.drawText("College Application Details", {
      x: 50,
      y: yPosition,
      size: fontSizeTitle,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20; // Move y position up for next content
    const logoBytes = await fetch(DatsolLogo).then((res) => res.arrayBuffer());
    const logoWidth = 100; // Set desired width for the logo

    const logoImage = await pdfDoc.embedPng(logoBytes);
    page.drawImage(logoImage, {
      x: 470,
      y: yPosition + 10,
      width: logoWidth,
      height: logoWidth * (logoImage.height / logoImage.width),
    });

    // Applicant Information
    page.drawText(`Applicant Name: ${name}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;
    page.drawText(`Email: ${email}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;

    // Additional Information
    page.drawText(`State: ${state}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;
    page.drawText(`Rank: ${rank}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;
    page.drawText(`JEE Exam: ${jeeExam}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;
    page.drawText(`State Quota: ${stateQuota}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;
    page.drawText(`Categories: ${categories.join(", ")}`, {
      x: 50,
      y: yPosition,
      size: fontSizeContent,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 30;

    // Top 5 Colleges (Sorted by Rating)
    page.drawText("Top 5 colleges according to your preferences:", {
      x: 50,
      y: yPosition,
      size: fontSizeHeading,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;

    colleges.forEach((college, index) => {
      page.drawText(`${index + 1}. ${college.institute_name}`, {
        x: 70,
        y: yPosition,
        size: fontSizeContent,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      yPosition -= 20;

      page.drawText(`${college.department}`, {
        x: 85,
        y: yPosition,
        size: fontSizeContent,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      yPosition -= 20;

      page.drawText(`Rating: ${college.overallRating.toFixed(2)}`, {
        x: 85,
        y: yPosition,
        size: fontSizeContent,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      yPosition -= 20;
    });

    yPosition -= 10;

    // Criteria
    page.drawText("Choosed Criteria:", {
      x: 50,
      y: yPosition,
      size: fontSizeHeading,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });

    yPosition -= 20;

    criteria.forEach((criterion, index) => {
      page.drawText(`${index + 1}. ${criterion}`, {
        x: 70,
        y: yPosition,
        size: fontSizeContent,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      yPosition -= 20;
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Create a Blob object for the PDF bytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Open the PDF in a new tab (optional)
    if (type === "preview") window.open(url, "_blank");
    if (type === "download") {
      const a = document.createElement("a");
      a.href = url;
      a.download = "PrefRankCollege.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Button
        title={"Preview"}
        handleClick={() => generatePdfDocument("preview")}
      />
      <Button
        title={"Download"}
        handleClick={() => generatePdfDocument("download")}
      />
    </>
  );
};

export default GeneratePDF;
