const board = document.querySelector('#board')
const colors = ['#ff3caa', '#ffea35', '#3d5c23', '#163c9f', '#16cddb']
const SQUARES_NUMBER = 600

for (let i=0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	/*при наведении на квадратик делается что либо*/
	square.addEventListener('mouseover', setColor) /*mouseover при наведении мышью, вызов квадрата на котрую передаем цвет*/
	square.addEventListener('mouseleave', removeColor) /*mouseleave когда убираем мышь */
	board.append(square)
}

function setColor(event) { /*element это наш квадрат */
	const element = event.target
	const color = getRandomColor()	
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` /*более объемный был цвет */
}

function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = '#1d1d1d' /*когда убираем цвет возвращается в изначальный цвет*/
	element.style.boxShadow = `0 0 2px #000` /*убираем границы после того как цвет уходит*/
}

/*анимация появляется когда мы убираем цвет*/
function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

console.log();
nnn
console.log('nnn: ', nnn);