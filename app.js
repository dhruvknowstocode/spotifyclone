console.log("Welcome to spotify");
let songindex=0;
let audioElement=new Audio("1.mp3");
let masterplay=document.getElementById("masterplay");
let progressbar=document.getElementById("progressbar");
let gif=document.getElementById("gif");
let songs=[
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salaam-Ishq",filePath:"songs/1.mp3", coverPath:"covers/1.jpeg"},
]
masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressbar.value=progress;
})

progressbar.addEventListener("change",()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})