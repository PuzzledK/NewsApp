const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');
const app = express();

mongoose.connect(MONGO_URL, {})
.then(() => {console.log("Database Connected Succesfully")})
.catch((err) => {console.log(err)});

app.listen(80, () => {
  console.log(`Server running at 127.0.0.1:80`);
});

app.use(cors({
origin: [`https://localhost:80`],
methods: ["GET","POST","PUT","DELETE"],
credentials: true
})
);
app.use(cookieParser());

app.use(express.json());

app.use("/",authRoute);