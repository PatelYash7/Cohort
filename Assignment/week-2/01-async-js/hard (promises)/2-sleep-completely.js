/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const prom = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Resolved after given milliseconds");
        }, milliseconds);
    })
    return prom
}

async function hell(){
    const start = new Date().getTime();
    const data= await sleep(5000);
    console.log(data)
    const end = new Date().getTime();
    console.log((end-start)/1000);
}
hell();
module.exports = sleep;
