let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xBolinha = 20;
let yBolinha = 20;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background("rgb(41,42,44)");

  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
 movimentaRaquete();

}
function mostraBolinha() {
  fill('rgb(117,19,19)')
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}
function verificaColisaoBorda(){
    if (yBolinha + raio > height || yBolinha - raio < 0) {
   velocidadeYBolinha *=-1;
  }
    if (xBolinha + raio > width || xBolinha - raio < 0) {
   velocidadeXBolinha *=-1;
  }
}
function mostraRaquete(){
 fill("rgb(252,255,255)");
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}
function movimentaRaquete(){
 if(keyIsDown(87)){
   yRaquete -=5;
 }
   if(keyIsDown(83)){
   yRaquete +=5;
 }
}



