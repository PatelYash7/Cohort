/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const prom = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Wait1 resolved");
        }, t);
    })
    return prom
}

function wait2(t) {
    const prom = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Wait2 resolved");
        }, t);
    })
    return prom
}

function wait3(t) {
    const prom = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Wait2 resolved");
        }, t);
    })
    return prom
}

function calculateTime(t1, t2, t3) {
    const start = Date.now;
    const prom = Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
        const end = Date.now;
        const total = end -start;
        return total;
    })
    return prom;
}
calculateTime(1000,2000,3000).then((data)=>{
    console.log(data);
})

module.exports = calculateTime;
