var canvas = document.getElementById("canvas");

    ctx = canvas.getContext("2d");

     var width = canvas.width;
     var height = canvas.height;

    var fundo = new quadrado(0,0,500,300,"white");
    var champion = new Campeao(35, 35, 30, 0, "yellow", "black");
    var item =  new Item(Math.random()*width, Math.random()*height, 10, 0, "red", "black");
    
    var inim1 = new inimigo(Math.random()*width, 0, 30, 30, "blue");
    var inim2 = new inimigo(Math.random()*height, 0, 30, 30, "black");
    var inim3 = new inimigo(Math.random()*width, Math.random()*height, 30, 30, "purple");
    var inim4 = new inimigo(0,Math.random()*height,30,30,'green');

    var tema = new Audio();
    var som_item = new Audio();
    
    var tecla;
    var cd = 0;

    function load(){
        var msg = "Clique aqui para Jogar!";
        
        ctx.fillStyle = 'black';
        ctx.font = "32px sans-serif";
        var pos = width/2 - ctx.measureText(msg).width/2;
       ctx.fillText(msg, pos, height/2);

        canvas.addEventListener("click", function(){
          tema.play();
         desenhando();
        });
    }

    load();

    function carregaSom(){
      tema.src = 'sounds/theme.mp3';
      tema.oncanplaythrough = function (){   //oncanplaythrough = carrega sempre
        tema.volume = 0.2;
       tema.loop = true;
      //console.log('LOAD: '+tema.src);
      };
      tema.load();
  
      som_item.src = 'sounds/jump.mp3';
      som_item.oncanplaythrough = function (){
        som_item.volume = 1;
       // console.log('LOAD: '+som_item.src);
      };
      som_item.load();
    }
    carregaSom();

    function pontos(){
      var msg = "Pontos: "+cd;
      ctx.fillStyle="black";
      ctx.font = "15px sans-serif";
      var pos = width/2 - ctx.measureText(msg).width/2;
      ctx.fillText(msg, pos, height-25);
    }

    function colisao(champion, item){
       var champion_x = champion.x;
       var champion_y = champion.y;
       var champion_r = champion.r;

       var item_x = item.x;
       var item_y = item.y;
       var item_r = item.r;

       if((item_x - champion_x)**2 + (item_y - champion_y)**2 <= (item_r + champion_r)**2){
        item.x=Math.random()*width;
        item.y=Math.random()*height;
        
        cd++;
        som_item.play();
       } else {
        return false;
       }
    }

    function colisao1(champion, inim1){
      var champion_x = champion.x;
      var champion_y = champion.y;
      var champion_r = champion.r;

      var inim_x = inim1.x;
      var inim_y = inim1.y;
      var inim_w = inim1.w/2+inim_x;
      var inim_h = inim1.h/2+inim_y;

      var inim_r = (inim1.w>inim1.h)?inim1.w:inim1.h/2;
      
      if((inim_w - champion_x)**2 + (inim_h - champion_y)**2 <= (inim_r + champion_r)**2){
        return true;
       } else {
        return false;
       }      
    }

    function desenhando(){
      fundo.draw(ctx);

      champion.draw(ctx);
  
      champion.move(tecla);
      item.draw(ctx);
      
      inim1.draw(ctx);
      inim2.draw(ctx);
      inim3.draw(ctx);
      inim4.draw(ctx);
      
      inim1.moveLeft(width, height);
      inim2.moveRight(width, height);
      inim3.moveTop(width, height);
      inim4.moveDown(width, height);

      pontos();
     
      colisao(champion, item);

       if(colisao1(champion, inim1) || colisao1(champion, inim2) || colisao1(champion, inim3) || colisao1(champion, inim4)){
        alert("Você perdeu :( ");      
        location.reload();
         
       }

     requestAnimationFrame(desenhando);
  }

  window.addEventListener("keydown", function(e){
    tecla = e.which;

    console.log(tecla);
});

window.addEventListener("keyup", function(e){
    tecla = 0;
});