import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import './database';

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on env ${process.env.ENV_RUN}!`);
})