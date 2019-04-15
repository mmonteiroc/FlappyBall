function bird(){
    
    // Atributos//
    this.y = height/2;
    this.x = 180;
    this.radius = 32;
    this.gravity = 0.4;
    this.upForce = -17;
    this.velocity = 0;


    // Funciones //
    this.show = function(){
        fill(255,200,30);
        ellipse(this.x,this.y,this.radius,this.radius);

    };




    this.update = function(){
        this.velocity+=this.gravity;
        this.y += this.velocity;
        this.checkOut();    
        
        
        
       
    };


    this.checkOut = function(){

         // Check que el pajaro no se salga del juego por abajo
         if(this.y + this.radius/2 > height ){
            this.y =  height - this.radius/2;
            this.velocity = 0;
        }

         if(this.y + this.radius/2 <  0 ){
            this.y =   this.radius/2;
            this.velocity=0;
        }

    };


    this.up = function(){
        
        // Esta funcion nos permite hacer que 
        // nuestro 'pajaro' se mueva hacia arriba
        this.velocity += this.upForce;

    };


}