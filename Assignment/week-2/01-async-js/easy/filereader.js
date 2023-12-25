var fs = require('fs');

fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
})
for (let index = 0; index < 10000000000; index++) {
    index+=1;
}