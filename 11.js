const prompt=require('prompt-sync')();

let s=0;
function sum(a)
{
    if(a==1){
        return a;
    }
    return a+sum(a-1);
}
let x=+prompt("enter a number:");
let z=sum(x);
console.log(z);
