var bird;
var obs = [];
let index = 0;
let score = 0;
let indexDead = 0;
let lastScore = 0;

function setup() {
    // put setup code here
    createCanvas(1200, 700);
    bird = new bird();
    obs.push(new objeto());

}
function draw() {
    // put drawing code here
    background(0);
    bird.update();
    bird.show();
    paintScore(score);


    if (obs[0].x <= (obs[0].width * -1)){
        // borramos el primero
        obs.shift();
        index--;
    }

    if (obs[index].x<=700){
        index++;
        obs.push(new objeto());
        console.log("Creando nuevo obs")
    }

    for (let i = 0; i < obs.length; i++) {
        obs[i].show();
        obs[i].update();
    }


    for (let i = 0; i <  obs.length; i++) {

        //console.log(obs.length)
        if (obs[i].checkColision(bird)){
            score=0;
        }
    }

    if (score !== lastScore){
        lastScore = score;
    }

    if (obs[indexDead].x < bird.x){
        console.log("AumentandoIndexDead");
        indexDead++;
        score++;
        console.log(score);
    }




}



function keyPressed(){
    if(key === ' '){
        bird.up();        
    }
}





// Painting
function paintScore(score){
    textSize(32);
    fill(0,0,255);
    text('Score: ' + score*10, 10, 30);
}