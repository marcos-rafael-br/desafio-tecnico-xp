import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.MYSQL_PORT 

const server = app.listen(PORT , () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;