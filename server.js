const express = require("express");
const cors=require('cors');
const connectDB = require("./db/connect");
const router_task = require("./routes/routes");
const app = express();
app.use(cors())
app.use(express.json());

require("dotenv").config();

app.use("/ums", router_task);
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const start = async () => {
  try {
    await connectDB(MONGO_URL);
    app.listen(port, () => {
      console.log(`The server is listening to port ${port} .........`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
