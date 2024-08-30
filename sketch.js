let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

let velocidadeXBolinha =6;
let velocidadeYBolinha =6;

function setup (){
 createCacircle(xBolinha, yBolinha, diametro)
  xBolinha += vnvas(600, 400);
}

function draw() {
  background(0);
  xbolinha +=  velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
 
 if (yBolinha + raio > width ||
    xBolinha - raio < 0){
 velocidadexBolinha *= -1
 }
  if (yBolinha + raio > height ||    
    yBolinha - raio < 0){
    velocidadeYBolinha*= -1
   }
     }