function objeto(){

    // ATRIBUTOS //
    this.separacion = 300;
    this.speed = 5;
    this.width = 40;
    this.x = parseInt(width);
    this.y = 0;
    this.maxLongitud = height - this.separacion;
    this.altura = Math.random() * this.maxLongitud;
    this.r = 255;
    this.g = 255;
    this.b = 255;


    // Funciones //

    this.update = function () {
        this.x -= this.speed;
    };
    
    this.show = function () {
        fill(this.r,this.g,this.b);
        rect(this.x, this.y, this.width, this.altura);
        rect(this.x,this.altura+this.separacion,this.width,height);
    };


    this.checkColision = function (pajaro) {
        //console.log("Checking pos");
        let xbird = pajaro.x;
        let ybird = pajaro.y;

        // Aqui detectaremos las colisiones que
        // puedan haber con el pajaro y las barras



        if (xbird + (pajaro.radius /2) > this.x && xbird - (pajaro.radius /2) < this.x+this.width){
            //console.log("dentro de x");
            // Barra superior
            if  (ybird  + (pajaro.radius /2) > 0 &&  ybird - (pajaro.radius /2) <this.altura ){
                //console.log("Colision superior");

                this.g = 0;
                this.b = 0;
                return true;
            }
            // Barra inferior
            if  (ybird + (pajaro.radius /2) > (this.altura + this.separacion) &&  ybird - (pajaro.radius /2) < height ){
                //console.log("Colision inferior");
                this.g = 0;
                this.b = 0;
                return true;

            }
        }else {
            this.r = 255;
            this.g = 255;
            this.b = 255;        }

    }

}


