const prompt=require('prompt-sync')();


var x=+prompt("enter the size:");
arr=[];
for(let i=0;i<x;i++)
{
    let x=+prompt("enter the number:");
    let y=+prompt("enter the room number:")
    let numbers={number:x,room:y};
    arr[i]=numbers;
}
for(let i=0;i<x;i++)
{
    if(arr[i].room<5)
    {
       delete arr[i];
    }
}
for(let i=0;i<x;i++)
{
    if(arr[i]!=undefined)
    {
       console.log(arr[i]);
    }
}