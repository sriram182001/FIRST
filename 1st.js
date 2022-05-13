const prompt=require('prompt-sync')();


var x=+prompt("enter the size:");
arr=[];
for(let i=0;i<x;i++)
{
    let x=+prompt("enter the value:");
    let numbers={number:x};
    arr[i]=numbers;
}

for(let i=0;i<x;i++)
{
    for(let j=0;j<x-1;j++)
        {
            if(arr[j].number>arr[j+1].number)
            {
                let t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
            }
        }
}
console.log(arr);


/*
function a (){
    if(true){
        var a;
        let b
    }
    console.log(b)
}

a();
*/