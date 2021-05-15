const cvs = document.getElementById("canvas"); 
const ctx = cvs.getContext("2d");

let gudda = new Image();
gudda.src = "media/gudda.png";

let gudda2 = new Image();
gudda2.src = "media/gudda2.png";

let gudda3 = new Image();
gudda3.src = "media/gudda3.png";

let gudda4 = new Image();
gudda4.src = "media/gudda4.png";

let background = new Image();
background.src = "media/background.png";

let cloudPic = new Image();
cloudPic.src = "media/cloudPic.png";

let cactus = new Image();
cactus.src = "media/cactus.png";

let stonePic = new Image();
stonePic.src = "media/stonePic.png";

let pebble = new Image();
pebble.src = "media/pebble.png";

let grass = new Image();
grass.src = "media/grass.png";

let stones = [];
stones[0] = {
    x: cvs.width,
    y: cvs.height*0.75,
    w: cvs.width*0.05,
    h: cvs.height*0.20,
    vx: 8
    }
let player = new Player();

let grasses = [];
let randomHforgrasses = Math.random()*5;
grasses[0] = {
    x: cvs.width*1.5,
    y: cvs.height*0.85 - randomHforgrasses,
    w: cvs.width*0.05 + Math.random()*10,
    h: cvs.height*0.1 + randomHforgrasses,
    v: 8
}
let clouds = [];

clouds[0] = {
    x: cvs.width,
    y: cvs.height*0.2,
    w: cvs.width*0.2 + Math.random()*40,
    h: cvs.height*0.1 + Math.random()*14,
    v: 1
}

let pebbles = [];
let randomHforPebbles = Math.random()*5;
pebbles[0] = {
    x: cvs.width,
    y: cvs.height*0.90 - randomHforPebbles,
    w: cvs.width*0.05 + Math.random()*10,
    h: cvs.height*0.05 + randomHforPebbles,
    v: 8
}


/*for (let i = 0; i < 50; i++) {
         stone[i] = new Player();
    }*/


function draw() {
    canvas();
    showClouds();
    showPebbles();
    showGrasses();
    player.display();
    player.move();
    showStone();
   checkCollision();
  /*  for (let i = 0; i < stone.length; i++) {
        stone[i].display();
        stone[i].move();*/
    }
   // drawLine();
 
function showGrasses() {
    for (let i = 0; i < grasses.length; i++) {
      ctx.drawImage(grass, grasses[i].x, grasses[i].y, grasses[i].w, grasses[i].h) ;
        grasses[i].x -= grasses[i].v;
        console.log("sdjk");
    }
    
      if (grasses[grasses.length - 1].x == 402) {
       //stones[stones.length + 1] = new Stone();
      grasses.push({  x: cvs.width,
    y: cvs.height*0.55 - randomHforgrasses,
    w: cvs.width*0.35 + Math.random()*10,
    h: cvs.height*0.4 + randomHforgrasses,
    v: 1 + Math.floor(Math.random()*5)
}) 
   }
    if (grasses.length > 5 ) {
        grasses.shift();
    }

}


function showClouds() {
    for (let i = 0; i < clouds.length; i++) {
      ctx.drawImage(cloudPic, clouds[i].x, clouds[i].y, clouds[i].w, clouds[i].h) ;
        clouds[i].x -= clouds[i].v;
        console.log("sdjk");
    }
    
      if (clouds[clouds.length - 1].x == 400) {
       //stones[stones.length + 1] = new Stone();
      clouds.push({ x: cvs.width,
    y: cvs.height*0.13 ,
    w: cvs.width*0.2 + Math.random()*70,
    h: cvs.height*0.1 + Math.random()*40,
    v: Math.floor(Math.random()*3) + 1
}) 
   }
    if (clouds.length > 8 ) {
        clouds.shift();
    }

}

function showPebbles() {
    for (let i = 0; i < pebbles.length; i++) {
      ctx.drawImage(pebble, pebbles[i].x, pebbles[i].y, pebbles[i].w, pebbles[i].h) ;
        pebbles[i].x -= pebbles[i].v;
        console.log("sdjk");
    }
    
      if (pebbles[pebbles.length - 1].x == 404) {
       //stones[stones.length + 1] = new Stone();
      pebbles.push({  x: cvs.width,
    y: cvs.height*0.90 - randomHforPebbles,
    w: cvs.width*0.03 + Math.random()*10,
    h: cvs.height*0.05 + randomHforPebbles,
    v: 8
}) 
   }
    if (pebbles.length > 5 ) {
        pebbles.shift();
    }

}

function showStone() {
    randomHeight = Math.random()*50;
    
    for (let i = 0; i < stones.length; i++) {
       //ctx.fillStyle = "orange";
    if (randomHeight < 30) {
        ctx.drawImage(cactus ,stones[i].x, stones[i].y, stones[i].w, stones[i].h);
    } else {
        ctx.drawImage(cactus ,stones[i].x, stones[i].y, stones[i].w, stones[i].h);
    }
      stones[i].x -= stones[i].vx;
    
    }
    if (stones[stones.length - 1].x == 172) {
       //stones[stones.length + 1] = new Stone();
      stones.push({x: cvs.width,
    y: cvs.height*0.75 - randomHeight,
    w: Math.random()*cvs.width*0.05 + cvs.width*0.05,
    h: cvs.height*0.20 + randomHeight,
    vx: 8}) 
   }
    if (stones.length > 2) {
        stones.shift();
    }
}


function canvas() {
   // ctx.fillStyle = "lightblue";
    ctx.drawImage(background , 0, 0, cvs.width, cvs.height);
    
    ctx.fillStyle = "green";
    ctx.fillRect(0, cvs.height*0.95, cvs.width, cvs.height*0.5);
    
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(0, cvs.height*0.95, cvs.width, cvs.height*0.5);
    
}

/*function drawLine() {

    for (let i = 0; i < stone.length; i++) {
        for (let j = 0; j < stone.length; j++) {
              ctx.beginPath();
              ctx.strokeStyle = "black"
              ctx.moveTo(stone[i].x, stone[i].y); 
              ctx.lineTo(stone[Math.floor(Math.random()*stone.length)].x, stone[Math.floor(Math.random()*stone.length)].y); 
              ctx.stroke();
        }
    }
}*/


function Player() {
    
    this.x = cvs.width*0.1;
    this.y = cvs.height*0.70;
    this.w = cvs.width*0.07;
    this.h = cvs.height*0.25;
    this.g = 0.7;
    this.v = 0;
    
    this.display = function() {
        
        //ctx.fillStyle = "red";
        randomNo = Math.floor(Math.random()*3);
        if (this.y >= cvs.height*0.70) {
            if (randomNo == 0) {
            ctx.drawImage(gudda, this.x, this.y, this.w, this.h);
            } else if (randomNo == 1) {
                ctx.drawImage(gudda2, this.x, this.y, this.w, this.h);
            }
            else {
                ctx.drawImage(gudda3, this.x, this.y, this.w, this.h);
            }
        } else {
            ctx.drawImage(gudda4, this.x, this.y, this.w, this.h);
        }
    }
    
    this.move = function() {
          if (this.y + this.h > cvs.height*0.95) {
              this.y = cvs.height*0.70;
             // this.g = 0;
              this.v = 0;
          } else {
              this.g = 1;
          }
           this.y += this.v;
           this.v += this.g;
        }
        
    this.kood = function() {
     if (this.y >= cvs.height*0.70) {
        this.y -= 1;
        this.v = -18;
        }
      }
    }


    function pagal() {
  player.kood();
   }

function checkCollision() {
   for (let i = 0; i < stones.length; i++) {
       if (player.x + player.w >= stones[i].x && stones[i].x + stones[i].w >= player.x) {
           if (player.y + player.h >= stones[i].y) {
               clearInterval(game);
               console.log("hit");
           }
       }
  }
} 


let game = setInterval(draw, 1000/60)