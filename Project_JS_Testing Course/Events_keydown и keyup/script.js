let rez = document.querySelector('.rez');
window.onkeydown = function () {
    rez.innerHTML += ' keydown';
};
window.onkeyup = function () {
    rez.innerHTML += ' keyup';
};
