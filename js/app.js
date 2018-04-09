// 'use strict';

// var userName = prompt('Hi there! What is your name?');

// // //this will help keep the user's score on the questions
// var pointsCounter = 0;

// // Question 1: Do I have a dog?

// var ownDog = prompt('Okay ' + userName + ': do I own a dog?').toLowerCase();

// function dogQuestion(){

//   if(ownDog === 'no') {
//     pointsCounter +=1;
//     alert('You\'re right, I don\'t. I hope to some day soon!');
//   } else if(ownDog === 'yes') {
//     alert('I love dogs, but I don\'t own one of my own... yet.');
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
//     alert('Bummer! That wasn\'t the right answer ' + userName + '. I actually have 4 siblings.');
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

//     alert('Bummer! That\'s not right. I\'ve actualy been to six continents. Last on my list is Antartica.');
//   }
//   console.log(userName + ' answered ' + numberContinents + '. The right answer was 6.');
// }

// numContinents();


// // Question 6: Have I ever been skydiving?

// var skydiveGuess = prompt('Have I ever been skydiving?').toLowerCase();

// function skyDive (){

//   if(skydiveGuess === 'yes') {
//     pointsCounter += 1;
//     alert('Nope! Sorry ' + userName + ', that is incorrect. I have never been skydiving, but I really want to go.');
//   } else if(skydiveGuess === 'no') {
//     alert('That\'s right ' + userName + ', I have never been skydiving, but I really want to!');
//   } else {
//     alert('Please answer with yes or no');
//   }
//   console.log(userName + ' answered ' + skydiveGuess + '. The right answer was yes.');
//   console.log(pointsCounter);
// }

// skyDive();


// //Question 7: Number guessing question: How many sports did I play in high school?

// var totalGuesses = 4;
// var sportsNumber = 3;
// var userAnswer = 0;

// function guessSports(){
//   while (totalGuesses > 0){
//     userAnswer = parseInt(prompt('Can you guess how many sports I played in high school? You\'ll get for chances to guess correctly.));
//     console.log('The user answered ' + userAnswer + '.');
//     totalGuesses--;
//     if(userAnswer > sportsNumber && totalGuesses > 1){
//       alert('Too high. You have ' + totalGuesses + ' guesses left.');
//     } else if(userAnswer > sportsNumber && totalGuesses === 1){
//       alert('Too high. Last chance!');
//     }
//   }
//   if(userAnswer < sportsNumber && totalGuesses > 1){
//     alert('Too low. You have ' + totalGuesses + ' guesses left.');
//   } else if(userAnswer < sportsNumber && totalGuesses === 1){
//     alert('Too low. You\'ve got one guess left!');
//   }
//   if(userAnswer === sportsNumber && totalGuesses !== 0){
//     alert('Good job! You guessed right!');
//     pointsCounter++;
//   }
//   if(userAnswer !== sportsNumber){
//     alert('Sorry! You are out of guesses. I played 3 sports in high school.');
//   } else {
//     alert('Hey, you got it! Great job ' + userName + '.');
//   }
// }

// guessSports();


// //(Array) Question 8: Can you guess which sports I played?

// var numGuess = 6;
// while(numGuess > 0) {
//   var whichSports = prompt('Can you guess one of the sports I played?').toLowerCase();
//   console.log('User guess for a sport played:', whichSports);
//   numGuess--;
//   console.log('How many guess attempts are left:', numGuess);
//   var sportsPlayed = ['water polo', 'soccer', 'swimming'];
//   var userAnswerRight = false;
//   for(var i = 0; i < sportsPlayed.length; i++) {
//     if(whichSports === sportsPlayed[i]) {
//       userAnswerRight = true;
//     }
//   }
//   if(userAnswerRight === true){
//     alert('Correct! The possible answers were: water polo, soccer and swimming, although I know you don\'t technically play swimming.');
//     pointsCounter++;
//     break;
//   } else if(numGuess > 0) {
//     alert('That\'s not one. Try again.');
//   } else if(numGuess === 0){
//     alert('Well darn. The possible answers were water polo, soccer and swimming. Being from California, I spent a lot of my time outside. And in water apparently.');
//   }
}








