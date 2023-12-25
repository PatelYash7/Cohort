// Promise    

// The promise Object represents the eventual completion or failure of an async operation and its resulting value.


//Creating a Promise 

const PromiseOne =new Promise(function(resolve,reject){
    //Async Task 

    setTimeout(function(){
        console.log("Async Task COmpleted")
        resolve() // this resolve method connects the promise and ".then"    it is connected with then
    },3000)
})


//Here promise is consumed
PromiseOne.then(function(){
    console.log("Promise is consumed")
})

//We can directly create a promise without using variable 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task 2")
        resolve()
    },2000)
}).then(function(){
        console.log("Promise Resolved ")
})

const PromiseThree =new Promise(function(resolve,reject){
    //Async Task 

    setTimeout(function(){
        console.log("Async Task COmpleted")
        const User={
            name:"yash",
            _id:12
        }
        resolve(User) //When we pass data, to resolve it can be used as parameter in the function of .Thne
    },3000)
})

PromiseThree.then(function(user){
    console.log(user)
})

const PromiseFour =new Promise(function(resolve,reject){
    //Async Task 

    setTimeout(function(){
        console.log("Async Task COmpleted")
        const error=false
        const User={
            name:"yash113",
            _id:22
        }
        if(!error){
            resolve(User)
        }else{
            reject("Error 404 Not Found")
        }
    },3000)
})

PromiseFour.then(function(user){
    return user.name
}).then(function(name){ // multiple .then is used to access the returned data.
    console.log(name)
}).catch(function(err){ // run if promise is rejected
    console.log(err)
}).finally(function(){  // THise is default case, it will run if promise is resolved or rejected
    console.log("Promise is either resolved or rejected")  
})


const PromiseFive =new Promise(function(resolve,reject){
    //Async Task 

    setTimeout(function(){
        const error=false
        const User={
            name:"Javascript",
            _id:22
        }
        if(!error){
            resolve(User)
        }else{
            reject("Javascript error from asynce await")
        }
    },1000)
})
async function ConsumedPromise (){
        try{
            const response= await PromiseFive
            console.log(response)
        }catch(err){
            console.log(err)
        }

}
ConsumedPromise()