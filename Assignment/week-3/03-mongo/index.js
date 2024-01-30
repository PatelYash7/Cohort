const express = require('express');
// import { Express,express } from 'express';
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const {connect}= require("mongoose");
require('dotenv').config({});

// Middleware for parsing request bodies
connect(process.env.MONGO_URI)
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
