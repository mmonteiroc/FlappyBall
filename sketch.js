var bird;
var obs = [];
let index = 0;
function setup() {
    // put setup code here
    createCanvas(1300, 900);
    bird = new bird();
    obs.push(new objeto());

}
function draw() {
    // put drawing code here
    background(0);
    bird.update();
    bird.show();

    if (obs[0].x <= 0){
        // borramos el primero
        obs.shift;
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


}

function keyPressed(){
    if(key === ' '){
        bird.up();        
    }
}







