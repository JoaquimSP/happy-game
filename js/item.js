class Item{
    constructor(x, y, r, a, c_f, c_b){
        this.x = x;
        this.y = y;
        this.r = r;
        this.a = a;
        this.c_f = c_f;
        this.c_b = c_b;
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle =  this.c_f;
        ctx.strokeStyle = this.c_b; 
        ctx.arc(this.x, this.y, this.r, this.a, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

}