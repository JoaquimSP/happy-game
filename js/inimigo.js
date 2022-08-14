class inimigo{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.c = color;
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    moveLeft(width, height){
        this.x--;
        if(this.x < 0){
            this.x = width;
            this.y = Math.random()*height;
        }
    }

    moveRight(width, height){
        this.x++;
        if(this.x > width){
            this.x = 0;
            this.y = Math.random*height;
        }
    }

    moveTop(width, height){
        this.y--;
        if(this.y < 0){
            console.log(this.y);
            this.y = height;
            this.x = Math.random()*width;
        }
    }

    moveDown(width, height){
        this.y++;
        if(this.y > height){
            console.log(this.y);
            this.y = 0;
            this.x = Math.random()*width;
        }
    }

    moveDiag(width, height){
        this.y++;
        this.x++;
        if(this.y > height && this.x > width){
            this.y = Math.random()*height;
            this.x = Math.random()*width;
        }
    }

}