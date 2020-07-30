import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(morgan(':remote-addr :remote-user :method :url :status :res[content-length] >> :response-time ms'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('X-powered-by', 'Progamo');
  next();
});
app.use(routes);

export default app;
