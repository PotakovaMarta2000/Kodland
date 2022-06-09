let img = document.querySelector('img');

img.addEventListener('mouseover', picIncrease);
img.addEventListener('mouseout', picDecrease);

function picIncrease() {
	img.style.width = '700px';
	img.style.height = '400px';
};

function picDecrease() {
	img.style.width = '385px';
	img.style.height = '200px';
};