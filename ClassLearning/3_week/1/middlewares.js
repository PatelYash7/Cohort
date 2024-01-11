const express = require("express");
const app = express();
const zod=require('zod');
// const schema =zod.array(zod.number());
const port=3000;

const schema=zod.object({
    email:zod.string(),
    password:zod.string(),
    country: zod.literal("IN").or(zod.literal("US")) //county:"IN","US"
})

app.use(express.json());

const logger=function(req,res,next){
    console.log("Logger")
    next();
}

// app.use(logger);
app.get('/',(req,res)=>{
    res.send("Hello world")
    console.log(req.method);
})

app.post('/hello',(req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(401).json({msg:"Invalid Input"})
    }else{
        res.send({
            response
        })
    }
})

app.listen(port,()=>{
    console.log("App is listening on port number" +port)
})


