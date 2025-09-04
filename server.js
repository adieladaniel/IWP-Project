const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS)
app.use(express.static(__dirname));

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // your MySQL username
    password: '',       // your MySQL password
    database: 'lab_portal'
});

db.connect(err => {
    if(err) throw err;
    console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
    const student_id = req.body.student_id;
    const password = req.body.password;

    const sql = "SELECT * FROM students WHERE student_id = ? AND password = ?";
    db.query(sql, [student_id, password], (err, result) => {
        if(err) throw err;

        if(result.length > 0){
            // Login success
            res.redirect('/student.html');
        } else {
            // Login failed
            res.send("<script>alert('Invalid Student ID or Password'); window.history.back();</script>");
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
