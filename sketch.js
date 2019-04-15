var bird;

function setup() {
  // put setup code here
    createCanvas(1300,900);
    bird = new bird();



   
}
function draw() {
    // put drawing code here
    background(0);
    bird.update();
    bird.show();




}



function keyPressed(){
    if(key === ' '){
        bird.up();        
    }
}







