let totalSeconds = 10;
let divTimer = document.querySelector(".timer");

function secondLess(){
	
	totalSeconds--;
	divTimer.innerText = totalSeconds;

	if(totalSeconds === 0){
		clearInterval(timer);
	}

};

let timer = setInterval(secondLess, 1000);