"use client";

import React from "react";
import BackgroundComponent from "../components/generatepdf/PDF";

function BodyComponent() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-no-repeat" />

      <BackgroundComponent />
    </div>
  );
}

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center">
      <BodyComponent />
    </main>
  );
};

export default Home;