class Campeao{
   constructor (x, y, r, a, c_f, c_b){
      this.x = x;
      this.y = y;
      this.r = r;
      this.a = a;
      this.c_f = c_f;
      this.c_b = c_b;
   }
   draw(ctx){

      //Circulo
      ctx.beginPath();
      ctx.fillStyle = this.c_f;
      ctx.lineWidth = 2;
      ctx.strokeStyle = this.c_b; 
      ctx.arc(this.x, this.y, this.r, this.a, 2*Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      //Olho esquerdo 
      ctx.beginPath();
      ctx.fillStyle = this.c_b;
      ctx.arc(this.x+14, this.y-5, 5, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();   

      //Olho direito
      ctx.beginPath();
      ctx.fillStyle = this.c_b;
      ctx.arc(this.x-16, this.y-5, 5, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
      
      //BOCA
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.arc(this.x, this.y-0, this.r-10, 0, (Math.PI / 180 ) * 180);
      ctx.stroke();
      ctx.closePath();
      
   }

   move(tecla){
      if(tecla == 39 && this.x+this.r < 500){
          this.x = this.x + 2;
      }

      if(tecla == 37 && this.x+this.r > 65){
          this.x = this.x - 2;
      }

      if(tecla == 38 && this.y+this.r > 65){
          this.y = this.y - 2;
      }

      if(tecla == 40 && this.y+this.r < 300){
          this.y = this.y + 2;
      }
   }

}