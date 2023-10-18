import express from 'express';
import 'dotenv/config';
import { router } from './routes/auth';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}🚀`);
});

app.use(express.json());

app.use('/user', router);
