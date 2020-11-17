function computerPlay(){
    return Math.floor((Math.random() * 3) + 1);
}

const btn_rock = document.getElementById("rock");
const btn_paper = document.getElementById("paper");
const btn_scissors = document.getElementById("scissors");

const p_win = document.getElementById("win-state")
const p_player = document.getElementById("player-score")
const p_computer = document.getElementById("computer-score")
const p_draw = document.getElementById("draw-score")

let player_score = 0;
let computer_score = 0;
let draw_score = 0;

function lose(){
    computer_score++;
    p_computer.innerHTML = computer_score;
}

function win(){
    player_score++;
    p_player.innerHTML = player_score;
}

function draw(){
    draw_score++;
    p_draw.innerHTML = draw_score;
}


btn_rock.addEventListener("click", function(){
    let tool = computerPlay();
    if(tool === 1) { p_win.innerHTML = "Computer got rock, it's a tie!"; draw();}
    else if(tool === 2) { p_win.innerHTML = "Computer got paper, you lose"; lose();}
    else if(tool === 3){ p_win.innerHTML = "Computer got scissors, you win!"; win();}
    
});

btn_paper.addEventListener("click", function(){
    let tool = computerPlay();
    if(tool === 2) { p_win.innerHTML = "Computer got paper, it's a tie!"; draw();}
    else if(tool === 3) { p_win.innerHTML = "Computer got scissors, you lose"; lose();}
    else if(tool === 1) { p_win.innerHTML = "Computer got rock, you win!"; win();}
});

btn_scissors.addEventListener("click", function(){
    let tool = computerPlay();
    if(tool === 3) { p_win.innerHTML = "Computer got scissors, it's a tie!"; draw();}
    else if(tool === 1) { p_win.innerHTML = "Computer got rock, you lose"; lose();}
    else if(tool === 2) { p_win.innerHTML = "Computer got paper, you win!"; win();}
});