// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables--------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

//p for displaying output
var text = document.getElementById("text");

//button
var btnOne = document.getElementById("one");
var btnTwo = document.getElementById("two");
var btnThree = document.getElementById("three");
var btnFour = document.getElementById("four");
var btnFive = document.getElementById("five");

var speakButton = document.getElementById("btnRead");
var btnReset = document.getElementById("btnReset");

//string arrays
var arrayOne = ["Mom ", "Dad ", "The turkey ", "The dog ", "My teacher ", "The elephant ", "The cat "];
var arrayTwo = ["sat on ", "ate ", "danced with ", "saw ", "doesn't like ", "kissed "];
var arrayThree = ["a funny ", "a scary ", "a goofy ", "a slimy ", "a barking ", "a fat "];
var arrayFour =["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var arrayFive = [" on the moon", " on the chair", " in my spaghetti", " in my soup", " on the grass", " in my shoes"];

/* Functions---------------------------- */

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// BUTTON ONE

// storing the index
var index1 = 0;
// a variable to store the string of the array value
var txtOne = "";
function doOne() {
	txtOne = arrayOne[index1];
	index1++;

	while(index1 === 7) {
		index1 = 0;
	}
	text.textContent = txtOne;
	speakNow(txtOne);
	
}

// BUTTON TWO

var index2 = 0;
var txtTwo = "";
function doTwo() {
	txtTwo = arrayTwo[index2];
	index2++;

	while(index2 === 6) {
		index2 = 0;
	}
	text.textContent = txtOne + txtTwo;
	speakNow(txtTwo);

}

// BUTTON THREE

var index3 = 0;
var txtThree = "";
function doThree() {
	txtThree = arrayThree[index3];
	index3++;

	while(index3 === 6) {
		index3 = 0;
	}
	text.textContent = txtOne + txtTwo + txtThree;
	speakNow(txtThree);
}

// BUTTON 4
var index4 = 0;
var txtFour = "";
function doFour() {

	txtFour = arrayFour[index4];
	index4++;
	while(index4 === 7) {
		index4 = 0;
	}
	text.textContent = txtOne + txtTwo + txtThree + txtFour;
	speakNow(txtFour);
}

// BUTTON 5
var index5 = 0;
var txtFive = "";
function doFive() {
	txtFive = arrayFive[index5];
	index5++;

	while(index5 === 6) {
		index5 = 0;
	}
	text.textContent = txtOne + txtTwo + txtThree + txtFour + txtFive;
	speakNow(txtFive);
}

//A function to empty the p textContent and reset the array indeces plus testToSpeak
function reset() {
	text.textContent = "";
	textToSpeak = "";

	txtOne = "";
	index1 = 0;

	txtTwo = "";
	index2 = 0;

	txtThree = "";
	index3 = 0;

	txtFour = "";
	index4 = 0; 

	txtFive = "";
	index5 = 0;
}

/* Event Listeners-------------------------- */

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	//speak the text in the p element
	textToSpeak = text.textContent;

	speakNow(textToSpeak);
}

// functions are executed when each of the buttons is clicked
btnOne.onclick = function() {
	doOne();
}

btnTwo.onclick = function() {
	doTwo();
}

btnThree.onclick = function() {
	doThree();
}

btnFour.onclick = function() {
	doFour();
}

btnFive.onclick = function() {
	doFive();
}

btnReset.onclick = function() {
	reset();
}
