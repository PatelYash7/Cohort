/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const Resolved =new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise Resolved")
        },n)
    })
    
    return Resolved

}
wait(3000).then((data)=>{
    console.log(data);
})

module.exports = wait;
