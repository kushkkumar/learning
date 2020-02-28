// function Pre(pre){
// this.pre=pre;
// }
// Pre.prototype.preArray=function(arr){
//     let that=this
//     return arr.map(function(x){
//         console.log(that.pre+x)
//     });
// }
// let pre=new Pre("Hello");
// pre.preArray(['ankush','kush'])

// function Pre(pre){
//     this.pre=pre;
//     }
//     Pre.prototype.preArray=function(arr){
//         return arr.map((x)=>{
//             console.log(this.pre+x)
//         });
//     }
//     let pre=new Pre("Hello ");
//     pre.preArray(['ankush','kush'])


// let add=function(a,b){
//     let sum=a+b;
//     console.log(sum);
//     return true
// }


let add=(a,b)=>{
    let sum=a+b;
    console.log(sum);
    return true
}
add(6,3)