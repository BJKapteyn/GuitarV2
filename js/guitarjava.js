/*to do:
		


*/
//array for string - fret positions
let masterAnswer = [];
//array for note - fret positions
let masterQuestion = [];
//array for notes
let masterNoteAnswer = [];

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
	Clear: document.getElementById("clear"),
	displayFret: document.getElementById("displayFret")
}

 /*store question and answer arrays*/
let questions = {
	1: ['A-6', 'A-5', 'A-4', 'A-3', 'A-2', 'A-1'],
	2: ['A#/Bb-6', 'A#/Bb-5', 'A#/Bb-4', 'A#/Bb-3', 'A#/Bb-2', 'A#/Bb-1'],
	3: ['B-6', 'B-5', 'B-4', 'B-3', 'B-2', 'B-1'],
	4: ['C-6', 'C-5', 'C-4', 'C-3', 'C-2', 'C-1'],
	5: ['C#/Db-6', 'C#/Db-5', 'C#/Db-4', 'C#/Db-3', 'C#/Db-2', 'C#/Db-1'],
	6: ['D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1'],
	7: ['D#/Eb-6', 'D#/Eb-5', 'D#/Eb-4', 'D#/Eb-3', 'D#/Eb-2', 'D#/Eb-1'],
	8: ['E-6', 'E-5', 'E-4', 'E-3', 'E-2', 'E-1'],
	9: ['F-6', 'F-5', 'F-4', 'F-3', 'F-2', 'F-1'],
	10: ['F#/Gb-6', 'F#/Gb-5', 'F#/Gb-4', 'F#/Gb-3', 'F#/Gb-2', 'F#/Gb-1'],
	11: ['G-6', 'G-5', 'G-4', 'G-3', 'G-2', 'G-1'],
	12: ['G#/Ab-6', 'G#/Ab-5', 'G#/Ab-4', 'G#/Ab-3', 'G#/Ab-2', 'G#/Ab-1']
}

let answers = {
	1: ['6-5', '5-12', '4-7', '3-2', '2-10', '1-5'],
	2: ['6-6', '5-1', '4-8', '3-3', '2-11', '1-6'],
	3: ['6-7', '5-2', '4-9', '3-4', '2-12', '1-7'],
	4: ['6-8', '5-3', '4-10', '3-5', '2-1', '1-8'],
	5: ['6-9', '5-4', '4-11', '3-6', '2-2', '1-9'],
	6: ['6-10', '5-5', '4-12', '3-7', '2-3', '1-10'],
	7: ['6-11', '5-6', '4-1', '3-8', '2-4', '1-11'],
	8: ['6-12', '5-7', '4-2', '3-9', '2-5', '1-12'],
	9: ['6-1', '5-8', '4-3', '3-10', '2-6', '1-1'],
	10: ['6-2', '5-9', '4-4', '3-11', '2-7', '1-2'],
	11: ['6-3', '5-10', '4-5', '3-12', '2-8', '1-3'],
	12: ['6-4', '5-11', '4-6', '3-1', '2-9', '1-4']
}

let noteAnswers = {
	1: ['A', 'A', 'A', 'A', 'A', 'A'],
	2: ['A#', 'A#', 'A#', 'A#', 'A#', 'A#'],
	3: ['B', 'B', 'B', 'B', 'B', 'B'],
	4: ['C', 'C', 'C', 'C', 'C', 'C'],
	5: ['C#', 'C#', 'C#', 'C#', 'C#', 'C#'],
	6: ['D', 'D', 'D', 'D', 'D', 'D'],
	7: ['D#', 'D#', 'D#', 'D#', 'D#', 'D#'],
	8: ['E', 'E', 'E', 'E', 'E', 'E'],
	9: ['F', 'F', 'F', 'F', 'F', 'F'],
	10: ['F#', 'F#', 'F#', 'F#', 'F#', 'F#'],
	11: ['G', 'G', 'G', 'G', 'G', 'G'],
	12: ['G#', 'G#', 'G#', 'G#', 'G#', 'G#']
}

/*-------------------functions for creating array of notes----------------------*/ 
// function smashAnswerArr(arr) {
// 	masterAnswer.push(...arr);
// }

function addToArray(arrayToAdd, mainArray) {
	mainArray.push(...arrayToAdd);
}

function removeFromArray(arrayToRemove, mainArray) {
	var number = mainArray.indexOf(arrayToRemove[0]);
	mainArray.splice(number, 6);
}

// function breakQuestionArr(index) {
// 	var number = masterQuestion.indexOf(index[0]);
// 	masterQuestion.splice(number, 6);
// }

/*-------------------switching button color--------------------------------------*/

function turnOff(onId, offId) {
	onId.className = 'black l';
	offId.className = 'white r';
}

function turnOn(onId, offId) {
	onId.className = 'white l';
	offId.className = 'black r';
}

function makeItHappenOn(question, answer, noteAnswer, onId, offId) {
	var number = question[0];
	if(question.length > 0) {
		if (!masterQuestion.includes(number)){
			addToArray(question, masterQuestion);
			addToArray(answer, masterAnswer);
			addToArray(noteAnswer, masterNoteAnswer);
		}
	}
	turnOn(onId, offId);
}

function makeItHappenOff(question, answer, noteAnswer, onId, offId) {
	if(question.length > 0){
		removeFromArray(question, masterQuestion);
		removeFromArray(answer, masterAnswer);
		removeFromArray(noteAnswer, masterNoteAnswer);
	}
	turnOff(onId, offId);
}

/*creates event listener for every switch button*/
for (var i = 1; i <= 12; i++) {
	(function() {
		let on = onButtons[i];
		let off = offButtons[i];
		let question = questions[i];
		let answer = answers[i];
		let noteAnswer = noteAnswers[i];
		on.addEventListener('click', makeItHappenOn.bind(this, question, answer, noteAnswer, on, off));
		off.addEventListener('click', makeItHappenOff.bind(this, question, answer, noteAnswer, on, off));
	})()
}
/*hey what up*/



function makeRandom(array) {
	var x = Math.floor(Math.random() * array.length);
	console.log(x);
	return x;
}

function showAnswer(target, random, answerArray) {
	let answerButton = document.getElementById("theAnswer");
	answerButton.addEventListener('click', function(event) {
		event.preventDefault();
		target.textContent = answerArray[random];
	})
}

function createAnswerButton(target, random, answerArray) {
	let displayFret = document.getElementById("displayAnswerButton");
	displayFret.innerHTML = '<input id=\"theAnswer\" type=\"button\" accesskey=\"a\" value=\"Answer\">';
	showAnswer(target, random, answerArray);

}

//display fret note and answer button
function showFret(questionArray, answerArray) {
	let arrLength = questionArray.length;
	if(arrLength != 0) {
		let randomNote = makeRandom(questionArray);

		userButtons.displayFret.textContent = questionArray[randomNote];
		createAnswerButton(displayFret, randomNote, answerArray);
	}
	else {
		console.log('No notes selected');
	}
}

function clearWindow() {
	userButtons.displayFret.textContent = '';
}

userButtons.Note.addEventListener('click', () => {showFret(masterQuestion, masterAnswer)});
userButtons.Fret.addEventListener('click', () => {showFret(masterAnswer, masterNoteAnswer)});
userButtons.Clear.addEventListener('click', clearWindow);