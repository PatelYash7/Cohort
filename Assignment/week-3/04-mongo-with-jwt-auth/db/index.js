const mongoose = require('mongoose');
const {Schema,model,connect}=mongoose;

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