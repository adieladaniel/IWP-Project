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
  password: "Mob38385", // change to your MySQL password
  database: "lab_portal"
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ MySQL connected...");
});

// ---------------------- LOGIN ROUTES ----------------------

// Student login
app.post("/student/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      res.json({ message: "Student login successful", student: results[0] });
    } else {
      res.status(401).json({ message: "Invalid student credentials" });
    }
  });
});

// Teacher login
app.post("/teacher/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM teachers WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      res.json({ message: "Teacher login successful", teacher: results[0] });
    } else {
      res.status(401).json({ message: "Invalid teacher credentials" });
    }
  });
});

// Get student details by email
app.get("/student/details/:email", (req, res) => {
  const email = req.params.email;
  const sql = "SELECT reg_no, name, dept, class, email FROM students WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student details found", student: result[0] });
  });
});

// ---------------------- RESULTS ROUTES ----------------------

// Get all results for a student by register number
app.get("/results/:regno", (req, res) => {
  const regno = req.params.regno;
  console.log(`📋 Fetching results for student: ${regno}`);
  
  const sql = "SELECT * FROM results WHERE student_id = ?";
  db.query(sql, [regno], (err, results) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    
    if (results.length === 0) {
      console.log(`ℹ️ No results found for student ${regno}`);
      return res.status(404).json({ message: "No results found for this student" });
    }
    
    console.log(`✅ Found ${results.length} results for student ${regno}`);
    res.json(results);
  });
});

// Save or update student result - FIXED VERSION
app.post("/results/save", (req, res) => {
  const { regno, subject_code, subject_name, midsem, endsem } = req.body;
  
  console.log("📝 Received data:", { regno, subject_code, subject_name, midsem, endsem });

  // Validation
  if (!regno || !subject_code || !subject_name || midsem == null || endsem == null) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ 
      message: "Missing required fields",
      received: { regno, subject_code, subject_name, midsem, endsem }
    });
  }

  // Validate marks range
  if (midsem < 0 || midsem > 50 || endsem < 0 || endsem > 50) {
    console.log("❌ Invalid marks range");
    return res.status(400).json({ message: "Marks must be between 0 and 50" });
  }

  // Check if student exists
  const checkStudentSql = "SELECT reg_no FROM students WHERE reg_no = ?";
  db.query(checkStudentSql, [regno], (err, studentResults) => {
    if (err) {
      console.error("❌ Error checking student:", err);
      return res.status(500).json({ error: err.message });
    }

    if (studentResults.length === 0) {
      console.log(`❌ Student with reg_no ${regno} not found`);
      return res.status(404).json({ message: `Student with register number ${regno} not found` });
    }

    // Insert or update result
    const sql = `
      INSERT INTO results (student_id, subject_code, subject_name, midsem, endsem)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
        midsem = VALUES(midsem), 
        endsem = VALUES(endsem),
        updated_at = CURRENT_TIMESTAMP
    `;

    db.query(sql, [regno, subject_code, subject_name, midsem, endsem], (err, result) => {
      if (err) {
        console.error("❌ Error saving result:", err);
        return res.status(500).json({ error: err.message });
      }
      
      console.log(`✅ Result saved successfully for student ${regno}`);
      res.json({ 
        message: "Result saved successfully!",
        student_id: regno,
        subject: subject_name,
        midsem: midsem,
        endsem: endsem,
        total: midsem + endsem
      });
    });
  });
});

// Get all students (for admin/teacher dashboard)
app.get("/students", (req, res) => {
  const sql = "SELECT reg_no, name, dept, class FROM students ORDER BY reg_no";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get all results (for admin/teacher dashboard)
app.get("/results", (req, res) => {
  const sql = `
    SELECT r.*, s.name as student_name 
    FROM results r 
    JOIN students s ON r.student_id = s.reg_no 
    ORDER BY r.student_id, r.subject_code
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ---------------------- FRONTEND ----------------------

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "login_page.html"));
});

// ---------------------- ERROR HANDLING ----------------------
app.use((err, req, res, next) => {
  console.error("🚨 Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// ---------------------- START SERVER ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Test the marks saving at: http://localhost:${PORT}`);
});

module.exports = app;