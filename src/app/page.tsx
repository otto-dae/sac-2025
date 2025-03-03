import Example from "../components/viewqr/SAC";
import { jsPDF } from "jspdf";


const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");

function BodyComponent() {
  return (
    <h1 className="text-3xl font-bold">
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/fondo.svg')", backgroundPosition: "bottom" }} />
      <Example />

    </h1>
  );
}

export default function Home() {
  return (
    <main>
      <BodyComponent /> {/* Agregamos BodyComponent aquí */}
    </main>
  );
}