const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'local host',
    password: 'password',
    database: 'HRTracker'
});

app.post("/create", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const position = req.body.position;
    const salary = req.body.salary;
    const manager = req.body.manager;

    db.query(
        "INSERT INTO employees (id, name, position, salary, wage) VALUES (?,?,?,?,?)",
        [name, position, salary, manager],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
});

app.listen(3001, () => (
    console.log("The server is running")
));