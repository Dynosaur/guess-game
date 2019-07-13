const RandomNumberGenerator = require('./RandomNumberGenerator');
const readlineSync = require('readline-sync');

const min = 1;
const max = Math.round(Math.random() * 99 + 1);
const rng = new RandomNumberGenerator(min, max);
const number = rng.generate();
console.log('I\'ve got a number between ' + min + ' and ' + max + '...');

while(true) {
    var userAnswer = readlineSync.question('Can you guess what it is? ');
    if(userAnswer == number) {
        console.log('You got it!');
        break;
    } else {
        if(userAnswer === 'give up') {
            console.log('you suck: ' + number);
            break;
        }
        if(userAnswer < number) {
            console.log('Too small!');
        } else {
            console.log('Too big!');
        }
    }
}