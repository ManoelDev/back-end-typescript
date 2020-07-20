import express from 'express';
import routes from './routes/index';
import './database';

const Port = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(Port, () => {
  console.log(`🔊 Server Started on port ${Port}`);
});
