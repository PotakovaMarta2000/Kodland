//переменная для холста
let canvas = document.querySelector(".picture");
//переменную для графического объекта
let dot = canvas.getContext("2d");
//..выбрать цвет объекта..
dot.fillStyle = "red";
//и его вид. У нас это будет маленький квадратик 10х10 пикселей, расположенный в 100 пикселях от верхнего края и в 100 - от левого:
dot.fillRect(100, 100, 10, 10);


//Сначала создадим переменные для canvas и для графики:
/* let canvas = document.querySelector(".picture"); */
let rects = canvas.getContext("2d");

//1. Первый прямоугольник будет зеленым.
rects.fillStyle = "#98d1a4";
rects.fillRect(50, 50, 70, 120);

//2. Второй прямоугольник закрасим розовым.
rects.fillStyle = "#fdbbba";
rects.fillRect(140, 50, 70, 120);

//3. Переходим ко второму ряду. Следующий прямоугольник будет желтым.
rects.fillStyle = "#f7e884";
rects.fillRect(95, 100, 70, 120);

//4. Рядом нарисуем фиолетовый прямоугольник.
rects.fillStyle = "#aba3e1";
rects.fillRect(185, 100, 70, 120);

//5. Последний прямоугольник будет находиться в первом ряду. Он будет незакрашенный. Для этого мы используем команду не fillRect, а strokeRect.
rects.strokeStyle = "#76e6fb";
rects.strokeRect(230, 50, 70, 120);

