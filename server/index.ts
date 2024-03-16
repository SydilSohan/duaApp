// import express, { Request, Response, NextFunction} from 'express';
// import dotenv, { config } from 'dotenv'; // For secure environment variable handling
// import rateLimit from 'express-rate-limit';
// import CustomError from './src/Utils/CustomError';
// const sqlite3 = require('sqlite3').verbose();
// const errorHandler  = require("./src/controllers/errorHandler")
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 3000;
// declare module 'http' {
//   interface IncomingMessage {
//       rawBody: any;
//   }
// }
// app.use(express.json({
//   limit: "50mb",
//   verify(req, res, buf, encoding) {
//     req.rawBody = buf
//   },
// }))
// // Use type alias for clarity
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// 	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// 	// store: ... , // Use an external store for consistency across multiple server instances.
// })
// // Apply the rate limiting middleware to all requests.
// app.use(limiter)



// // Connect to the SQLite database
// const db = new sqlite3.Database('./dua_main.sqlite');

// // Define your API endpoints

// app.get('/api/cat', async (req : Request, res : Response) => {
//   db.close()
//   try {
//     // Execute a query to retrieve data
//     const sql = 'SELECT * FROM category LIMIT 0,30';
//     db.all(sql, [], (err: any, rows: any) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Error fetching data');
//       }
//       res.json(rows); // Send the results back as JSON
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/api/subcat/:subId', async (req : Request, res : Response) => {
//   const subId = req.params.subId
//   try {
//     // Execute a query to retrieve data
//     const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
//     db.all(query, [subId], (err: any, rows: any) => {
//       db.close()
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Error fetching data');
//       }
//       res.json(rows); // Send the results back as JSON
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// // app.get('/api/dua/:cat', async (req : Request, res : Response) => {
// //   const id = req.params.cat
// //   const type = req.query.type
  
// //   try {
// //     // Execute a query to retrieve data
// //     const query = `SELECT * FROM dua WHERE ${type === "sub"? "cat_id" : "subcat_id" } = ?`;
// //     db.all(query, [id], (err: any, rows: any) => {
// //       if (err) {
// //         console.error(err);
// //         return res.status(500).send('Error fetching data');
// //       }
// //       res.json(rows); // Send the results back as JSON
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
// app.get('/api/dua/:cat', async (req : Request, res : Response) => {
//   const id = req.params.cat
//   const type = req.query.type
//   console.log(type)
//   try {
//     // Execute a query to retrieve data
//     const query = `SELECT * FROM dua WHERE ${type === "sub"? "subcat_id" : "cat_id" } = ?`;
//     db.all(query, [id], (err: any, rows: any) => {
//       db.close()
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Error fetching data');
//       }
//       res.json(rows); // Send the results back as JSON
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });


  
//   //error handle all unauthorised routes
//   app.all('*', (req : Request, res : Response, next : NextFunction) => {
//     const err = new CustomError(`can't find ${req.originalUrl} on the server`, 404) 
//        next(err)
//   })


// //global error handling middleware
//   // app.use(errorHandler)


// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
import express, { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { Database } from 'sqlite3';
import CustomError from './src/Utils/CustomError';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3001;

const db = new Database('./dua_main.sqlite');

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

app.use(express.json({
  limit: "50mb",
}));

app.use(limiter);

// Define API endpoints

app.get('/api/cat', (req: Request, res: Response) => {
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

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new CustomError(`can't find ${req.originalUrl} on the server`, 404);
  next(err);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
