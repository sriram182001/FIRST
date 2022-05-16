const prompt=require('prompt-sync')();

console.log("Start");

const loginuser=(email,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("It's Running");
            resolve({userEmail:email});
        },3000);
    });
};

const videosWatched=(email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3']);
        },3000);
    });
};

const videoDetails=(video)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(video==="video1")
            resolve("TITLE:VIDEO1");
            else if(video==="video2")
            resolve("TITLE:VIDEO2");
            else if(video==="video3")
            resolve("TITLE:VIDEO3");
            else
            reject(new Error("Sorry!, An error occured:("));
        },2000);
    });
};

async function displayUser()
{
    try {
        const emailId=prompt("Enter emailId: ");
        const PassWord=prompt("Enter Password:");
        const loggedUser=await loginuser(emailId,PassWord);
        const videos=await videosWatched(loggedUser.userEmail);
        const videoNumber=+prompt("Enter the video number(1/2/3): ");
        const detail=await videoDetails(videos[videoNumber-1]);
        console.log(detail);
        console.log("Stop");
    } catch (error) {
        console.log(error);
    }
}

displayUser();