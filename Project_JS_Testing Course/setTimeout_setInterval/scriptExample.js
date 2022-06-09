function run() {
    alert('setTimeout is working');
}

/* setTimeout(run, 2000); */


/* сохраним таймер в переменную */
let timer = setInterval(run, 2000);

/* ... чтобы вот так его остановить */
/* clearInterval(timer); */

timer();