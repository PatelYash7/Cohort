require('dotenv').config({});

module.exports={
    JWT_SECRET:"yash_server",
    MONGO_URI:process.env.MONGO_URI
}