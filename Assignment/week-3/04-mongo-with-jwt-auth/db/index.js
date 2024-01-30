const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
const {Schema,model,connect}=mongoose;

connect(MONGO_URI)
.then((e)=>console.log("Success"))
.catch(err => console.log(err));

const AdminSchema = Schema({
    username:String,
    password:String
});

const UserSchema = Schema({
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = Schema({
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