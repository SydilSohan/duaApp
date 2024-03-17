"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sqlite3_1 = require("sqlite3");
const CustomError_1 = __importDefault(require("./src/Utils/CustomError"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3001;
const db = new sqlite3_1.Database('./dua_main.sqlite');
// Rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// });
// app.use(express.json({
//   limit: "50mb",
// }));
// app.use(limiter);
// Define API endpoints
app.get('/api/cat', (req, res) => {
    try {
        const sql = 'SELECT * FROM category LIMIT 0,30';
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error fetching data');
            }
            res.json(rows);
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/subcat/:subId', (req, res) => {
    const subId = req.params.subId;
    try {
        const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
        db.all(query, [subId], (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error fetching data');
            }
            res.json(rows);
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/api/dua/:cat', (req, res) => {
    const id = req.params.cat;
    const type = req.query.type || 'cat'; // Default to 'cat' if type is not provided
    console.log(type);
    try {
        const query = `SELECT * FROM dua WHERE ${type === "sub" ? "subcat_id" : "cat_id"} = ?`;
        db.all(query, [id], (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error fetching data');
            }
            res.json(rows);
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/', (req, res, next) => {
    res.send("Server is running");
});
app.all('*', (req, res, next) => {
    const err = new CustomError_1.default(`can't find ${req.originalUrl} on the server`, 404);
    next(err);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
