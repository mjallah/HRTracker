const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'local host',
    password: 'password',
    database: 'HRTracker'
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const position = req.body.position;
    const salary = req.body.salary;
    const manager = req.body.manager;

    db.query(
        "INSERT INTO employees (name, position, salary, wage) VALUES (?,?,?,?,?)",
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