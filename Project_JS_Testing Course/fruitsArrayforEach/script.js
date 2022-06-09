let fruits = ['Манго', 'Банан', 'Гранат'];

fruits.push("Апельсин");

let rez = document.querySelector('.rez');

fruits.forEach(
	
	function(fruit) 
{
    rez.innerHTML += fruit + '<br>';
}
);
