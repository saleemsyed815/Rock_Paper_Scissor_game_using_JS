// declaring variables
var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);  //takes random value
var comChoice = choices[i];
var userPoints = 0;
var comPoints = 0;



function score(){
	var score_div = document.getElementById("score").innerHTML = userPoints + " - " + comPoints;
}
setInterval(score, 50);

function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}

function game(userChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(userChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(comChoice);

	if(userChoice === "paper" && comChoice === "rock" || userChoice === "rock" && comChoice === "scissors" || userChoice === "scissors" && comChoice === "paper"){
		win(userChoice);
	}
	else if(userChoice === comChoice){
		draw(userChoice);
	}
	else{
		lose(userChoice);
	}

	function continuGame(){
		i = Math.floor(Math.random() * 3);
		comChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1200);
}

function win(btn){
	userPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("green");
    setTimeout(() => {
    	btn.classList.add("btn");
        btn.classList.remove("green");
    }, 1200);
}
function draw(btn){
	document.getElementById("who").innerHTML = "It's a Draw.";
	var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("gray");
    setTimeout(() => {
    	btn.classList.add("btn");
        btn.classList.remove("gray");
    }, 1200);
}
function lose(btn){
	comPoints++;
	document.getElementById("who").innerHTML = "You lose...";
	var btn = document.getElementById(btn);
    btn.classList.remove("btn");
    btn.classList.add("red");
    setTimeout(() => {
    	btn.classList.add("btn");
        btn.classList.remove("red");
    }, 1200);
}