setInterval(()=>{
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();

}, 1000);



let x=+prompt("enter a number");
let y=+prompt("enter a number");
let z=+prompt("enter a number");

//using callbacks
/*
const addition=(num1,num2,num3)=>{
    const ans=num1+num2+num3;
    document.getElementById(1).innerHTML=ans;
}

const calc=(a,b,c,func)=>{
    setTimeout(() => {
        if(a<0||b<0||c<0)
        alert("only positive numbers allowed");
        else
        func(a,b,c);
    }, 3000);

}

calc(x,y,z,addition);
*/



//promises using .then
/*
const calc=(a,b,c)=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            if(a<0||b<0||c<0)
            reject("only positive number allowed");
            else
            resolve(a+b+c);
        }, 3000);

    })
}


calc(x,y,z).then((addition)=>{
    document.getElementById(1).innerHTML=addition;
    return addition;
}).then((addresult)=>{
    let p=+prompt("enter a number");
    let q=+prompt("enter a number");
    calc(addresult,p,q).then((result)=>{
        document.getElementById(2).innerHTML=result;
    });
    
}).catch((e)=>{
    alert(e);
})
*/
