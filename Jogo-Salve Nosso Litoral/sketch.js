
var x = 250, y = 500;
pontos = 0;
vidas = 5;
var inicio = false;
var co = false;
var go = false;
var roude2 = false;
var vel = 0;
var rec =[];
raio = 55;
var c;

function preload() {
  //imageMode(CENTER);
  tela1 = loadImage('tela1.png');
  tela2 = loadImage('gameover.png');
  comandos = loadImage('comandos.png');
  fundo = loadImage('fundo.jpeg');
  mar = loadImage('MarComEspuma.png');
  espuma = loadImage('Onda.png');
  imageMode(LEFT);
  lx1 = loadImage('Coke.png');
  lx2 = loadImage('Canudo.png');
  lx3 = loadImage('garrafa.png');
  ol1 = loadImage('Oleo.png');
  ol2 = loadImage('Oleo2.png');
  turtle = loadImage('turtle.png');
  jogador = loadImage('Lixoo.png');
  vid = loadImage('vida.png');
}

function tela (){
  image(tela1, 0, 0, 500, 600)

}

function comand (){
  image(comandos, 0, 0, 500, 600)
}

function gameover (){
  image(tela2, 0, 0, 500, 600)

}

function telaGo (){
  pontos = 0;
  vidas = 5;
  vel = 0;
  xi = random(20, 480);
  xj = random(20, 480);
  xz = random(20, 450);
  xw = random(20, 480);
  xa = random(20, 450);
  xt = random(20, 480);
  xEs = 0;
  xE2 = 0;
  yi = -random(600);
  yj = -random(500);
  yz = -random(500);
  yw = -random(500);
  ya = -random(500);
  yt = -2000;
  yEs = 340;
  yE2 = 340;
}

/* Fase 1*/

function fase1(){
  
  image(fundo, 0, 360, 500, 250);
  image(mar, 0, 0, 500, 400);
  image(espuma, xEs, yEs, 500, 40);
  yEs = yEs + 1/2;
  if ( yEs > 370){
  yEs = random(290);
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  
/* Quando o jogador passar do limite da tela ele volta do outro lado */
  
  image(jogador,x, y, 55, 70);
  if (x > 500) {
    x = 0;
  }

 if (x < 0) {
    x = 500;
  }
  
/* Imagens e comandos */
  
  //vida
  image(vid, xv, yv, 30, 30);
  vel = 2;
  yv = yv + vel;
  if (yv > 600) {
    yv = -random(1500);
    xv = random(469);
  }
  
  image(lx1, xi, yi, 31, 45);
  vel = 2;
  yi = yi + vel;
  if (yi > 600) {
    yi = -random(500);
    xi = random(469);
    vidas = vidas - 1;
  }

  image(lx2, xj, yj, 23, 50);
  vel = 2;
  yj = yj + vel;
  if (yj > 600) {
    yj = -random(400);
    xj = random(469);
    vidas = vidas -1;
  }

  image(lx3, xz, yz, 23, 50);
  vel = 2;
  yz = yz + vel;
  if (yz > 600) {
    yz = -random(300);
    xz = random(469);
    vidas = vidas - 1;
  }

  image(turtle, xt, yt, 50, 30);
  vel = 2;
  yt = yt + vel;
  if (yt > 500) {
    yt = -random(300)
    xt = random(469);
    vidas = vidas - 1;
  }

/* Colisão dos lixos na lixeira */
  
  d = dist(x, y, xi, yi)
  if (d < raio) {
    xi = random(450)
    yi = -random(500)
    pontos = pontos + 1
  }

  d2 = dist(x, y, xj, yj)
  if (d2 < raio) {
    xj = random(450)
    yj = -random(500)
    pontos = pontos + 1
  }

  d3 = dist(x, y, xz, yz)
  if (d3 < raio) {
    xz = random(450)
    yz = -random(500)
    pontos = pontos + 1
  }

  d4 = dist(x, y, xt, yt)
  if (d4 < raio) {
    xt = random(450)
    yt = -random(500)
    vidas = vidas - 1
  }
  
  da = dist(x, y, xv, yv)
  if (da < 30) {
    xv = random(450)
    yv = -random(500) 
    if (vidas < 5){
    vidas = vidas + 1
    }
  
  }

  // Placar 
  
  /* for(i=0; i<10; i++) {
  rec=[pontos];
  } */
  
  textSize(27)
  textFont('Zing Rust Demo Base');
  fill(255, 234, 46);
  text ("Pontos: " +  pontos , 40, 35);
  text ("Vidas: " + vidas, 180, 35);
  text ("Recorde: 000", 300, 35);
  
}

  // Fase 2

function fase2(){

  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 2;
  }

  if (keyIsDown(LEFT_ARROW)) {
    x = x - 2;
  } 
  
/* Imagens e comandos */
  
  image(lx1, xi, yi, 31, 45);
  vel = 1;
  yi = yi + vel;
  if (yi > 600) {
    yi = -random(500);
    xi = random(469);
  }

  image(lx2, xj, yj, 23, 50);
  vel = 1;
  yj = yj + vel;
  if (yj > 600) {
    yj = -random(400);
    xj = random(469);
  }

  image(lx3, xz, yz, 23, 50);
  vel = 1;
  yz = yz + vel;
  if (yz > 600) {
    yz = -random(300);
    xz = random(469);
  }

  image(turtle, xt, yt, 50, 30);
  vel = 1;
  yt = yt + vel;
  if (yt > 600) {
    yt = -2500
    xt = random(469);
  }

/* Colisão dos lixos na lixeira */
  
  d = dist(x+27.5, y+10, xi, yi)
  if (d < 30) {
    xi = random(450)
    yi = -random(500)
    pontos = pontos + 1
  }

  d2 = dist(x+27.5, y+10, xj, yj)
  if (d2 < 30) {
    xj = random(450)
    yj = -random(500)
    pontos = pontos + 1
  }

  d3 = dist(x+27.5, y+10, xz, yz)
  if (d3 < 30) {
    xz = random(450)
    yz = -random(500)
    pontos = pontos + 1
  }

  d4 = dist(x+27.5, y+10, xt, yt)
  if (d4 < 30) {
    xt = random(450)
    yt = -2500
    vidas = vidas - 1
  }

  da = dist(x+27.5, y+10, xv, yv)
  if (da < 30) {
    xv = random(450)
    yv = -random(10000) 
    if (vidas < 5){
    vidas = vidas + 1
    }
  
  }
}
/* Fase 3*/

function fase3(){
  
/* Quando o jogador passar do limite da tela ele volta do outro lado */
  
 image(jogador,x, y, 55, 70);
  if (x > 500) {
    x = 0;
  }

  if (x < 0) {
    x = 500;
  }

/* Imagens e comandos */
  
  image(lx1, xi, yi, 31, 45);
  if (yi > 600) {
    yi = -random(500);
    xi = random(469);
    
  }

  image(lx2, xj, yj, 23, 50);
  if (yj > 600) {
    yj = -random(400);
    xj = random(469);
    
  }

  image(lx3, xz, yz, 23, 50);
  if (yz > 600) {
    yz = -random(300);
    xz = random(469);
   
  }
  
  image(ol1, xw, yw, 31, 40);
  vel = 3;
  yw = yw + vel;
  if (yw > 600) {
    yw = -random(300);
    xw = random(469);
    
  }
  
  image(ol2, xa, ya, 37, 31);
  vel = 3;
  ya = ya + vel;
  if (ya > 600) {
    ya = -random(300);
    xa = random(469);
    
  }

  image(turtle, xt, yt, 50, 30);
  if (yt > 600) {
    yt = -2500
    xt = random(469);
  }

/* Colisão dos lixos na lixeira */
  
  d = dist(x+27.5, y+10, xi, yi)
  if (d < 30) {
    xi = random(450)
    yi = -random(500)
    pontos = pontos + 1
  }

  d2 = dist(x+27.5, y+10, xj, yj)
  if (d2 < 30) {
    xj = random(450)
    yj = -random(500)
    pontos = pontos + 1
  }

  d3 = dist(x+27.5, y+10, xz, yz)
  if (d3 < 30) {
    xz = random(450)
    yz = -random(500)
    pontos = pontos + 1
  }

  d4 = dist(x+27.5, y+10, xw, yw)
  if (d4 < 30) {
    xw = random(450)
    yw = -random(500)
    pontos = pontos + 1
}    
  
  d5 = dist(x+27.5, y+10, xa, ya)
  if (d5 < 30) {
    xa = random(450)
    ya = -random(500)
    pontos = pontos + 1
} 
  
  d6 = dist(x+27.5, y+10, xt, yt)
  if (d6 < 30) {
    xt = random(450)
    yt = -random(500)
    vidas = vidas - 1
    }

da = dist(x+27.5, y+10, xv, yv)
  if (da < 30) {
    xv = random(450)
    yv = -random(1500) 
    if (vidas < 5){
    vidas = vidas + 1
    }
  
  }
}

function setup() {
  createCanvas(500, 600);
  xi = random(20, 480);
  xj = random(20, 480);
  xz = random(20, 450);
  xw = random(20, 480);
  xa = random(20, 450);
  xt = random(20, 480);
  xEs = 0;
  xE2 = 0;
  yi = -random(600);
  yj = -random(500);
  yz = -random(500);
  yw = -random(500);
  ya = -random(500);
  yt = -2000;
  yEs = 340;
  yE2 = 340;
  xv = random(20, 480);
  yv = -random(600);
}

function draw(){
  
  tela ()
  if (keyIsDown(ENTER)){
    inicio = true
  }
    if (inicio == true) {
      comand ()
    }
  
      if (keyIsDown(32)){
        co = true
      }
      if (co == true) {
      fase1()
      }
      if(pontos > 5){
        fase2() 
        if(pontos > 10){
          fase3() 
        }
      }
  if (vidas == 0){
    telaGo ()
  
    if (keyIsDown(80)){
        roude2 = true
      }
      if (roude2 == true) {
      gameover ()
      }
  }

}