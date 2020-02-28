"use strict"

var a="test1";
let b="test2";
console.log(a);
console.log(b); 




function testVar(){
let a=30;

    if(true){
        let a=50;
        console.log(a);
    }
    console.log(a);
}
testVar()

for(var i=0;i<10;i++){
    console.log(i)
}
console.log(i)


const colors=[];
colors.push("red");
colors.push("blue");

console.log(colors)