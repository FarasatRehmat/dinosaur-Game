let container = document.querySelector('#container');
let dino = document.querySelector('#dino');
let block = document.querySelector('#block');
let road = document.querySelector('#road');
let score = document.querySelector('#score');
let gameOver = document.querySelector('#gameOver');

let interval = null;
let playerScore = 0;


let scoreCounter = () => {
	playerScore++;
	score.innerHTML = `score <b>${playerScore}</b>`;
}

window.addEventListener('keydown', (start) => {
	if(start.code == 'Space')
		{
			gameOver.style.display = 'none';
			block.classList.add('blockActive');
			road.firstElementChild.style.animation = 'roadAnimate 1.5s linear infinite';

			let playerScore = 0;
			interval = setInterval(scoreCounter,200);

		}
});

window.addEventListener('keydown', (e)=>{
	
	if(e.key == 'ArrowUp')
		if(dino.classList != 'dinoActive')
			{
				dino.classList.add('dinoActive');

				setTimeout(()=>{
					dino.classList.remove('dinoActive');
				},500)
			}	
})


let result = setInterval(()=>{
	let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue('bottom'));
	
	let blockLeft = parseInt(getComputedStyle(block).getPropertyValue('left'));

	if(dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145){
		
		gameOver.style.display = 'block';
		block.classList.remove('blockActive');
		road.firstElementChild.style.animation = 'none';
		playerScore = 0;
		clearInterval(interval);

	}
}, 10);

// let container = document.getElementById("container");
// let btn = document.getElementById("btn")


// btn.addEventListener('click', () => container.classList.toggle('active'))













