const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const { connect } = require('mongoose');
const e = require('express');

require('dotenv').config({});
// const MONGO_URI = process.env.MONGO_URI;
// console.log(MONGO_URI)

connect("mongodb+srv://YashPatel:AeBoESyIRTTZECRK@testing.xc0jpsk.mongodb.net/jwtauthhell")
.then((e)=>console.log("Success"))
.catch(err => console.log(err));

// Middleware for parsing request bodies

// app.use(bodyParser.json());
// app.use("/admin", adminRouter)
// app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// module.exports={
//     MONGO_URI
// }