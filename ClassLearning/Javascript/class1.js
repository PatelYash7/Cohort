
//Javascript is a interpreted Language
console.log("Hello world ")

// Basic javascript syntax

// var num=0;

// for (let i = 0; i <1000000000000; i++) {
//     num=num+1;
// }
// console.log(num)

//CallBack function.

// function sum( num1, num2,fnTCall) {    
//     fnTCall(num1+num2);
// }
// function displayResult(data){
//     console.log("Sum of the Result is "+data)
// }

// sum(1,2,displayResult)

// when we have to display the result of sum without callback then we haave two function to call.

//Arrays

// const arr1=[1,2,3,4]
// const arr2=[5,6,7]

// arr2.forEach((i,n,arr)=>{
//     console.log(`${i} + ${n} + ${arr} `)
// })

//Map Filter Find Sort  // will be covered after CallBacks

//Class and constructor in JS

// class Animal{
//     constructor(name,legcount,speaks){
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks;
//     }
//     hello(){
//         console.log(this.speaks + " hellow wtf is going idk man")
//     }
// }

// const dog= new Animal("Dog",4,"bhow bhow");

// console.log(dog.name ,dog.legcount , dog.speaks)
// dog.hello()

//Dates

const date= new Date();
console.log(date);
console.log(date.getUTCMilliseconds());
console.log(date.getUTCMilliseconds());

function f1(){
    console.log("hello1 from f1")
    date.getUTCMilliseconds();
}
function hello(f1){
    date.getUTCMilliseconds();
    f1();
}
hello(f1);