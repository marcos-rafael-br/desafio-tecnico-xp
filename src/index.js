import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const server = app.listen(process.env.PORT || 5000, () => console.log(
  `Server is running on PORT: ${process.env.PORT}`,
));

export default server;
