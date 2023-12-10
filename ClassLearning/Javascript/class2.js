//Call Back and async javascript

//Javascript program run sequencially, line by line

//When our code depends on other data, or api and value from the other system, then it requires Async function

function hello(){
    console.log("Hello world")
}

setTimeout(hello,1000);
console.log("first")  // this will be called first and after this hello function is called by setTimeout() async function.



//Promises  

// Better way to write the asycronous call, 

