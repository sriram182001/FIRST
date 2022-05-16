const prompt=require('prompt-sync')();

let s=0;
function sum(a)
{
    if(a==0){
        return 0;
    }
    s=a+sum(a-1);
    return s;
}
let x=+prompt("enter a number:");
let z=sum(x);
console.log(z);
