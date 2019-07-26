/*to do:
		XSwitch the strings from counting up to down    
		-add notes
			-aS
			-b
			-c
			-cS
			-dS
			-f
			-fS
			-gS


*/
let masterAnswer = [];

let masterQuestion = [];

/*store on/off button ids*/
let onButtons = {
	1: document.getElementById('aOn'),
	2: document.getElementById('aSOn'),
	3: document.getElementById('bOn'),
	4: document.getElementById('cOn'),
	5: document.getElementById('cSOn'),
	6: document.getElementById('dOn'),
	7: document.getElementById('dSOn'),
	8: document.getElementById('eOn'),
	9: document.getElementById('fOn'),
	10: document.getElementById('fSOn'),
	11: document.getElementById('gOn'),
	12: document.getElementById('gSOn'),
}

let offButtons = {
	1: document.getElementById('aOff'),
	2: document.getElementById('aSOff'),
	3: document.getElementById('bOff'),
	4: document.getElementById('cOff'),
	5: document.getElementById('cSOff'),
	6: document.getElementById('dOff'),
	7: document.getElementById('dSOff'),
	8: document.getElementById('eOff'),
	9: document.getElementById('fOff'),
	10: document.getElementById('fSOff'),
	11: document.getElementById('gOff'),
	12: document.getElementById('gSOff'),	
}


/*store control button ids*/
let userButtons = {
	Note: document.getElementById("noteAndString"),
	Fret: document.getElementById("fretAndString"),
	Clear: document.getElementById("clear")
}

 /*store question and answer arrays*/
let questions = {
	1: ['A-6', 'A-5', 'A-4', 'A-3', 'A-2', 'A-1'],
	2: ['Bb-6', 'Bb-5', 'Bb-4', 'Bb-3', 'Bb-2', 'Bb-1'],
	3: ['B-6', 'B-5', 'B-4', 'B-3', 'B-2', 'B-1'],
	4: ['C-6', 'C-5', 'C-4', 'C-3', 'C-2', 'C-1'],
	5: [],
	6: ['D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1'],
	7: [],
	8: ['E-6', 'E-5', 'E-4', 'E-3', 'E-2', 'E-1'],
	9: ['F-6', 'F-5', 'F-4', 'F-3', 'F-2', 'F-1'],
	10: [],
	11: ['G-6', 'G-5', 'G-4', 'G-3', 'G-2', 'G-1'],
	12: []
}

let answers = {
	1: ['6-5', '5-12', '4-7', '3-2', '2-10', '1-5'],
	2: ['6-6', '5-1', '4-8', '3-3', '2-11', '1-6'],
	3: ['6-7', '5-2', '4-9', '3-4', '2-12', '1-7'],
	4: ['6-8', '5-3', '4-10', '3-5', '2-1', '1-8'],
	5: [],
	6: ['6-10', '5-5', '4-12', '3-7', '2-3', '1-10'],
	7: [],
	8: ['6-12', '5-7', '4-2', '3-9', '2-5', '1-12'],
	9: ['6-1', '5-8', '4-3', '3-10', '2-6', '1-1'],
	10: [],
	11: ['6-3', '5-10', '4-5', '3-12', '2-8', '1-3'],
	12: []
}

/*-------------------functions for creating array of notes----------------------*/ 
function smashAnswerArr(arr) {
	masterAnswer.push(...arr);
}

function smashQuestionArr(arr) {
	masterQuestion.push(...arr);
}

function breakAnswerArr(index) {
	var number = masterAnswer.indexOf(index[0]);
	masterAnswer.splice(number, 6);
}

function breakQuestionArr(index) {
	var number = masterQuestion.indexOf(index[0]);
	masterQuestion.splice(number, 6);
}

function turnOff(onId, offId) {
	onId.className = 'black l';
	offId.className = 'white r';
}

function turnOn(onId, offId) {
	onId.className = 'white l';
	offId.className = 'black r';
}

function makeItHappenOn(question, answer, onId, offId) {
	var number = question[0];
	if(question.length > 0) {
		if (!masterQuestion.includes(number)){
			smashQuestionArr(question);
			smashAnswerArr(answer);
		}
	}
	turnOn(onId, offId);
}

function makeItHappenOff(question, answer, onId, offId) {
	if(question.length > 0){

		breakQuestionArr(question);
		breakAnswerArr(answer);
	}
	turnOff(onId, offId)
}

/*creates event listener for every switch button*/
for (var i = 1; i <= 12; i++) {
	(function() {
		let on = onButtons[i];
		let off = offButtons[i];
		let question = questions[i];
		let answer = answers[i];
		on.addEventListener('click', makeItHappenOn.bind(this, question, answer, on, off))
		off.addEventListener('click', makeItHappenOff.bind(this, question, answer, on, off))
	})()
}

userButtons.Note.addEventListener('click', showFret);


function makeRandom() {
	var x = Math.floor(Math.random() * masterAnswer.length);
	console.log(x);
	return x;
}

function showAnswer(target, random) {
	let answerButton = document.getElementById("theAnswer");
	answerButton.addEventListener('click', function(event) {
		event.preventDefault();
		target.textContent = masterAnswer[random];
	})
}

function createAnswerButton(target, random) {
	let displayFret = document.getElementById("displayAnswerButton");
	displayFret.innerHTML = '<input id="theAnswer" type=\"button\" accesskey="a" value=\"Answer\">';
	showAnswer(target, random);

}

//display fret note and answer button
function showFret() {
	let randomNote = makeRandom();
	let displayFret = document.getElementById("displayFret");

	displayFret.textContent = masterQuestion[randomNote];
	createAnswerButton(displayFret, randomNote)
}





/*
doesn't work because with every iteration, i changes permenantly and isn't bound to each iteration of loop. 
(function() {
	for (var i = 1; i <= 12; i++) {
		let on = onButtons[i];
		let off = offButtons[i];
		on.addEventListener('click', function() {
			if (questions[i].length > 0) {
				smashQuestionArr(questions[i]);
				smashAnswerArr(answers[i])
			}
			on.className = "white l";
			off.className = "black r";
		})
		off.addEventListener('click', function() {
			if (masterQuestion.includes(questions[i][0])) {
				breakQuestionArr(questions[i][0]);
				breakAnswerArr(answers[i][0]);
			}
			on.className = "black l";
			off.className = "white r";
		})
	}
})()

function addEm(obj, index) {

}

*/

