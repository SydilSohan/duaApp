"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3 library
function fetcDua(tableName) {
    try {
        const db = new sqlite3.Database('../db/dua_main.sqlite'); // Replace with your database path
        const query = `SELECT * FROM dua`; // Exclude orders table
        return db.all(query, (err, rows) => {
            db.close(); // Close the database connection after the query
            return err ? [null, err] : [rows, null]; // Return data or error based on query result
        });
    }
    catch (error) {
        return [null, new Error('Unexpected error fetching data')]; // Handle unexpected errors
    }
}
exports.default = fetcDua;
