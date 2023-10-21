import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes/auth';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const dbConnection = process.env.DB_CONNECTION;

app.use(express.json());
app.use(cors());
mongoose.connect(dbConnection!);

app.use('/user', router);

app.listen(port, () => {
  console.log(`Running on port ${port}🚀`);
});
