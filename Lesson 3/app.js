
const add = 7 + 3;
const sub = 7 - 3;
const mult = 7 * 3;
const div = 7 / 3;
const paren = (83 + 92 + 86 + 94) / 4;
console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(paren);

// let score = 0;
// let lives = 3;


// let points = 1023;
// let lives = 3;
// let totalTime = 45;
// console.log("Points: " + points);
// console.log("Lives: " + lives);
// console.log("Total Time: " + totalTime + " secs");
// console.log("---------------------------");
// let totalScore = 0;
// console.log("Your Total Score is: " + totalScore);



function setup(){
  let firstDie = int(1,6);
  let secondDie = int (1,6);
  let total = firstDie + secondDie
  console.log('You have rolled a:' + firstDie);
  console.log('and a:' + secondDie);
  console.log('For a total of:' + total);
}
