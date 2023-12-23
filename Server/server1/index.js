const express= require('express');
const app=express();

app.use(express.json());
const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function (req,res) {
   
    const johnsKidney=users[0].kidneys;
    // console.log(johnsKidney);
    res.send(johnsKidney);
})


app.post("/",function(req,res){
    
    const isHealthy =req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    }) 
})

app.put("/",function(req,res){
    for( let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.listen(3000);

