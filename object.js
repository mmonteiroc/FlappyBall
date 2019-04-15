function objeto(){

    // ATRIBUTOS //
    this.separacion = 300;
    this.speed = 5;
    this.x = parseInt(width);
    this.y = 0;
    this.maxLongitud = height - this.separacion;
    this.altura = Math.random() * this.maxLongitud;

    // Funciones //

    this.update = function () {
        this.x -= this.speed;
    };
    
    this.show = function () {
        fill(255);
        rect(this.x, this.y, 20, this.altura);
        rect(this.x,this.altura+this.separacion,20,height);

    };

}


