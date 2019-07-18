var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1score = document.querySelector("#p1s");
var p2score = document.querySelector("#p2s");
var resetButton = document.querySelector("#Reset");
var p = document.querySelector("p span");
var numInput = document.querySelector("input");
var winningScore =5;
var p1points = 0;
var p2points = 0;
var gameOver = false;

p1button.addEventListener("click", function(){
	if(!gameOver){
		p1points++;
		if (p1points == winningScore){
			gameOver = true;
			p1score.classList.add("winner");
		}
		p1score.textContent = p1points;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2points++;
		if (p2points == winningScore){
			gameOver = true;
			p2score.classList.add("winner");
		}
		p2score.textContent = p2points;
	}
});

function reset(){
	p1points=0;
	p2points=0;
	p1score.textContent = 0;
	p2score.textContent = 0;
	gameOver = false;
	p1score.classList.remove("winner");
	p2score.classList.remove("winner");
}
resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	p.textContent = numInput.value;
	winningScore = numInput.value;
	reset();
})