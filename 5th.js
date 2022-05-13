
arr=[];
let i=0;
let k=1000;
while(i<1000)
{
    arr[i]=k;
    k-=1;
    i+=1;
}
let s=0;
let j=1;
console.log(arr);
s+=arr[0];
while(j<1000)
{
   if(s%arr[j]==0)
   {
    s=s+arr[j];
   }
   else
   {
    j+=1;
   }
   j+=1;
}
console.log(s);