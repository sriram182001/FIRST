const prompt=require('prompt-sync')();


x=+prompt('enter the size:');
arr=[];
for(let i=0;i<x;i++)
{
    arr[i]=+prompt("enter: ");
}
let k=0;
ans=[]
for(let i=0;i<x-1;i++)
{
    for(let j=i+1;j<x;j++)
    {
      if(arr[i]==arr[j])
      {
          ans[k]=arr[i];
          k+=1;
      }
    }
}
console.log(ans);