import 'reflect-metadata';
import './database';
import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const Port = 3333;

const app = express();
app.use(cors());

app.use(express.json());
app.use((request, response, next) => {
  response.setHeader('X-Powered-By', '[ progamo ]');
  next();
});

app.use(routes);

app.listen(Port, () => {
  console.log('\x1b[32m', `🔊 Server Started on port ${Port}`, '\x1b[0m');
});
