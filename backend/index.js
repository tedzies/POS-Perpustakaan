const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.listen(3001, () =>{
    console.log("Aktif gan");
});

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'perpus',
});

app.post('/tambah', (req, res) => {
    const judul = req.body.judul
    const penerbit = req.body.penerbit
    const pengarang = req.body.pengarang

    db.query("CALL tambah_buku (?, ?, ?)", [judul, penerbit, pengarang], (err, res) => {
        if (err){
            console.log(err)
        }
        else {
            //res.send("Sukses! Data Ditambahkan")
        }
    })
});

