let btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click", calc);

function calc(){

	let userInput = document.querySelector('.data');

	let userData = userInput.value;

	if(userData % 2 === 0)
	{
		userData = userData ** 2;	
	}else{
		userData = userData - 8;
	}
	;

	let userOut = document.querySelector('.rez');
	userOut.innerText = userData;
    
}





