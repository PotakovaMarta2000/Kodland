let text = document.querySelector('.text');
let rez = document.querySelector('.rez');

text.onkeypress = function(event){
    rez.innerHTML += event.key;
}

