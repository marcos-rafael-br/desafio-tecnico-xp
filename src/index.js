import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.MYSQL_PORT;

const server = app.listen(PORT || 5000, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
