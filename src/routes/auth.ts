import { Router } from 'express';

export const router: Router = Router();

router.get('/', (req, res) => {
  res.send('Hello Auth');
});

router.post('/', (req, res) => {
  res.status(201).send();
});

router.patch('/', (req, res) => {
  res.status(204).send();
});

router.delete('/', (req, res) => {
  res.status(200).send('Deleted');
});
