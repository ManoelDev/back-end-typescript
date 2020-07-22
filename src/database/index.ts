import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('\x1b[32m', `🔊 Connected to database successful`, '\x1b[0m'))
  .catch(() => console.log('\x1b[31m', `🔊 Failed to connect database`, '\x1b[0m'));
