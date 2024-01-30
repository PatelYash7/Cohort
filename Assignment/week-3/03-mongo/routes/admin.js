const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username= req.body.username;
    const password = req.body.password;

    const value = await Admin.create({
        username:username,
        password:password
    })

    if(value){
        res.json({
            mes:'Admin Created Successfully'
        })
    }else{
        res.status(403).json({
            mes:'Admin Creation Failed'
        })
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title =req.body.title;
    const description = req.body.description;
    const imageLink= req.body.imageLink;
    const price = req.body.price;
    //Zod verification 

    // upload the courses

   const newCourse = await  Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        mes:"Course Created Successfully  "+ newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        Course:response
    })
});

module.exports = router;