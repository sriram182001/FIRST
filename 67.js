const prompt=require('prompt-sync')();


//6th
/*
 function x(num)
{
    return y=()=>
    {
        console.log(num+10);
    }
    
}
let z=+prompt("enter a number:");
x(z)();
*/




//7th
let x=(a)=>
{
    let b=+prompt("enter value2:");
    let y=()=>
    {
        let c=a+b;
        return c;
    }
    c=y(b);
    d=c+10;
    console.log("your value is 10 less than this value:"+d);
    return "actual value is:"+c;
}
let val=+prompt("enter value1:");
console.log(x(val));

