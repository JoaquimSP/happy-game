class quadrado{
    constructor(x, y, width, height, color){
       this.a = x;
       this.b = y;
       this.c = width;
       this.d = height;
       this.e = color;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.e;
        ctx.rect(this.a, this.b, this.c, this.d);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

}