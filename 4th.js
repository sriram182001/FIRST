const prompt=require('prompt-sync')();


let map=new Map();
let x=+prompt('enter the size:');
let i=0;
while(i<x)
{
    let x=prompt('enter the key');
    let y=prompt('enter the value');
    map.set(x,y);
    i+=1;
}
console.log(map.keys());
