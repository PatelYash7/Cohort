const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}= require("../db");
const jwt =require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const val = await User.create({
        username,
        password
    })
    if (val) {
        res.json({
            mes: "User Created Successfully"
        })
    } else {
        res.status(403).json({
            mes: "Invalid Credentials"
        })
    }
});

router.post('/signin', async (req, res) => {
    const username= req.body.username;
    const password = req.body.password;

    const isValidated = await User.find({
        username,password
    })
    if(isValidated){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token 
        })
    }else{
        res.status(401).json({
            mes:"Wrong Input"
        })
    }
});
router.get('/courses', async (req, res) => {
    const response = await Course.find({
        // isPublished:true
    });
    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    
    const courseId = req.params.courseId;
    const username = req.username;
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
    
});

router.get('/purchasedCourses', userMiddleware, async  (req, res) => {
    const username = req.username;
    const user = await User.findOne({
        username:username
    })
    
    const course = await Course.find({

        _id:{
            "$in":user.purchasedCourse
        }
    })
    res.json({
        courses:course
    })
});

module.exports = router