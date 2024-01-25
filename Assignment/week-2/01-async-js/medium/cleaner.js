let fs = require('fs');

let data1="hh"
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data)
    if(!err){
        const cleaneddata = data.split(' ').join('');
        
        fs.writeFile('file.txt',cleaneddata,'utf-8',(err)=>{
            if(err) console.log(err)
            console.log('Success')
        }) 
    }else{
        console.log("error in reading the data")

    }
})



