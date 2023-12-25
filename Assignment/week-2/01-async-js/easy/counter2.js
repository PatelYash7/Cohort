
let a=0;

function upcount(count,duration){
    setTimeout(count,duration);
}

function count(){
    console.log(a);
    a++;
    upcount(count,2000);
}

count();