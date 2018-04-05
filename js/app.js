'use strict';

var userName = prompt('Hi there! What is your name?');

//this will help keep the user's score on the questions
//var pointsCounter = 0


//First question: Did I play sports in high school?
var sportGuess = prompt('Hi ' + userName + '! Let\'s try this for the first question: did I play sports in high school?').toLowerCase();

if(sportGuess === 'yes') {
  //pointsCounter += 1;
  alert('That\'s right' + userName);
} else if(sportGuess === 'no') {

  alert('Oh, sorry ' + userName + ', that wasn\'t the answer.');
} else {
  alert('Please answer with yes or no');
}
console.log(userName + ' answered ' + sportGuess + '. The right answer was yes.');


//Number question: How many do you think I played?
var sportsNumber = prompt('So, now you know that I did in fact play sports back in the day. How many do you think I played?');
sportsNumber = parseInt(sportsNumber);

if (sportsNumber === 3) {
  //pointsCounter += 1;
  alert('Good job ' + userName + '! That is correct!');
} else {

  alert('Nice try ' + userName+ '. That is not correct!');
}

console.log(userName + ' answered ' + sportsNumber + '. The right answer was 3.');

//Array Question: Can you guess which sports I played?

var guessAttempts = 6;

while(guessAttempts > 0) {

  var whichSports = prompt('Can you guess which sports I played?').toLowerCase();
  guessAttempts--;
  var sportsPlayed = ['water polo', 'soccer', 'swimming'];
  var userAnswerRight = false;
  for(var i = 0; i < sportsPlayed.length; i++) {
    if(whichSports === sportsPlayed[i]) {
      userAnswerRight = true;
    }
  }
  if(userAnswerRight === true);
  //pointsCounter += 1;
  alert('Correct! The possible answers were: water polo, soccer and swimming (although I know you don\'t technically play swimming.');
  userAnswerRight = true;
  break;
} if(guessAttempts > 0) {
  alert('That\'s not one. Try again.');
} if(guessAttempts === 0){
  alert('Well darn. The possible answers were water polo, soccer and swimming. Being from California, I spent a lot of my time outside. And in water apparently.');
}


//Question: Do I own a dog?
var ownDog = prompt('Okay ' + userName + ': do I own a dog?').toLowerCase();

if(ownDog === 'no') {
  //pointsCounter +=1;
  alert('That is correct!');
} else if(ownDog === 'yes') {

  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}

console.log(userName + ' answered ' + ownDog + '. The right answer was no.');


//Number Question: How many siblings do you think I have?
var siblingGuess = prompt('Let\'s try this one: how many siblings do I have?');
siblingGuess = parseInt(siblingGuess);

if (siblingGuess === 4) {
  //pointsCounter += 1;
  alert('Way to go ' + userName + '! That is correct!');
} else {

  alert('Bummer! You chose wrong ' + userName);
}

console.log(userName + ' answered ' + siblingGuess + '. The right answer was 4.');


//Question: Am I a fraternal twin?
var twinTrivia = prompt('Let\'s really test you. Am I a fraternal twin?').toLowerCase();

if(twinTrivia === 'no') {
  //pointsCounter += 1;
  alert('That\'s right ' + userName + '! I am actually an IDENTICAL twin.');
} else if(twinTrivia === 'yes') {

  alert('Oh come on ' + userName + '! I\'m an IDENTICAL twin, remember?');
} else {
  alert('Please answer with yes or no');
}

console.log(userName + ' answered ' + twinTrivia + '. The right answer was no.');


//Question: Have I travled to every continent?
var travelGuess = prompt('Have I traveled to every continent?').toLowerCase();

if(travelGuess === 'no') {
  //pointsCounter += 1;
  alert('You\'re right, I haven\'t. But it\'s on my bucket list!');
} else if(travelGuess === 'yes') {

  alert('Nope! I wish.');
} else {
  alert('Please answer with yes or no');
}

console.log(userName + ' answered ' + travelGuess + '. The right answer was no.');


//Number Question: How many continents do you think I have been to?
var numberContinents = prompt('I haven\'t been to every continent, but how many  do you think I have been to?');
numberContinents = parseInt(numberContinents);

if (numberContinents === 6) {
  //pointsCounter += 1;
  alert('Way to go ' + userName + '! That is correct!');
} else {

  alert('Bummer! That\'s not right. Better luck next time.');
}

console.log(userName + ' answered ' + numberContinents + '. The right answer was 6.');

//Guess my lucky number question
var myNumber = 10;
var guessCount = 4;
var userGuess = prompt('Can you guess my lucky number? Let\'s see!');
while (true && guessCount !== 0) {
  userGuess = parseInt();
  if(userGuess > myNumber){
    alert('That number is too high. Guess again.');
    guessCount--;
  } else if (userGuess < myNumber) {
    alert('That number is too low. Guess again.');
    guessCount--;
  } else if(userGuess === myNumber){
    alert('That\'s it! Great guess!');
  }
}