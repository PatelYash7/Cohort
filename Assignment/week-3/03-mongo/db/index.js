const mongoose = require('mongoose');
const {Schema,model,connect}=mongoose;
// require('dotenv').config({path:'03-mongo/' + '.env' })
require('dotenv').config({path:'../.env'})
// const url= process.env.MONGO_URI;
const url="mongodb+srv://YashPatel:AeBoESyIRTTZECRK@testing.xc0jpsk.mongodb.net/course-db225"

// connect(process.env.MONGO_URI)
// Connect to MongoDB
// async function connectDB(){
//     try {
//         await connect(url);
//         console.log("MongoDB Connected")
//     } catch (error) {
//         console.error(error.message);
//         // Exit process with failure
//         process.exit(1);
//     }
// }

const AdminSchema = Schema({

    // Schema definition here
    username:String,
    password:String
});

const UserSchema = Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    ImageLink:String
});

const Admin = model('Admin', AdminSchema);
const User = model('User', UserSchema);
const Course = model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
}