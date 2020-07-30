import dotenv from 'dotenv';
import 'reflect-metadata';
import './database';
import app from './app';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3334;

app.listen(PORT, () => {
  console.log('\x1b[32m', `>> Server Started on port ${PORT}`, '\x1b[0m');
});
