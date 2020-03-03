function setup(){
  function setup(){
  createCanvas(windowWidth, windowHeight)
  heading = createElement('h2' 'You Won the game');
  heading.position(width / 3, height / 4);
  button = createButton('Go Back to Game);
  button.position(width / 2, height / 2);
  button.mousePressed(goToLink)
}

function goToLink(){
  window.location.href = "game.html";
}
  
  

