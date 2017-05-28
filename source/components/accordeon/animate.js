export default function (options) {
	//options - объект, включающий в себя 
	// - задержку анимации (duration)
	// - временнУю функцию (timing(timeFraction)), которая по текущему ремени вычисляет состояние анимации, и 
	// - функцию, описывающую и отрисовывающая анимацию (draw)

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction от 0 до 1
		let timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) timeFraction = 1;

		// текущее состояние анимации
		let progress = timeFraction;

		//функция, описывающая анимацию
		options.draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
};