const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",        // Ganti jika database ada di server lain
    user: "root",             // Username MySQL
    password: "",             // Password MySQL (default kosong)
    database: "animal_db",    // Nama database
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL database.");
});

module.exports = db;
