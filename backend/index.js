const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.listen(3001, () => {
  console.log("Aktif gan");
});

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "perpus",
});

app.post("/tambah", (req, res) => {
  const judul = req.body.judul;
  const penerbit = req.body.penerbit;
  const pengarang = req.body.pengarang;

  db.query(
    "CALL tambah_buku (?, ?, ?)",
    [judul, penerbit, pengarang],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(["Sukses! Data Ditambahkan"]);
      }
    }
  );
});

app.get("/daftar", (req, res) => {
  db.query("SELECT * FROM buku", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id_buku;
  const judul = req.body.judul;
  const penerbit = req.body.penerbit;
  const pengarang = req.body.pengarang;

  db.query(
    "UPDATE buku SET judul = ?, penerbit = ?, pengarang = ? WHERE id_buku = ?",
    [judul, penerbit, pengarang, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id_buku", (req, res) => {
  const id = req.params.id_buku;

  db.query("DELETE FROM buku WHERE id_buku = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
