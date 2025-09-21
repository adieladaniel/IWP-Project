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
//   user: "root",
//   password: "123456",
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

// // NEW ROUTE: Get student details by email
// app.get("/student/details/:email", (req, res) => {
//   const email = req.params.email;
//   console.log('Fetching student details for email:', email);
//   const sql = "SELECT reg_no, name, dept, class, email FROM students WHERE email = ?";
//   db.query(sql, [email], (err, result) => {
//     if (err) {
//       console.error('Database error:', err);
//       return res.status(500).json({ error: "Database error" });
//     }
//     if (result.length === 0) {
//       console.log('No student found with email:', email);
//       return res.status(404).json({ error: "Student not found" });
//     }
//     console.log('Found student:', result[0]);
//     res.json({ message: "Student details found", student: result[0] });
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
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "lab_portal"
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log("✅ MySQL connected...");
// });

// // Student login
// app.post("/student/login", (req, res) => {
//     const { email, password } = req.body;
//     const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
//     db.query(sql, [email, password], (err, results) => {
//         if (err) return res.status(500).send(err);
//         if (results.length > 0) {
//             res.send({ message: "Student login successful", student: results[0] });
//         } else {
//             res.status(401).send({ message: "Invalid student credentials" });
//         }
//     });
// });

// // Get student details by email
// app.get("/student/details/:email", (req, res) => {
//     const email = req.params.email;
//     console.log('Fetching student details for email:', email);
//     const sql = "SELECT reg_no, name, dept, class, email FROM students WHERE email = ?";
//     db.query(sql, [email], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ error: "Database error" });
//         }
//         if (result.length === 0) {
//             console.log('No student found with email:', email);
//             return res.status(404).json({ error: "Student not found" });
//         }
//         console.log('Found student:', result[0]);
//         res.json({ message: "Student details found", student: result[0] });
//     });
// });

// // Teacher login
// app.post("/teacher/login", (req, res) => {
//     const { email, password } = req.body;
//     const sql = "SELECT * FROM teachers WHERE email = ? AND password = ?";
//     db.query(sql, [email, password], (err, results) => {
//         if (err) return res.status(500).send(err);
//         if (results.length > 0) {
//             res.send({ message: "Teacher login successful", teacher: results[0] });
//         } else {
//             res.status(401).send({ message: "Invalid teacher credentials" });
//         }
//     });
// });

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, "public")));

// // Routes for HTML pages
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "html", "login_page.html"));
// });

// app.get("/student-login", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "html", "student_login.html"));
// });

// app.get("/teacher-login", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "html", "teacher_login.html"));
// });

// app.get("/student", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "html", "student.html"));
// });

// app.get("/teacher-dashboard", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "html", "teacher-dashboard.html"));
// });

// // Handle HTML files in html directory
// app.get("/html/:filename", (req, res) => {
//     const filename = req.params.filename;
//     res.sendFile(path.join(__dirname, "public", "html", filename));
// });

// // Start server
// app.listen(5000, () => {
//     console.log("🚀 Server running on http://localhost:5000");
//     console.log("📱 Student Login: http://localhost:5000/html/student_login.html");
//     console.log("👩‍🏫 Teacher Login: http://localhost:5000/html/teacher_login.html");
// });





// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // MySQL connection with better error handling
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // change to your MySQL username
//     password: '123456', // change to your MySQL password
//     database: 'lab_portal', // change to your database name
//     acquireTimeout: 60000,
//     timeout: 60000
// });

// db.connect((err) => {
//     if (err) {
//         console.error('❌ MySQL connection failed:', err);
//         return;
//     }
//     console.log('✅ MySQL connected successfully!');
// });

// // Handle connection errors
// db.on('error', (err) => {
//     console.error('❌ Database error:', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//         console.log('🔄 Attempting to reconnect to database...');
//     }
// });

// // ==================== TEACHER LOGIN ROUTES ====================

// app.post('/teacher-login', (req, res) => {
//     const { email, password } = req.body;
//     console.log('🔍 Teacher login attempt:', { email });
    
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }
    
//     const sql = 'SELECT * FROM teachers WHERE email = ? AND password = ?';
    
//     db.query(sql, [email, password], (err, results) => {
//         if (err) {
//             console.error('❌ Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err.message });
//         }
        
//         if (results.length > 0) {
//             console.log('✅ Teacher login successful:', results[0].email);
//             res.json({ 
//                 message: 'Teacher login successful', 
//                 teacher: {
//                     id: results[0].id,
//                     name: results[0].name,
//                     email: results[0].email,
//                     department: results[0].department
//                 }
//             });
//         } else {
//             console.log('❌ Invalid teacher credentials for:', email);
//             res.status(401).json({ message: 'Invalid email or password. Please try again.' });
//         }
//     });
// });

// // ==================== STUDENT LOGIN ROUTES ====================

// app.post('/student-login', (req, res) => {
//     const { email, password, regNo } = req.body;
//     console.log('🔍 Student login attempt:', { email, regNo });
    
//     let sql, params;
//     if (regNo) {
//         sql = 'SELECT * FROM students WHERE reg_no = ? AND password = ?';
//         params = [regNo, password];
//     } else if (email) {
//         sql = 'SELECT * FROM students WHERE email = ? AND password = ?';
//         params = [email, password];
//     } else {
//         return res.status(400).json({ message: 'Email/Registration number and password are required' });
//     }
    
//     db.query(sql, params, (err, results) => {
//         if (err) {
//             console.error('❌ Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err.message });
//         }
        
//         if (results.length > 0) {
//             console.log('✅ Student login successful:', results[0].reg_no);
//             res.json({ 
//                 message: 'Student login successful', 
//                 student: {
//                     id: results[0].id,
//                     reg_no: results[0].reg_no,
//                     name: results[0].name,
//                     email: results[0].email,
//                     semester: results[0].semester,
//                     department: results[0].department
//                 }
//             });
//         } else {
//             console.log('❌ Invalid student credentials');
//             res.status(401).json({ message: 'Invalid credentials. Please try again.' });
//         }
//     });
// });

// // ==================== MARKS FUNCTIONALITY - FIXED ====================

// app.post('/api/save-marks', (req, res) => {
//     const { examType, marksData } = req.body;
    
//     console.log('📝 Save marks request received:', { 
//         examType, 
//         marksDataCount: marksData?.length,
//         marksData: marksData 
//     });
    
//     // Input validation
//     if (!examType || (examType !== 'mid' && examType !== 'end')) {
//         return res.status(400).json({ 
//             message: 'Invalid exam type. Must be "mid" or "end"', 
//             success: false 
//         });
//     }
    
//     if (!marksData || !Array.isArray(marksData) || marksData.length === 0) {
//         return res.status(400).json({ 
//             message: 'No valid marks data provided', 
//             success: false 
//         });
//     }
    
//     // Validate each marks entry
//     const validatedMarks = [];
//     const validationErrors = [];
    
//     for (let i = 0; i < marksData.length; i++) {
//         const mark = marksData[i];
//         const { registerNumber, studentName, marks } = mark;
        
//         // Check required fields
//         if (!registerNumber) {
//             validationErrors.push(`Entry ${i + 1}: Missing register number`);
//             continue;
//         }
        
//         if (!studentName) {
//             validationErrors.push(`Entry ${i + 1}: Missing student name`);
//             continue;
//         }
        
//         if (marks === undefined || marks === null || marks === '') {
//             validationErrors.push(`Entry ${i + 1}: Missing marks for ${studentName}`);
//             continue;
//         }
        
//         const marksNum = parseInt(marks);
//         if (isNaN(marksNum) || marksNum < 0 || marksNum > 100) {
//             validationErrors.push(`Entry ${i + 1}: Invalid marks (${marks}) for ${studentName}. Must be 0-100`);
//             continue;
//         }
        
//         validatedMarks.push({
//             registerNumber: registerNumber.toString().trim(),
//             studentName: studentName.trim(),
//             marks: marksNum,
//             subjectCode: mark.subjectCode || 'IWP',
//             subjectName: mark.subjectName || 'Internet and Web Programming'
//         });
//     }
    
//     if (validationErrors.length > 0) {
//         return res.status(400).json({
//             message: `Validation failed: ${validationErrors.join(', ')}`,
//             errors: validationErrors,
//             success: false
//         });
//     }
    
//     if (validatedMarks.length === 0) {
//         return res.status(400).json({
//             message: 'No valid marks to save after validation',
//             success: false
//         });
//     }
    
//     // Process each mark using promises for better error handling
//     const processMarks = async () => {
//         const results = [];
//         const errors = [];
        
//         for (const mark of validatedMarks) {
//             try {
//                 const { registerNumber, studentName, marks, subjectCode, subjectName } = mark;
                
//                 // First check if student exists (optional - you can remove this if not needed)
//                 const studentCheckResult = await new Promise((resolve, reject) => {
//                     db.query('SELECT reg_no FROM students WHERE reg_no = ? LIMIT 1', [registerNumber], (err, rows) => {
//                         if (err) reject(err);
//                         else resolve(rows);
//                     });
//                 });
                
//                 // Check if results record exists
//                 const existingResult = await new Promise((resolve, reject) => {
//                     db.query(
//                         'SELECT * FROM results WHERE student_id = ? AND subject_code = ?',
//                         [registerNumber, subjectCode],
//                         (err, rows) => {
//                             if (err) reject(err);
//                             else resolve(rows);
//                         }
//                     );
//                 });
                
//                 let query, params;
                
//                 if (existingResult.length > 0) {
//                     // Update existing record
//                     if (examType === 'mid') {
//                         query = 'UPDATE results SET midsem = ?, updated_at = CURRENT_TIMESTAMP WHERE student_id = ? AND subject_code = ?';
//                         params = [marks, registerNumber, subjectCode];
//                     } else {
//                         query = 'UPDATE results SET endsem = ?, updated_at = CURRENT_TIMESTAMP WHERE student_id = ? AND subject_code = ?';
//                         params = [marks, registerNumber, subjectCode];
//                     }
//                 } else {
//                     // Insert new record
//                     if (examType === 'mid') {
//                         query = 'INSERT INTO results (student_id, subject_code, subject_name, midsem, created_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)';
//                         params = [registerNumber, subjectCode, subjectName, marks];
//                     } else {
//                         query = 'INSERT INTO results (student_id, subject_code, subject_name, endsem, created_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)';
//                         params = [registerNumber, subjectCode, subjectName, marks];
//                     }
//                 }
                
//                 // Execute the query
//                 await new Promise((resolve, reject) => {
//                     db.query(query, params, (err, result) => {
//                         if (err) reject(err);
//                         else resolve(result);
//                     });
//                 });
                
//                 results.push({
//                     registerNumber,
//                     studentName,
//                     marks,
//                     status: 'success'
//                 });
                
//                 console.log(`✅ Successfully processed marks for ${studentName} (${registerNumber}): ${marks}`);
                
//             } catch (error) {
//                 console.error(`❌ Error processing marks for ${mark.studentName}:`, error);
//                 errors.push({
//                     registerNumber: mark.registerNumber,
//                     studentName: mark.studentName,
//                     error: error.message
//                 });
//             }
//         }
        
//         return { results, errors };
//     };
    
//     // Process all marks
//     processMarks()
//         .then(({ results, errors }) => {
//             const successCount = results.length;
//             const total = validatedMarks.length;
            
//             if (errors.length === 0) {
//                 // All successful
//                 console.log(`✅ Successfully saved ${examType} marks for ${successCount} students`);
//                 res.json({
//                     message: `Successfully saved ${examType === 'mid' ? 'Mid Semester' : 'End Semester'} marks for ${successCount} students`,
//                     success: true,
//                     successCount: successCount,
//                     totalCount: total,
//                     results: results
//                 });
//             } else {
//                 // Partial success
//                 console.log(`⚠️ Partial success: ${successCount}/${total} marks saved`);
//                 res.status(500).json({
//                     message: `Partial success: ${successCount}/${total} marks saved. Some errors occurred.`,
//                     success: false,
//                     successCount: successCount,
//                     totalCount: total,
//                     results: results,
//                     errors: errors
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('❌ Fatal error in processMarks:', error);
//             res.status(500).json({
//                 message: 'Fatal error occurred while saving marks',
//                 success: false,
//                 error: error.message
//             });
//         });
// });

// // Get student results
// app.get('/api/results/:studentId', (req, res) => {
//     const { studentId } = req.params;
    
//     const sql = 'SELECT * FROM results WHERE student_id = ? ORDER BY subject_name';
//     db.query(sql, [studentId], (err, results) => {
//         if (err) {
//             console.error('Get results error:', err);
//             return res.status(500).json({ message: 'Failed to fetch results', error: err.message });
//         }
        
//         res.json({
//             success: true,
//             results: results
//         });
//     });
// });

// // ==================== STATIC FILE ROUTES ====================

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'login_page.html'));
// });

// app.get('/html/:page', (req, res) => {
//     const page = req.params.page;
//     res.sendFile(path.join(__dirname, 'public', 'html', page));
// });

// app.get('/css/:file', (req, res) => {
//     const file = req.params.file;
//     res.sendFile(path.join(__dirname, 'public', 'css', file));
// });

// app.get('/images/:file', (req, res) => {
//     const file = req.params.file;
//     res.sendFile(path.join(__dirname, 'public', 'images', file));
// });

// // Test route to check server and database
// app.get('/test', (req, res) => {
//     // Test database connection
//     db.query('SELECT 1 + 1 AS result', (err, results) => {
//         if (err) {
//             res.status(500).json({ 
//                 message: 'Server working but database connection failed', 
//                 error: err.message,
//                 timestamp: new Date() 
//             });
//         } else {
//             res.json({ 
//                 message: 'Server and database are working!', 
//                 dbResult: results[0].result,
//                 timestamp: new Date() 
//             });
//         }
//     });
// });

// // Test route to check tables
// app.get('/test-tables', (req, res) => {
//     db.query('SHOW TABLES', (err, results) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         } else {
//             res.json({ tables: results });
//         }
//     });
// });

// // ==================== ERROR HANDLING ====================

// app.use((req, res) => {
//     console.log('❌ 404 - Page not found:', req.url);
//     res.status(404).json({ message: 'Page not found' });
// });

// app.use((err, req, res, next) => {
//     console.error('❌ Unhandled error:', err);
//     res.status(500).json({ message: 'Internal server error' });
// });

// // ==================== START SERVER ====================

// app.listen(PORT, () => {
//     console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
//     console.log(`📚 Teacher Login: http://localhost:${PORT}/html/teacher-login.html`);
//     console.log(`👨‍🎓 Student Login: http://localhost:${PORT}/html/student-login.html`);
//     console.log(`📊 Student Data: http://localhost:${PORT}/html/student-data.html`);
//     console.log(`🧪 Test Server: http://localhost:${PORT}/test`);
//     console.log(`📋 Test Tables: http://localhost:${PORT}/test-tables`);
//     console.log(`\n🔧 Make sure MySQL is running and tables are created!`);
// });

// module.exports = app;




// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // MySQL connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456', 
//     database: 'lab_portal',
//     acquireTimeout: 60000,
//     timeout: 60000
// });

// db.connect((err) => {
//     if (err) {
//         console.error('❌ MySQL connection failed:', err);
//         return;
//     }
//     console.log('✅ MySQL connected successfully!');
// });

// // Subject mapping
// const SUBJECTS = {
//     'CSEAM531P': 'Machine Learning',
//     'CSE532P': 'Cloud Computing', 
//     'CSE534P': 'Internet & Web Programming',
//     'BTES552': 'Drone Technologies'
// };

// // ==================== LOGIN ROUTES ====================

// app.post('/teacher-login', (req, res) => {
//     const { email, password } = req.body;
//     console.log('🔍 Teacher login attempt:', { email });
    
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }
    
//     const sql = 'SELECT * FROM teachers WHERE email = ? AND password = ?';
    
//     db.query(sql, [email, password], (err, results) => {
//         if (err) {
//             console.error('❌ Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err.message });
//         }
        
//         if (results.length > 0) {
//             console.log('✅ Teacher login successful:', results[0].email);
//             res.json({ 
//                 message: 'Teacher login successful', 
//                 teacher: {
//                     id: results[0].id,
//                     name: results[0].name,
//                     email: results[0].email,
//                     department: results[0].department
//                 }
//             });
//         } else {
//             console.log('❌ Invalid teacher credentials for:', email);
//             res.status(401).json({ message: 'Invalid email or password. Please try again.' });
//         }
//     });
// });

// app.post('/student-login', (req, res) => {
//     const { email, password, regNo } = req.body;
//     console.log('🔍 Student login attempt:', { email, regNo });
    
//     let sql, params;
//     if (regNo) {
//         sql = 'SELECT * FROM students WHERE reg_no = ? AND password = ?';
//         params = [regNo, password];
//     } else if (email) {
//         sql = 'SELECT * FROM students WHERE email = ? AND password = ?';
//         params = [email, password];
//     } else {
//         return res.status(400).json({ message: 'Email/Registration number and password are required' });
//     }
    
//     db.query(sql, params, (err, results) => {
//         if (err) {
//             console.error('❌ Database error:', err);
//             return res.status(500).json({ message: 'Database error', error: err.message });
//         }
        
//         if (results.length > 0) {
//             console.log('✅ Student login successful:', results[0].reg_no);
//             res.json({ 
//                 message: 'Student login successful', 
//                 student: {
//                     id: results[0].id,
//                     reg_no: results[0].reg_no,
//                     name: results[0].name,
//                     email: results[0].email,
//                     semester: results[0].semester,
//                     department: results[0].department
//                 }
//             });
//         } else {
//             console.log('❌ Invalid student credentials');
//             res.status(401).json({ message: 'Invalid credentials. Please try again.' });
//         }
//     });
// });

// // ==================== MARKS FUNCTIONALITY - UPDATED ====================

// app.post('/api/save-marks', (req, res) => {
//     const { examType, subjectCode, marksData } = req.body;
    
//     console.log('📝 Save marks request received:', { 
//         examType, 
//         subjectCode,
//         marksDataCount: marksData?.length,
//         marksData: marksData 
//     });
    
//     // Input validation
//     if (!examType || (examType !== 'mid' && examType !== 'end')) {
//         return res.status(400).json({ 
//             message: 'Invalid exam type. Must be "mid" or "end"', 
//             success: false 
//         });
//     }
    
//     if (!subjectCode || !SUBJECTS[subjectCode]) {
//         return res.status(400).json({
//             message: 'Invalid or missing subject code',
//             success: false,
//             availableSubjects: Object.keys(SUBJECTS)
//         });
//     }
    
//     if (!marksData || !Array.isArray(marksData) || marksData.length === 0) {
//         return res.status(400).json({ 
//             message: 'No valid marks data provided', 
//             success: false 
//         });
//     }
    
//     // Validate each marks entry
//     const validatedMarks = [];
//     const validationErrors = [];
    
//     for (let i = 0; i < marksData.length; i++) {
//         const mark = marksData[i];
//         const { registerNumber, studentName, writeup, execution, viva } = mark;
        
//         // Check required fields
//         if (!registerNumber) {
//             validationErrors.push(`Entry ${i + 1}: Missing register number`);
//             continue;
//         }
        
//         if (!studentName) {
//             validationErrors.push(`Entry ${i + 1}: Missing student name`);
//             continue;
//         }
        
//         // Validate individual marks
//         const writeupNum = parseInt(writeup) || 0;
//         const executionNum = parseInt(execution) || 0;
//         const vivaNum = parseInt(viva) || 0;
        
//         if (writeupNum < 0 || writeupNum > 25 || executionNum < 0 || executionNum > 25 || vivaNum < 0 || vivaNum > 25) {
//             validationErrors.push(`Entry ${i + 1}: Invalid marks for ${studentName}. Each component should be 0-25`);
//             continue;
//         }
        
//         // Only process if at least one mark component is entered
//         if (writeupNum > 0 || executionNum > 0 || vivaNum > 0) {
//             const finalMark = writeupNum + executionNum + vivaNum;
            
//             validatedMarks.push({
//                 registerNumber: registerNumber.toString().trim(),
//                 studentName: studentName.trim(),
//                 writeup: writeupNum,
//                 execution: executionNum,
//                 viva: vivaNum,
//                 finalMark: finalMark,
//                 subjectCode: subjectCode,
//                 subjectName: SUBJECTS[subjectCode]
//             });
//         }
//     }
    
//     if (validationErrors.length > 0) {
//         return res.status(400).json({
//             message: `Validation failed: ${validationErrors.join(', ')}`,
//             errors: validationErrors,
//             success: false
//         });
//     }
    
//     if (validatedMarks.length === 0) {
//         return res.status(400).json({
//             message: 'No valid marks to save after validation',
//             success: false
//         });
//     }
    
//     // Process marks with the new column structure
//     const processMarks = async () => {
//         const results = [];
//         const errors = [];
        
//         for (const mark of validatedMarks) {
//             try {
//                 const { registerNumber, studentName, writeup, execution, viva, finalMark, subjectCode, subjectName } = mark;
                
//                 // Check if results record exists for this student and subject
//                 const existingResult = await new Promise((resolve, reject) => {
//                     db.query(
//                         'SELECT * FROM results WHERE student_id = ? AND subject_code = ?',
//                         [registerNumber, subjectCode],
//                         (err, rows) => {
//                             if (err) reject(err);
//                             else resolve(rows);
//                         }
//                     );
//                 });
                
//                 let query, params;
                
//                 if (existingResult.length > 0) {
//                     // Update existing record
//                     if (examType === 'mid') {
//                         query = `UPDATE results SET 
//                                 midsem_w = ?, 
//                                 midsem_e = ?, 
//                                 midsem_v = ?, 
//                                 midsem_final = ?, 
//                                 updated_at = CURRENT_TIMESTAMP 
//                                 WHERE student_id = ? AND subject_code = ?`;
//                         params = [writeup, execution, viva, finalMark, registerNumber, subjectCode];
//                     } else {
//                         query = `UPDATE results SET 
//                                 endsem_w = ?, 
//                                 endsem_e = ?, 
//                                 endsem_v = ?, 
//                                 endsem_final = ?, 
//                                 updated_at = CURRENT_TIMESTAMP 
//                                 WHERE student_id = ? AND subject_code = ?`;
//                         params = [writeup, execution, viva, finalMark, registerNumber, subjectCode];
//                     }
//                 } else {
//                     // Insert new record
//                     if (examType === 'mid') {
//                         query = `INSERT INTO results 
//                                 (student_id, subject_code, subject_name, midsem_w, midsem_e, midsem_v, midsem_final, created_at) 
//                                 VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;
//                         params = [registerNumber, subjectCode, subjectName, writeup, execution, viva, finalMark];
//                     } else {
//                         query = `INSERT INTO results 
//                                 (student_id, subject_code, subject_name, endsem_w, endsem_e, endsem_v, endsem_final, created_at) 
//                                 VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;
//                         params = [registerNumber, subjectCode, subjectName, writeup, execution, viva, finalMark];
//                     }
//                 }
                
//                 // Execute the query
//                 await new Promise((resolve, reject) => {
//                     db.query(query, params, (err, result) => {
//                         if (err) reject(err);
//                         else resolve(result);
//                     });
//                 });
                
//                 results.push({
//                     registerNumber,
//                     studentName,
//                     writeup,
//                     execution,
//                     viva,
//                     finalMark,
//                     subjectName,
//                     status: 'success'
//                 });
                
//                 console.log(`✅ Successfully processed marks for ${studentName} (${registerNumber}): W:${writeup}, E:${execution}, V:${viva}, Total:${finalMark}`);
                
//             } catch (error) {
//                 console.error(`❌ Error processing marks for ${mark.studentName}:`, error);
//                 errors.push({
//                     registerNumber: mark.registerNumber,
//                     studentName: mark.studentName,
//                     error: error.message
//                 });
//             }
//         }
        
//         return { results, errors };
//     };
    
//     // Process all marks
//     processMarks()
//         .then(({ results, errors }) => {
//             const successCount = results.length;
//             const total = validatedMarks.length;
            
//             if (errors.length === 0) {
//                 console.log(`✅ Successfully saved ${examType} marks for ${successCount} students in ${SUBJECTS[subjectCode]}`);
//                 res.json({
//                     message: `Successfully saved ${examType === 'mid' ? 'Mid Semester' : 'End Semester'} marks for ${successCount} students in ${SUBJECTS[subjectCode]}`,
//                     success: true,
//                     successCount: successCount,
//                     totalCount: total,
//                     subject: SUBJECTS[subjectCode],
//                     results: results
//                 });
//             } else {
//                 console.log(`⚠️ Partial success: ${successCount}/${total} marks saved`);
//                 res.status(500).json({
//                     message: `Partial success: ${successCount}/${total} marks saved for ${SUBJECTS[subjectCode]}. Some errors occurred.`,
//                     success: false,
//                     successCount: successCount,
//                     totalCount: total,
//                     subject: SUBJECTS[subjectCode],
//                     results: results,
//                     errors: errors
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('❌ Fatal error in processMarks:', error);
//             res.status(500).json({
//                 message: 'Fatal error occurred while saving marks',
//                 success: false,
//                 error: error.message
//             });
//         });
// });

// // Get student results
// app.get('/api/results/:studentId', (req, res) => {
//     const { studentId } = req.params;
    
//     const sql = 'SELECT * FROM results WHERE student_id = ? ORDER BY subject_name';
//     db.query(sql, [studentId], (err, results) => {
//         if (err) {
//             console.error('Get results error:', err);
//             return res.status(500).json({ message: 'Failed to fetch results', error: err.message });
//         }
        
//         res.json({
//             success: true,
//             results: results
//         });
//     });
// });

// // Get available subjects
// app.get('/api/subjects', (req, res) => {
//     res.json({
//         success: true,
//         subjects: Object.keys(SUBJECTS).map(code => ({
//             code: code,
//             name: SUBJECTS[code]
//         }))
//     });
// });

// // ==================== STATIC FILE ROUTES ====================

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'html', 'login_page.html'));
// });

// app.get('/html/:page', (req, res) => {
//     const page = req.params.page;
//     res.sendFile(path.join(__dirname, 'public', 'html', page));
// });

// app.get('/css/:file', (req, res) => {
//     const file = req.params.file;
//     res.sendFile(path.join(__dirname, 'public', 'css', file));
// });

// app.get('/images/:file', (req, res) => {
//     const file = req.params.file;
//     res.sendFile(path.join(__dirname, 'public', 'images', file));
// });

// // Test routes
// app.get('/test', (req, res) => {
//     db.query('SELECT 1 + 1 AS result', (err, results) => {
//         if (err) {
//             res.status(500).json({ 
//                 message: 'Server working but database connection failed', 
//                 error: err.message,
//                 timestamp: new Date() 
//             });
//         } else {
//             res.json({ 
//                 message: 'Server and database are working!', 
//                 dbResult: results[0].result,
//                 subjects: SUBJECTS,
//                 timestamp: new Date() 
//             });
//         }
//     });
// });

// app.use((req, res) => {
//     console.log('❌ 404 - Page not found:', req.url);
//     res.status(404).json({ message: 'Page not found' });
// });

// app.use((err, req, res, next) => {
//     console.error('❌ Unhandled error:', err);
//     res.status(500).json({ message: 'Internal server error' });
// });

// app.listen(PORT, () => {
//     console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
//     console.log(`📚 Teacher Login: http://localhost:${PORT}/html/teacher-login.html`);
//     console.log(`👨‍🎓 Student Login: http://localhost:${PORT}/html/student-login.html`);
//     console.log(`📊 Student Data: http://localhost:${PORT}/html/student-data.html`);
//     console.log(`🧪 Test Server: http://localhost:${PORT}/test`);
//     console.log(`\n🔧 Available Subjects:`, Object.values(SUBJECTS).join(', '));
// });

// module.exports = app;


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'lab_portal',
    acquireTimeout: 60000,
    timeout: 60000
});

db.connect((err) => {
    if (err) {
        console.error('❌ MySQL connection failed:', err);
        return;
    }
    console.log('✅ MySQL connected successfully!');
});

// Subject mapping
const SUBJECTS = {
    'Machine Learning': 'CSEAM531P',
    'Cloud Computing': 'CSE532P',
    'Internet & Web Programming': 'CSE534P',
    'Drone Technologies': 'BTES552'
};

// Helper function to get subject code from subject name
function getSubjectCode(subjectName) {
    return SUBJECTS[subjectName] || null;
}

// ==================== LOGIN ROUTES ====================
app.post('/teacher-login', (req, res) => {
    const { email, password } = req.body;
    console.log('🔍 Teacher login attempt:', { email });
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const sql = 'SELECT * FROM teachers WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('❌ Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err.message });
        }

        if (results.length > 0) {
            const teacher = results[0];
            console.log('✅ Teacher login successful:', teacher.email);
            res.json({
                message: 'Teacher login successful',
                teacher: {
                    teacher_id: teacher.teacher_id,
                    name: teacher.name,
                    email: teacher.email,
                    subject: teacher.subject,
                    department: teacher.dept
                }
            });
        } else {
            console.log('❌ Invalid teacher credentials for:', email);
            res.status(401).json({ message: 'Invalid email or password. Please try again.' });
        }
    });
});

app.post('/student-login', (req, res) => {
    const { email, password, regNo } = req.body;
    console.log('🔍 Student login attempt:', { email, regNo });
    
    let sql, params;
    if (regNo) {
        sql = 'SELECT * FROM students WHERE reg_no = ? AND password = ?';
        params = [regNo, password];
    } else if (email) {
        sql = 'SELECT * FROM students WHERE email = ? AND password = ?';
        params = [email, password];
    } else {
        return res.status(400).json({ message: 'Email/Registration number and password are required' });
    }

    db.query(sql, params, (err, results) => {
        if (err) {
            console.error('❌ Database error:', err);
            return res.status(500).json({ message: 'Database error', error: err.message });
        }

        if (results.length > 0) {
            const student = results[0];
            console.log('✅ Student login successful:', student.reg_no);
            res.json({
                message: 'Student login successful',
                student: {
                    reg_no: student.reg_no,
                    name: student.name,
                    email: student.email,
                    dept: student.dept,
                    class: student.class
                }
            });
        } else {
            console.log('❌ Invalid student credentials');
            res.status(401).json({ message: 'Invalid credentials. Please try again.' });
        }
    });
});

// ==================== MARKS FUNCTIONALITY ====================
app.post('/api/save-marks', (req, res) => {
    const { examType, marksData, teacherSubject } = req.body;
    console.log('📝 Save marks request received:', {
        examType,
        teacherSubject,
        marksDataCount: marksData?.length
    });

    // Input validation
    if (!examType || (examType !== 'mid' && examType !== 'end')) {
        return res.status(400).json({
            message: 'Invalid exam type. Must be "mid" or "end"',
            success: false
        });
    }

    if (!teacherSubject) {
        return res.status(400).json({
            message: 'Teacher subject is required',
            success: false
        });
    }

    // Get subject code from teacher's subject name
    const subjectCode = getSubjectCode(teacherSubject);
    if (!subjectCode) {
        return res.status(400).json({
            message: 'Invalid teacher subject - not found in system',
            success: false,
            teacherSubject: teacherSubject
        });
    }

    if (!marksData || !Array.isArray(marksData) || marksData.length === 0) {
        return res.status(400).json({
            message: 'No valid marks data provided',
            success: false
        });
    }

    // Validate each marks entry
    const validatedMarks = [];
    const validationErrors = [];

    for (let i = 0; i < marksData.length; i++) {
        const mark = marksData[i];
        const { registerNumber, studentName, writeup, execution, viva } = mark;

        // Check required fields
        if (!registerNumber) {
            validationErrors.push(`Entry ${i + 1}: Missing register number`);
            continue;
        }

        if (!studentName) {
            validationErrors.push(`Entry ${i + 1}: Missing student name`);
            continue;
        }

        // Validate individual marks
        const writeupNum = parseInt(writeup) || 0;
        const executionNum = parseInt(execution) || 0;
        const vivaNum = parseInt(viva) || 0;

        if (writeupNum < 0 || writeupNum > 25 || executionNum < 0 || executionNum > 25 || vivaNum < 0 || vivaNum > 25) {
            validationErrors.push(`Entry ${i + 1}: Invalid marks for ${studentName}. Each component should be 0-25`);
            continue;
        }

        // Only process if at least one mark component is entered
        if (writeupNum > 0 || executionNum > 0 || vivaNum > 0) {
            const finalMark = writeupNum + executionNum + vivaNum;
            validatedMarks.push({
                registerNumber: registerNumber.toString().trim(),
                studentName: studentName.trim(),
                writeup: writeupNum,
                execution: executionNum,
                viva: vivaNum,
                finalMark: finalMark,
                subjectCode: subjectCode,
                subjectName: teacherSubject
            });
        }
    }

    if (validationErrors.length > 0) {
        return res.status(400).json({
            message: `Validation failed: ${validationErrors.join(', ')}`,
            errors: validationErrors,
            success: false
        });
    }

    if (validatedMarks.length === 0) {
        return res.status(400).json({
            message: 'No valid marks to save after validation',
            success: false
        });
    }

    // Process marks with the new column structure
    const processMarks = async () => {
        const results = [];
        const errors = [];

        for (const mark of validatedMarks) {
            try {
                const { registerNumber, studentName, writeup, execution, viva, finalMark, subjectCode, subjectName } = mark;

                // Check if results record exists for this student and subject
                const existingResult = await new Promise((resolve, reject) => {
                    db.query(
                        'SELECT * FROM results WHERE student_id = ? AND subject_code = ?',
                        [registerNumber, subjectCode],
                        (err, rows) => {
                            if (err) reject(err);
                            else resolve(rows);
                        }
                    );
                });

                let query, params;
                if (existingResult.length > 0) {
                    // Update existing record
                    if (examType === 'mid') {
                        query = `UPDATE results SET
                                midsem_w = ?,
                                midsem_e = ?,
                                midsem_v = ?,
                                midsem_final = ?,
                                updated_at = CURRENT_TIMESTAMP
                                WHERE student_id = ? AND subject_code = ?`;
                        params = [writeup, execution, viva, finalMark, registerNumber, subjectCode];
                    } else {
                        query = `UPDATE results SET
                                endsem_w = ?,
                                endsem_e = ?,
                                endsem_v = ?,
                                endsem_final = ?,
                                updated_at = CURRENT_TIMESTAMP
                                WHERE student_id = ? AND subject_code = ?`;
                        params = [writeup, execution, viva, finalMark, registerNumber, subjectCode];
                    }
                } else {
                    // Insert new record
                    if (examType === 'mid') {
                        query = `INSERT INTO results
                                (student_id, subject_code, subject_name, midsem_w, midsem_e, midsem_v, midsem_final, created_at)
                                VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;
                        params = [registerNumber, subjectCode, subjectName, writeup, execution, viva, finalMark];
                    } else {
                        query = `INSERT INTO results
                                (student_id, subject_code, subject_name, endsem_w, endsem_e, endsem_v, endsem_final, created_at)
                                VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`;
                        params = [registerNumber, subjectCode, subjectName, writeup, execution, viva, finalMark];
                    }
                }

                // Execute the query
                await new Promise((resolve, reject) => {
                    db.query(query, params, (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    });
                });

                results.push({
                    registerNumber,
                    studentName,
                    writeup,
                    execution,
                    viva,
                    finalMark,
                    subjectName,
                    status: 'success'
                });

                console.log(`✅ Successfully processed marks for ${studentName} (${registerNumber}): W:${writeup}, E:${execution}, V:${viva}, Total:${finalMark}`);
            } catch (error) {
                console.error(`❌ Error processing marks for ${mark.studentName}:`, error);
                errors.push({
                    registerNumber: mark.registerNumber,
                    studentName: mark.studentName,
                    error: error.message
                });
            }
        }
        return { results, errors };
    };

    // Process all marks
    processMarks()
        .then(({ results, errors }) => {
            const successCount = results.length;
            const total = validatedMarks.length;

            if (errors.length === 0) {
                console.log(`✅ Successfully saved ${examType} marks for ${successCount} students in ${teacherSubject}`);
                res.json({
                    message: `Successfully saved ${examType === 'mid' ? 'Mid Semester' : 'End Semester'} marks for ${successCount} students in ${teacherSubject}`,
                    success: true,
                    successCount: successCount,
                    totalCount: total,
                    subject: teacherSubject,
                    results: results
                });
            } else {
                console.log(`⚠️ Partial success: ${successCount}/${total} marks saved`);
                res.status(500).json({
                    message: `Partial success: ${successCount}/${total} marks saved for ${teacherSubject}. Some errors occurred.`,
                    success: false,
                    successCount: successCount,
                    totalCount: total,
                    subject: teacherSubject,
                    results: results,
                    errors: errors
                });
            }
        })
        .catch((error) => {
            console.error('❌ Fatal error in processMarks:', error);
            res.status(500).json({
                message: 'Fatal error occurred while saving marks',
                success: false,
                error: error.message
            });
        });
});

// Get student results
// app.get('/api/results/:studentId', (req, res) => {
//     const { studentId } = req.params;
//     const sql = 'SELECT * FROM results WHERE student_id = ? ORDER BY subject_name';
    
//     db.query(sql, [studentId], (err, results) => {
//         if (err) {
//             console.error('Get results error:', err);
//             return res.status(500).json({ message: 'Failed to fetch results', error: err.message });
//         }
//         res.json({
//             success: true,
//             results: results
//         });
//     });
// });


app.get('/api/results/:studentId', (req, res) => {
    const { studentId } = req.params;
    console.log(`🔍 Fetching results for student: ${studentId}`);

    if (!studentId) {
        return res.status(400).json({ 
            success: false, 
            message: 'Student ID is required' 
        });
    }

    // Query to get all results for the student
    const sql = `
        SELECT 
            student_id,
            subject_code,
            subject_name,
            midsem_w,
            midsem_e, 
            midsem_v,
            midsem_final,
            endsem_w,
            endsem_e,
            endsem_v, 
            endsem_final,
            created_at,
            updated_at
        FROM results 
        WHERE student_id = ? 
        ORDER BY subject_name
    `;

    db.query(sql, [studentId], (err, results) => {
        if (err) {
            console.error('❌ Database error while fetching results:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Failed to fetch results', 
                error: err.message 
            });
        }

        console.log(`✅ Found ${results.length} result records for student ${studentId}`);

        // Transform the results to ensure null values are handled
        const transformedResults = results.map(result => ({
            ...result,
            midsem_w: result.midsem_w || 0,
            midsem_e: result.midsem_e || 0,
            midsem_v: result.midsem_v || 0,
            midsem_final: result.midsem_final || 0,
            endsem_w: result.endsem_w || 0,
            endsem_e: result.endsem_e || 0,
            endsem_v: result.endsem_v || 0,
            endsem_final: result.endsem_final || 0
        }));

        res.json({
            success: true,
            message: `Found ${results.length} results`,
            results: transformedResults,
            student_id: studentId
        });
    });
});

// Optional: Get results summary for a student
app.get('/api/results-summary/:studentId', (req, res) => {
    const { studentId } = req.params;
    console.log(`📊 Fetching results summary for student: ${studentId}`);

    const sql = `
        SELECT 
            COUNT(DISTINCT subject_code) as total_subjects,
            COUNT(CASE WHEN midsem_final > 0 OR endsem_final > 0 THEN 1 END) as completed_exams,
            AVG(CASE 
                WHEN midsem_final > 0 AND endsem_final > 0 THEN (midsem_final + endsem_final) / 150 * 100
                WHEN midsem_final > 0 THEN midsem_final / 75 * 100  
                WHEN endsem_final > 0 THEN endsem_final / 75 * 100
                ELSE 0 
            END) as average_percentage
        FROM results 
        WHERE student_id = ?
    `;

    db.query(sql, [studentId], (err, results) => {
        if (err) {
            console.error('❌ Database error while fetching summary:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Failed to fetch summary' 
            });
        }

        const summary = results[0] || {
            total_subjects: 0,
            completed_exams: 0, 
            average_percentage: 0
        };

        res.json({
            success: true,
            summary: {
                total_subjects: summary.total_subjects || 0,
                completed_exams: summary.completed_exams || 0,
                average_percentage: Math.round(summary.average_percentage || 0)
            }
        });
    });
});



// ==================== STATIC FILE ROUTES ====================
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login_page.html'));
});

app.get('/html/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'public', 'html', page));
});

app.get('/css/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(path.join(__dirname, 'public', 'css', file));
});

app.get('/images/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(path.join(__dirname, 'public', 'images', file));
});

// Test routes
app.get('/test', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Server working but database connection failed',
                error: err.message,
                timestamp: new Date()
            });
        } else {
            res.json({
                message: 'Server and database are working!',
                dbResult: results[0].result,
                subjects: SUBJECTS,
                timestamp: new Date()
            });
        }
    });
});

// Error handling middleware
app.use((req, res) => {
    console.log('❌ 404 - Page not found:', req.url);
    res.status(404).json({ message: 'Page not found' });
});

app.use((err, req, res, next) => {
    console.error('❌ Unhandled error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Teacher Login: http://localhost:${PORT}/html/teacher-login.html`);
    console.log(`👨🏻‍🎓 Student Login: http://localhost:${PORT}/html/student-login.html`);
    console.log(`📊 Student Data: http://localhost:${PORT}/html/student-data.html`);
    console.log(`🧪 Test Server: http://localhost:${PORT}/test`);
    console.log(`\n✅ Server ready to handle login requests!`);
});

module.exports = app;




