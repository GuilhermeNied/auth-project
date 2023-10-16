import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}🚀`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
