'use strict';

var sportGuess = prompt('Did I play more than one sport in high school?').toLowerCase();

if(sportGuess === 'yes') {
  alert('That is correct!');
} else if(sportGuess === 'no') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}
console.log('User answered ' + sportGuess + '. The right answer was yes.')

var ownDog = prompt('Do I own a dog?').toLowerCase();

if(ownDog === 'no') {
  alert('That is correct!');
} else if(ownDog === 'yes') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}

console.log('User answered ' + ownDog + '. The right answer was no.')

var siblingGuess = prompt('How many siblings do I have?');
siblingGuess = parseInt(siblingGuess);

if (siblingGuess === 4) {
  alert('That is correct!');
} else {
  alert('That is not correct!');
}

console.log('User answered ' + siblingGuess + '. The right answer was 4.')

var twinTrivia = prompt('Do you remember- am I a fraternal twin?').toLowerCase();

if(twinTrivia === 'no') {
  alert('That is correct!');
} else if(twinTrivia === 'yes') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}

console.log('User answered ' + twinTrivia + '. The right answer was no.')

var travelGuess = prompt('Have I traveled to every continent?').toLowerCase();

if(travelGuess === 'no') {
  alert('That is correct!');
} else if(travelGuess === 'yes') {
  alert('That is not correct');
} else {
  alert('Please answer with yes or no');
}

console.log('User answered ' + travelGuess + '. The right answer was no.')