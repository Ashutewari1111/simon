let gameSeq=[];
let userSeq=[];
let btn=["red","yellow","green","purple"]
let started=false;
let level=0;
let highscore=1;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        Levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },500);
};
function Levelup(){
userSeq=[];   
level++;
if(level>=highscore){
    highscore=level;
}
h2.innerText=`Level ${level}`;
let ranIdx=Math.floor(Math.random()*3);
let ranCol=btn[ranIdx];
let ranBtn=document.querySelector(`.${ranCol}`);
gameSeq.push(ranCol);
console.log(gameSeq);
gameFlash(ranBtn);
}
function CheckBtn(idx){
    if(userSeq[idx]===gameSeq[idx]){
        console.log("Same value");
        if(userSeq.length == gameSeq.length){
           setTimeout(Levelup,1000);
        }
     }
      else{ 
       h2.innerHTML=`Game Over! Your score is <b>${level}</b><br> Please Enter a key`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },200);
       h3.innerText=`Highscore is a ${highscore}`
       reset();
    }
}
function BtnPress(){
    let b mntn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq)
    CheckBtn(userSeq.length-1);
 }
let allBtn=document.querySelectorAll(".box");
for(box of allBtn){
    box.addEventListener("click",BtnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}