import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Header from "/header.jpg";
import Worl from "/worl.png";
import Footer from "/footer.png";
import Logo from "/logoSA.jpg";
const ExpInput = (props) => {
  const [expediente, setExpediente] = useState("");
  const [error, setError] = useState("");

  const generatePDF = (data) => {
    const doc = new jsPDF("a6");
    let base = 20;
    let columnVal = 30;
    let indexSecond = 0;
    data.forEach((element, index) => {
      const AMorPM =
        element.workshop_date.split("T")[1].split(".")[0].split(":")[0] >= 12
          ? "PM"
          : "AM";
      if (index === 0) {
        doc.addImage(Header, "JPEG", 20, 10, 170, 19);
        doc.addImage(Worl, "PNG", 5, columnVal, 30, 220);
        doc.addImage(Logo, "JPEG", 116, 10, 35, 18);
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Información del alumno", columnVal, 40);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.text(`Alumno: ${element.name}`, columnVal, 48);
        doc.text(`Expediente: ${element.exp}`, columnVal, 56);
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Eventos", columnVal, 72);
        doc.addImage(Footer, "PNG", 0, 282, 250, 15);
      }
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      if (index < 9) {
        doc.text(`Evento: ${element.ws_name}`, columnVal, 80 + base * index);
        doc.text(
          `${
            element.workshop_date.split("T")[0].split("-")[2] +
            "-" +
            element.workshop_date.split("T")[0].split("-")[1] +
            "-" +
            element.workshop_date.split("T")[0].split("-")[0] +
            " " +
            element.workshop_date.split("T")[1].split(".")[0].split(":")[0] +
            ":" +
            element.workshop_date.split("T")[1].split(".")[0].split(":")[1] +
            " " +
            AMorPM
          }`,
          columnVal,
          88 + base * index
        );
      } else if (index >= 9) {
        doc.text(`Evento: ${element.ws_name}`, 115, 80 + base * indexSecond);
        doc.text(
          `${
            element.workshop_date.split("T")[0] +
            " " +
            element.workshop_date.split("T")[1].split(".")[0].split(":")[0] +
            ":" +
            element.workshop_date.split("T")[1].split(".")[0].split(":")[1] +
            " " +
            AMorPM
          }`,
          115,
          88 + base * indexSecond
        );
        indexSecond++;
      }
    });

    const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
    const blobURL = URL.createObjectURL(blobPDF);

    const link = document.createElement('a');
    link.href = blobURL;

    link.download = 'asistencia.pdf';
    link.click();
    document.body.removeChild(link);

    setError("");
    alert("PDF downloaded successfully");
  };

  const handleSearch = async () => {
    // Simula la búsqueda en una base de datos
    try {
      console.log(expediente);
      const data = await fetch(`${process.env.REACT_APP_API_URL}/workshops`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ exp: expediente }),
      });
      const response = await data.json();
      response.length === 0 ? alert("No se encontraron datos") : generatePDF(response);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md">
        <div className="relative flex w-full flex-wrap items-stretch mt-3">
          <input
            placeholder="Expediente"
            type="text"
            inputMode="numeric"
            value={expediente}
            onChange={(e) => {
              setExpediente(e.target.value);
              setError("");
            }}
            className="px-4 py-2 placeholder-slate-300 text-slate-600 relativ bg-white rounded text-lg border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10 mx-auto"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-center items-center mt-3">
          <button
            type="button"
            className="bg-light-green hover:bg-white hover:text-but-blue text-but-blue font-bold py-2 px-4 mt-5 rounded"
            onClick={handleSearch}
          >
            Descargar asistencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpInput;