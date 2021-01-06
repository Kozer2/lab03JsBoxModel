'use strict'
console.log('app.js is connected')

//global variable
var userPoints = 0;

alert('Hello, and welcome to the Guessing Game');
var user = prompt('What is your name?');
console.log(user);

//User variable needs to be:
    // string, null, or empty (-string, -null, "")

// If user var is empty, keep asking for name

// while(user === '' || user === null){
//     user
// }

// while(!user){
//     user = prompt('What is your Name?')
//     // if (user === ' '){
//     //     user = false
//     //     console.log("No name entered")
//     // }
// }


// if(user !== 'ben'){
//     console.log(user);
//     alert('You are not the lowercase ben we are looking for.');
// }

alert('Hello, ' + user + ' are you ready to play a game?');

var answer = prompt('Is my favorite food Club Sandwiches? Please answer Yes or No.').toLowerCase();
console.log(answer);

//check user answers and add points if right
if(answer === 'no' || answer === 'n'){
    alert("That was the right answer, you lucky fool!");
    userPoints += 1;
    console.log('This is the point counter ', userPoints);
} else{
    alert('That was the wrong answer, you fool!');
    console.log('This is the point counter ', userPoints);
}

// for (var i = 0; i <10; i++){
//     console.log(i)
//     if(i===2){
//         console.log('Keep going past this number: ', i);
//         continue;
//     }
//     if(i===4){
//         console.log('i is now: ', i);
//     }
    
// }

// var foodsILike = ['beef stew', 'chips', 'popcorn', 'steak']
// console.log(foodsILike)

// for(var x = 0; x < foodsILike.length; x++){
//     console.log('for loop doing work', foodsILike[x]);
// }

// foodsILike.push('swiss chard');
// console.log('array push method adding an element', foodsILike)

// //remove from array
// foodsILike.pop();
// console.log('array pop method removing an elemenet', foodsILike);

// // shifting an array
// var shiftArray = foodsILike.shift();
// console.log('shift array method', shiftArray);
// console.log(foodsILike);

alert('You have ' + userPoints + ' points, good work.')