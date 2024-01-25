let fs = require('fs');
const data="Hello Yash this side :)"

fs.writeFile("empty.txt",data,"utf-8",(err)=>{
    if(err) console.log(err)

    console.log("Success")
})