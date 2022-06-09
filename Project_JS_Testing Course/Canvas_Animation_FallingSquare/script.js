let canvas;
let context;

window.onload = function () {
	// Определение контекста рисования
	canvas = document.getElementById("drawingCanvas");
	context = canvas.getContext("2d");

	// Обновляем холст через 0.02 секунды
	setTimeout(drawFrame, 20);
};

// Устанавливаем начальную позицию квадрата
let squarePositionX = 10;
let squarePositionY = 0;

function drawFrame() {
	// Очистить холст
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Вызываем метод beginPath(), чтобы убедиться,
	// что мы не рисуем часть уже нарисованного содержимого холста
	context.beginPath();

	// Рисуем квадрат размером 10x10 пикселов в текущей позиции
	context.rect(squarePositionX, squarePositionY, 100, 100);
	context.strokeStyle = "#109bfc";
	context.lineWidth = 10;
	context.fillStyle = 'purple';
	context.fill();
	context.stroke();

	// Перемещаем квадрат вниз на 1 пиксел (где он будет 
	// прорисован в следующем кадре)
	squarePositionY += 1;

	// Рисуем следующий кадр через 20 миллисекунд
	setTimeout(drawFrame, 20);
}