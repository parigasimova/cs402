const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "socialmedia",
});

connection.connect((err) => {
    if (err) {
        console.error("MySQL connection error: " + err.stack);
        return;
    }
    console.log("Connected to MySQL database as ID " + connection.threadId);
});

// Önceden gelen kodlar

// Dizi oluşturmak için boş bir dizi tanımlayın
const userArray = [];

// POST: Kullanıcı Ekleme
app.post("/users", (req, res) => {
    const { ad, soyad, password, adres } = req.body;

    // Kullanıcı bilgilerini diziye ekleyin
    const newUser = {
        ad,
        soyad,
        password,
        adres,
    };
    userArray.push(newUser);

    // Veritabanına eklemek yerine diziyi kullanabilirsiniz
    console.log("Yeni kullanıcı eklendi:", newUser);

    res.status(201).send("Kullanıcı başarıyla eklendi.");
});


// DELETE: Kullanıcı Silme
app.delete("/users", (req, res) => {
    const userId = req.body.ID; // ID sütunu olarak düzeltildi
    const query = "DELETE FROM users WHERE ID = ?"; // ID sütunu olarak düzeltildi
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error("istifadeci silinen zaman pb yarandi: " + err.stack);
            res.status(500).send("Kullanıcı silerken hata oluştu.");
        } else {
            res.status(200).send("Kullanıcı başarıyla silindi.");
        }
    });
});


app.get("/users", (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error("Kullanıcıları getirirken hata oluştu: " + err.stack);
            res.status(500).send("Kullanıcıları getirirken hata oluştu.");
        } else {
            res.status(200).json(results);
        }
    });
});


app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM users WHERE ID = ?";
  connection.query(query, [userId], (err, results) => {
      if (err) {
          console.error("istiadeci getirilmedi- " + err.stack);
          res.status(500).send("istiadeci getirilmedi");
      } else {
          if (results.length === 0) {
              res.status(404).send("gosterilen idye sahib istifadeci yoxdur");
          } else {
              res.status(200).json(results[0]);
          }
      }
  });
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
