import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import './database';

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}!`);
})