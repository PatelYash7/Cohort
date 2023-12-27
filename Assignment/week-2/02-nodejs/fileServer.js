/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port =3000;

function fileContent(filename) {
  return new Promise((resolve, reject)=>{
    fs.readFile(filename,"utf-8",(err,data)=>{
      if(!err){
        resolve(data)
      }else {
        reject(err)
      }
    })
  })
}

function fileList(filename){
  return new Promise((resolve,reject)=>{
    fs.readdir(filename,(err,data)=>{
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  })
}

app.get('/files',(req,res)=>{
  const filename = path.join(__dirname,'/files');
  fileList(filename).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.status(500).json({error:"Failed to Retrieve files List"});
  })
})

app.get('/files/:filename',(req,res)=>{
  const filename = path.join(__dirname,'/files',req.params.filename);
  fileContent(filename).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.status(404).send("Data Not Found" + err);
  })
  
})




app.listen(port,()=>{
  console.log("Listening on port 3000")
})

module.exports = app;