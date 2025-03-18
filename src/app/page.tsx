"use client";

import React from "react";
import Example from "../components/viewqr/SAC";

function BodyComponent() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-no-repeat" />

      <Example />
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