let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2= document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout( function () {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout( function () {
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);
}

function checkSeq(index){
    
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score was <b> ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}


function buttonPressed(){
   
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", buttonPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}