let startValue = document.getElementById('inputScore').value;
let score1 = document.getElementsByTagName('h3')[0];
let score2 = document.getElementsByTagName('h3')[1];
let btnPlayer1 = document.getElementsByClassName('btnPlayer1')[0];
let btnPlayer2 = document.getElementsByClassName('btnPlayer2')[0];
let count1 = 0;
let count2 = 0;

function player1() {
	count1++
	if (count1 == startValue ) {
		document.getElementsByClassName('col-md-3')[0].classList.add('win'); 
		removeAtt();
		score1.textContent = count1;
	}
	else {
		score1.textContent = count1;
	}
}

function player2() {
	count2++
	if (count2 == startValue ) {
		document.getElementsByClassName('col-md-3')[1].classList.add('win'); 
		removeAtt();
		score2.textContent = count2;
	}
	else {
		score2.textContent = count2;
	}
}

function reset() {
	count1 = 0;
	count2 = 0;
	score1.textContent = count1;
	score2.textContent = count2;
	removeClass();
	setAtt();
}

function newValue() {
	startValue = document.getElementById('inputScore').value;
	reset();
}

function removeClass() {
	let classes = document.getElementsByClassName('win');
	for (let classe of classes) {
		classe.classList.remove('win');
	}
}

function setAtt() {
	btnPlayer2.setAttribute('onclick','player2()');
	btnPlayer1.setAttribute('onclick','player1()');
}

function removeAtt() {
	btnPlayer2.removeAttribute('onclick');
	btnPlayer1.removeAttribute('onclick');
}

document.getElementsByTagName('form')[0].addEventListener('input', function () {
	if (document.getElementById('inputScore').value != startValue) {
		startValue = document.getElementById('inputScore').value;
		setAtt();
		removeClass();
	}
});
