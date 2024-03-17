
import express, { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { Database } from 'sqlite3';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3001

const db = new Database('./dua_main.sqlite');

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

app.get('/api/cat', (req: Request, res: Response) => {
  console.log("received on cat")

  try {
    const sql = 'SELECT * FROM category LIMIT 0,30';
    db.all(sql, [], (err: Error, rows: any[]) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching data');
      }
      res.json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/subcat/:subId', (req: Request, res: Response) => {
  console.log("received on sub")
  const subId: string = req.params.subId;
  try {
    const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
    db.all(query, [subId], (err: Error, rows: any[]) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching data');
      }
      res.json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/dua/:cat', (req: Request, res: Response) => {
  console.log("received on dua")

  const id: string = req.params.cat;
  const type: string = req.query.type as string || 'cat'; // Default to 'cat' if type is not provided
  console.log(type);
  try {
    const query = `SELECT * FROM dua WHERE ${type === "sub" ? "subcat_id" : "cat_id"} = ?`;
    db.all(query, [id], (err: Error, rows: any[]) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching data');
      }
      res.json(rows);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Server is running")
});

// app.all('*', (req: Request, res: Response, next: NextFunction) => {
//   const err = new CustomError(`can't find ${req.originalUrl} on the server`, 404);
//   next(err);
// });



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
