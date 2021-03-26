const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
user:"root",
host:"localhost",
password:"password",
database:"LabworkReact",
});

app.post('/create',(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    db.query(
        "INSERT INTO farming (name, email, phone, address) VALUES (?,?,?,?)",
        [name, email, phone, address],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
});

app.get("/farmtable", (req, res) => {
    db.query("SELECT * FROM farming", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });






app.listen(3001, ()=>{
console.log("YESSSS IM RUNNING OVER 3001");
});