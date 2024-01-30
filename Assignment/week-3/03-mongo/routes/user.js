const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const val = User.create({
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
    const username = req.headers.username;
    const val= await User.updateOne(
        {
            username: username
        }, {
        "$push": {
            purchasedCourse: courseId
        }
    }
    )
    if(val){
        res.json({
            mes:"Purchased Successfully"
        })
    }else{
        res.status(403).json({
            mes:"Invalid Credentials"
        })
    }
    
});

router.get('/purchasedCourses', userMiddleware,async  (req, res) => {
    const username = req.headers.username;
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