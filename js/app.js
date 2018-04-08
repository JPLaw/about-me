'use strict';

var userName = prompt('Hi there! What is your name?');

// // //this will help keep the user's score on the questions
// var pointsCounter = 0;

// // Question 1: Do I own a dog?

// var ownDog = prompt('Okay ' + userName + ': do I own a dog?').toLowerCase();

// function dogQuestion(){

//   if(ownDog === 'no') {
//     pointsCounter +=1;
//     alert('That is correct!');
//   } else if(ownDog === 'yes') {

//     alert('That is not correct');
//   } else {
//     alert('Please answer with yes or no');
//   }

//   console.log(userName + ' answered ' + ownDog + '. The right answer was no.');
// }

// dogQuestion();

// //Question 2: How many siblings do you think I have?

// var siblingGuess = prompt('Let\'s try this one: how many siblings do I have?');
// siblingGuess = parseInt(siblingGuess);

// function numSiblings (){
//   if (siblingGuess === 4) {
//     pointsCounter += 1;
//     alert('Way to go ' + userName + '! That is correct!');
//   } else {
//     alert('Bummer! You chose wrong ' + userName);
//   }
//   console.log(userName + ' answered ' + siblingGuess + '. The right answer was 4.');
// }

// numSiblings();

// //Question 3: Am I a fraternal twin?

// var twinTrivia = prompt('Let\'s really test you. Am I a fraternal twin?').toLowerCase();
// function twinType(){
//   if(twinTrivia === 'no') {
//     pointsCounter += 1;
//     alert('That\'s right ' + userName + '! I am actually an IDENTICAL twin.');
//   } else if(twinTrivia === 'yes') {

//     alert('Oh come on ' + userName + '! I\'m an IDENTICAL twin, remember?');
//   } else {
//     alert('Please answer with yes or no');
//   }
//   console.log(userName + ' answered ' + twinTrivia + '. The right answer was no.');
// }

// twinType();

// // Question 4: Have I traveled to every continent?

// var travelGuess = prompt('Have I traveled to every continent?').toLowerCase();

// function continentsTraveled(){
//   if(travelGuess === 'no') {
//     pointsCounter += 1;
//     alert('You\'re right, I haven\'t. But it\'s on my bucket list!');
//   } else if(travelGuess === 'yes') {

//     alert('Nope! I wish.');
//   } else {
//     alert('Please answer with yes or no');
//   }
//   console.log(userName + ' answered ' + travelGuess + '. The right answer was no.');
// }
// continentsTraveled();


// //Question 5: How many continents do you think I have been to?

// function numContinents(){
//   var numberContinents = prompt('I haven\'t been to every continent, but how many  do you think I have been to?');
//   numberContinents = parseInt(numberContinents);

//   if (numberContinents === 6) {
//     pointsCounter += 1;
//     alert('Way to go ' + userName + '! That is correct!');
//   } else {

//     alert('Bummer! That\'s not right. Better luck next time.');
//   }
//   console.log(userName + ' answered ' + numberContinents + '. The right answer was 6.');
// }

// numContinents();


// // Question 5: Have I ever been skydiving?

// var skydiveGuess = prompt('So what do you think: have I ever been skydiving?').toLowerCase();

// function skyDive (){

//   if(skydiveGuess === 'yes') {
//     pointsCounter += 1;
//     alert('Nope! Sorry' + userName + ', that is incorrect. I have never been skydiving but I really want to go');
//   } else if(skydiveGuess === 'no') {
//     alert('That\'s right ' + userName + ', I have never been skydiving, but I really want to!');
//   } else {
//     alert('Please answer with yes or no');
//   }
//   console.log(userName + ' answered ' + skydiveGuess + '. The right answer was yes.');
//   console.log(pointsCounter);
// }

// skyDive();


// //Question 6: Number guessing question: How many sports did I play in high school? 

// function sportsNumberPlayed(){
//   var sportsNumber = prompt('So, I used to play some sports back in the day. How many do you think I played? You will have four guesses.');
//   sportsNumber = parseInt(sportsNumber);
//   if (sportsNumber === 3) {
//     pointsCounter += 1;
//     alert('Good job ' + userName + '! That is correct!');
//   } else {
//     alert('Nice try ' + userName+ '. That is not correct!');
//   }
//   console.log(userName + ' answered ' + sportsNumber + '. The right answer was 3.');
//   console.log('User Guessed this many sports:', sportsNumber); //making sure we're logging user guess
// }

// sportsNumberPlayed();


//(Array) Question 7: Can you guess which sports I played?

// function whichSportsPlayed(){
//   var guessAttempts = 6;
//   var 
//   while(guessAttempts > 0) {

//     var whichSports = prompt('Can you guess one of the sports I played?').toLowerCase();
//     console.log('User guess for a sport played:', whichSports);
//     guessAttempts--;
//     console.log('How many guess attempts are left:', guessAttempts);
//     var sportsPlayed = ['water polo', 'soccer', 'swimming'];
//     console.log('Array of possible correct answers for sports played:',sportsPlayed);
//     var userAnswerRight = false;
//     for(var i = 0; i < sportsPlayed.length; i++) {
//       if(whichSports === sportsPlayed[i]) {
//         userAnswerRight = true;
//       }
//     }
//     if(userAnswerRight === true);
//     pointsCounter += 1;
//     alert('Correct! The possible answers were: water polo, soccer and swimming (although I know you don\'t technically play swimming.');
//     userAnswerRight = true;
//     break;
//   } if(guessAttempts > 0) {
//     alert('That\'s not one. Try again.');
//   } if(guessAttempts === 0){
//     alert('Well darn. The possible answers were water polo, soccer and swimming. Being from California, I spent a lot of my time outside. And in water apparently.');
//   }
// }

var sportsPlayed = ['water polo', 'soccer', 'swimming'];
var numTries = 6 
var sportGuess;
var correctGuess = false

console.log('Guessing sport...');
alert('Okay ' + userName + '. Now you know I played sports back in the day. Let\'s see if you can guess which ones I played.' );
do {
  sportGuess = prompt('Name a sport I\'ve played.');
  numTries--;
  console.log('Sport guessed was' + sportGuessed + 'guesses remaining', numTries);
  for (var i = 0; i <sportsPlayed.length; i++){
    if(sportGuess === sportsPlayed[i]){
      alert('Way to go ' + userName + '!' + sportPlayed[i] + 'is one of the correct answers! The correct answers were water polo, soccer and swimming.');
      correctGuess = true;
      pointsCounter++;
      break;
    }
  }
  if(correctGuess === false){
    var incorrectMessage = 'No I didn\'t play' + sportGuess + '.';
    if(numTries >=1){
      incorrectMessage += 'Nope, try again. You have ' + numTries + ' guesses left.';
    } 
    alert(incorrectMessage);
  } else {
    break;
  }  
} while (numTries > 0);
console.log('Guessing game completed, the correct guess was', correctGuess);
// // ************************
// // Edited code turned into a function for the array question above
// // ************************

// function whichSportsPlayed(){
//   var guessAttempts = 6;

//   while(guessAttempts > 0) {

//     var whichSports = prompt('Can you guess one of the sports I played?').toLowerCase();
//     console.log('User guess for a sport played:', whichSports);
//     guessAttempts--;
//     console.log('How many guess attempts are left:', guessAttempts);
//     var sportsPlayed = ['water polo', 'soccer', 'swimming'];
//     console.log('Array of possible correct answers for sports played:',sportsPlayed);
//     var userAnswerRight = false;
//     for(var i = 0; i < sportsPlayed.length; i++) {
//       if(whichSports === sportsPlayed[i]) {
//         userAnswerRight = true;
//         alert('Correct! The possible answers were: water polo, soccer and swimming (although I know you don\'t technically play swimming).');
//           break;
//         } else {guessAttempts --;
//         alert('That\'s not one. Try again.');}
//       }
//   }
// }


// //     }
// //     if(userAnswerRight === true);
// //     // pointsCounter += 1;
// //     break;
// //   } if(guessAttempts > 0) {
// //     alert('That\'s not one. Try again.');
// //   } if(guessAttempts === 0){
// //     alert('Well darn. The possible answers were water polo, soccer and swimming. Being from California, I spent a lot of my time outside. And in water apparently.');
// //   }
// // }

// whichSportsPlayed();

// // *********************
// // End of Array question
// // *********************


// //Guess my lucky number question
// var myNumber = 10;
// var guessCount = 4;
// var userGuess = prompt('Can you guess my lucky number? Let\'s see!');
// while (true && guessCount !== 0) {
//   userGuess = parseInt();
//   if(userGuess > myNumber){
//     alert('That number is too high. Guess again.');
//     guessCount--;
//   } else if (userGuess < myNumber) {
//     alert('That number is too low. Guess again.');
//     guessCount--;
//   } else if(userGuess === myNumber){
//     alert('That\'s it! Great guess!');
//   }
// }