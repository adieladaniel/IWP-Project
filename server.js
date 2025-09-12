// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",      // change to your MySQL username
//   password: "123456",      // change to your MySQL password
//   database: "lab_portal"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("✅ MySQL connected...");
// });

// // Register user
// app.post("/register", (req, res) => {
//   const { name, email, role, password } = req.body;
//   const sql = "INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)";
//   db.query(sql, [name, email, role, password], (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send({ message: "User registered successfully!" });
//   });
// });

// // Login user
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//   db.query(sql, [email, password], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length > 0) {
//       res.send({ message: "Login successful", user: results[0] });
//     } else {
//       res.status(401).send({ message: "Invalid credentials" });
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });

// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",       // change if needed
//   password: "123456", // change if needed
//   database: "lab_portal"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("✅ MySQL connected...");
// });

// // Register user (optional)
// app.post("/register", (req, res) => {
//   const { name, email, role, password } = req.body;
//   const sql =
//     "INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)";
//   db.query(sql, [name, email, role, password], (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send({ message: "User registered successfully!" });
//   });
// });

// // Login user
// app.post("/login", (req, res) => {
//   const { email, password, role } = req.body;
//   const sql =
//     "SELECT * FROM users WHERE email = ? AND password = ? AND role = ?";
//   db.query(sql, [email, password, role], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length > 0) {
//       res.send({ message: "Login successful", user: results[0] });
//     } else {
//       res.status(401).send({ message: "Invalid credentials or role" });
//     }
//   });
// });

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, "public")));

// // Default route (open login_page.html when visiting /)
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "html", "login_page.html"));
// });

// // Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000/html/login_page.html");
// });


// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",       // change if needed
//   password: "123456", // change if needed
//   database: "lab_portal"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("✅ MySQL connected...");
// });

// // Student login
// app.post("/student/login", (req, res) => {
//   const { email, password } = req.body;
//   const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
//   db.query(sql, [email, password], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length > 0) {
//       res.send({ message: "Student login successful", student: results[0] });
//     } else {
//       res.status(401).send({ message: "Invalid student credentials" });
//     }
//   });
// });

// // Teacher login
// app.post("/teacher/login", (req, res) => {
//   const { email, password } = req.body;
//   const sql = "SELECT * FROM teachers WHERE email = ? AND password = ?";
//   db.query(sql, [email, password], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length > 0) {
//       res.send({ message: "Teacher login successful", teacher: results[0] });
//     } else {
//       res.status(401).send({ message: "Invalid teacher credentials" });
//     }
//   });
// });

// // Serve static frontend files
// // app.use("/static", express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public")));


// // Default route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "html", "login_page.html"));
// });

// // Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running on http://localhost:5000");
// });




const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "lab_portal"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL connected...");
});

// Student login
app.post("/student/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.send({ message: "Student login successful", student: results[0] });
    } else {
      res.status(401).send({ message: "Invalid student credentials" });
    }
  });
});

// NEW ROUTE: Get student details by email
app.get("/student/details/:email", (req, res) => {
  const email = req.params.email;
  console.log('Fetching student details for email:', email);
  const sql = "SELECT reg_no, name, dept, class, email FROM students WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length === 0) {
      console.log('No student found with email:', email);
      return res.status(404).json({ error: "Student not found" });
    }
    console.log('Found student:', result[0]);
    res.json({ message: "Student details found", student: result[0] });
  });
});

// Teacher login
app.post("/teacher/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM teachers WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.send({ message: "Teacher login successful", teacher: results[0] });
    } else {
      res.status(401).send({ message: "Invalid teacher credentials" });
    }
  });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "login_page.html"));
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});







