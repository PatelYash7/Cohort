const mongoose = require('mongoose');
const {Schema,model,connect}=mongoose;
require('dotenv').config();
const url= process.env.MONGO_URI;
console.log(url)

// Connect to MongoDB
const connectDB = async () =>{
    try {
        await connect(url);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        // Exit process with failure
        process.exit(1);
    }
}
connectDB();
// Define schemas
const AdminSchema = Schema({

    // Schema definition here
    username:String,
    password:String
});

const UserSchema = Schema({
    // Schema definition here
    username:String,
    password:String
});

const CourseSchema = Schema({
    // Schema definition here
});

const Admin = model('Admin', AdminSchema);
const User = model('User', UserSchema);
const Course = model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}