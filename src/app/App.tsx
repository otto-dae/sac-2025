import React from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
