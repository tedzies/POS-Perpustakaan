import "./App.css";
import React from "react";
import TambahBuku from "./components/TambahBuku.js";
import DaftarBuku from "./components/DaftarBuku.js";

function App() {
  return (
    <div className="App">
      <TambahBuku />
      <DaftarBuku />
    </div>
  );
}

export default App;
