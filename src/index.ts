import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import models, { connectDb } from './models';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const dbUrl = process.env.DATABASE_URL || 'sampeurl';

connectDb(dbUrl).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
