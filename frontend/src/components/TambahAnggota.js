import "../style/input.css";
import React, { useState } from "react";
import Axios from "axios";

function TambahBuku() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telp, setTelp] = useState("");

  const tambah = () => {
    Axios.post("http://localhost:3001/anggota/tambah", {
      nama: nama,
      alamat: alamat,
      no_telp: no_telp,
    }).then(() => {
      console.log = "Sukses!";
    });
  };

  return (
    <div className="input">
      <label>Nama</label>
      <input
        type="text"
        onChange={(event) => {
          setNama(event.target.value);
        }}
      />

      <label>Penerbit</label>
      <input
        type="text"
        onChange={(event) => {
          setAlamat(event.target.value);
        }}
      />

      <label>Pengarang</label>
      <input
        type="text"
        onChange={(event) => {
          setTelp(event.target.value);
        }}
      />

      <button onClick={tambah}>Tambah Anggota</button>
    </div>
  );
}

export default TambahBuku;
