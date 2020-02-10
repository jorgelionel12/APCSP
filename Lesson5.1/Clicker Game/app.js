let bananaImg 
let heading 

function setup(){
    createCanvas(windowWidth, windowHeight);
    bananaImg = createImg('https://mycodingclass.co/wp-content/uploads/2020/02/banana-300x150.png');
    bananaImg.size(200,200)

    heading = createElement('h2', 'Click the Banana');
    heading.position(width / 3, height / 4);

}

function draw(){
    bananaImg.position(random(width), random (height));
    bananaImg.mousePressed(youWon);

}

function youWon();{
heading.html('You Won');
bananaImg.remove();
}