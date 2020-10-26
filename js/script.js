window.addEventListener('load', function () {
	let btn = document.querySelector('.btn');
	let redBlock = document.querySelector('.red-block');
	let greenBlock = document.querySelector('.green-block');

	btn.addEventListener('click', function () {
		redBlock.classList.add('changeColor');
		greenBlock.style.display = 'none';
	});
});