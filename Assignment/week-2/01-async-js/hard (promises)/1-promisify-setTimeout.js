/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const Resolved =new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
    
    return Resolved

}
wait(3).then(()=>{
    console.log("After 3 seconds");
})

module.exports = wait;
