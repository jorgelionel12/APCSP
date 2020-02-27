// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title
let slider


// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
let winningNum = 5


function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)

  bananaImg = createImg('https://mycodingclass.co/wp-content/uploads/2020/02/banana-300x150.png', 'banana image');

  bananaImg.size(200,100);

  heading = createElement('h2', 'Click the Banana');
  heading.position(width / 3, height / 4);

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  slider = createSlider(1, 12, 1);
  slider.position(78, 20);
  slider.style('width', '80px');
  

}

function draw() {
  // Adjust frameRate according to slider
  let val = slider.value();
  frameRate(val);



  // Randomly Position Banana
  bananaImg.position(random(width), random(height))
  bananaImg.mousePressed();




}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }

}

function increaseScore() {
 
}

function decreaseLives() {
  lives = lives - 1
  livesDisplay.html('LIVES: ' + lives)
}

function checkWin() {


}

function checkLose() {
  if(lives , 0){
    gotoLose
  }
}

console.log(score)