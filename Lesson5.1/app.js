// function setup(){
//     createCanvas(300, 300)
//     createP("my lucky number is")

// }

// function draw(){
//      background('black');
// }


// function setup() { 
//     createCanvas(400, 400);
//     background(220)
//     createElement('h1', 'my lucky numbers below');
//     createElement('p', 'my lucky number is 11');
//   } 
//   function draw() { 
//     background(220);
//   }


// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     let titleText = createElement('h1', 'My lucky number is...');
//     let numText = createElement('p', '14');
//     console.log(numText) // Find out what is inside of this newly created numText objects
//   }

// EVENT LISTENERS

// function setup(){
//     createCanvas(400,400);

// }

// function mousePressed(){\
//     createP("My lucky number is" + random(0,10))

// }

// function draw(){
//     background(220);
// }

//CREATE TEXT

let button 
let greeting 

function setup() {
    createCanvas(windowWidth, windowHeight)
    button = createButton('Try Me');
    button.position(width / 2, height / 2)
    button.mousePressed(greet)
   
    greeting = createElement('h2', 'Say Hello!')
    greeting.position(width / 2, height / 3)
    
    textAlign(CENTER)
    textSize(50)
  }
  function greet() {
    greeting.html('HELLO!')
    for (let i = 0; i < 200; i++) {
      push();
      fill(random(255), 255, 255);
      translate(random(width), random(height))
      rotate(random(2 * PI));
      text('HELLO', 0, 0);
      pop();
    }

