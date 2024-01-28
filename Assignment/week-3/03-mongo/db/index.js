const mongoose = require('mongoose');
const {Schema,model}=mongoose;

// Connect to MongoDB
mongoose.connect('mongodb+srv://YashPatel:AeBoESyIRTTZECRK@testing.xc0jpsk.mongodb.net/Assignment');

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