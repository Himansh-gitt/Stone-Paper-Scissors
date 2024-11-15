let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");


const getcomptchoice=()=>{
    const options=["rock", "paper" , "scissors"];
    const radix=Math.floor(Math.random()*3);
    return options[radix];
};

const drawgame=()=>{
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="rgb(123, 3, 125)";
}

const showWinner=(userwin,userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;

        console.log("YOU WIN!");
        msg.innerText= `YOU WIN!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        console.log("YOU LOSE!");
        msg.innerText=`YOU LOSE!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    
 });
});

const playgame=(userchoice)=>{
    console.log("userChoice", userchoice);
    const compchoice=getcomptchoice();
    console.log("comp choice", compchoice);

    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ?false:true;
        }
    else if(userchoice==="paper"){
            userwin=compchoice==="scissors" ?false:true;
        }
    
    else{
            userwin=compchoice==="rock" ?false:true;
    }
    showWinner(userwin, userchoice,compchoice);
}
};