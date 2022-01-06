

// // 
let audio1 = document.getElementById("audio");




// para mudar o nome do audio e adicionar musica por url
function mudarAudio()
{

let NDM = document.getElementById("NDM");

if( NDM.value != ""){
    nomeDamusica.innerHTML = NDM.value;
}
    mudarTextVel();
    audio1.setAttribute("src",url1.value);
}


// chamadas para mudar o nome e pegar a url do input
let audioo = document.getElementById("audio-container");

let url1 = document.getElementById("url1");
let nomeDamusica = document.getElementById("nomeDaMusica");









// funcao para mudar o html da velocidade e cálculos


let aumentarVel = document.getElementById("aumentar-vel");
let diminuirVel = document.getElementById("diminuir-vel");
let kk = 1;
let vel = document.getElementById("vel");

aumentarVel.addEventListener("click",function(){
   
   if(vel.innerHTML == "01"){ kk = 1};
   
    kk += 0.1;


    if( kk == 1){ vel.innerHTML = `01`; } else { vel.innerHTML = `${Math.floor(kk * 10)/ 10}`;}  
                                                }      
                                                );
                             


diminuirVel.addEventListener("click",function(){
  
    if(vel.innerHTML == "01"){ kk = 1};

    kk -= 0.1;
    if( kk == 1){ vel.innerHTML = `01`; } else { vel.innerHTML = `${Math.floor(kk*10)/10}`;
    if(kk < 0){ vel.innerHTML = "0.1"; }
                                                }
                                                }
                                               );







// --------------- funcao para mudar a minutagem e seus cálculos


let minutagem = document.getElementById("num");

setInterval(function(){
           
    let y;
    let z;

if( audio1.currentTime < 60){ y = 0; }
if(audio1.currentTime >= 60){ y = Math.floor(audio1.currentTime/60)}


z = Math.floor(audio1.currentTime%60);

if(y < 10 && z < 10){minutagem.innerHTML = `0${y}:0${z}`}
if(y < 10 && z >= 10){minutagem.innerHTML = `0${y}:${z}`}
if(y > 10 && z < 10){minutagem.innerHTML = `${y}:0${z}`}
if(y > 10 && z > 10){minutagem.innerHTML = `${y}:${z}`}

                      },200);









// let irPara = document.getElementById("pular-para");
// let purlarFinal = document.getElementById("pular-para-final")
// let pular5s =document.getElementById("pular5s");
// let recuar5s = document.getElementById("recuar5s");
// let reproduzir = document.getElementById("reproduzir");
// let pausar = document.getElementById("pausar");
// funcoes
// funcoes básicas desde aumentar o volume até dar o play






 function mudarTextVel()
 {
    vel.innerHTML = "01";
 }


function aumentar_Som(){audio1.volume += .1 ;}
function diminuir_Som(){audio1.volume -= .1 ;}

function diminuir_vel(){
    if(vel.innerHTML == "01"){ audio1.playbackRate = 1} 
    audio1.playbackRate -= .1 ;}

function aumentar_vel(){
    if(vel.innerHTML == "01"){ audio1.playbackRate = 1}
    audio1.playbackRate += .1 ;}





function PPinicio(){audio1.currentTime = 0;}
function avancar5s(){audio1.currentTime += 5;}
function recuar5s(){audio1.currentTime -= 5;}
function tocar(){audio1.play();}
function pausar(){audio1.pause();}
function mudo()
{
    let mutado = document.getElementById("mudo");
    
    if (audio1.muted == true){
                audio1.muted = false;
                mutado.style.backgroundColor = "#f0f8ff"
                return console.log("desmutado");
    }

    audio1.muted = true;
    mutado.style.backgroundColor = "orange"

}


// Ir para 


let segundos = document.getElementById("second");
let minutos = document.getElementById("minute");

function IrPara(){ audio1.currentTime = (minutos.value * 60) + Bas();}
function Bas(){ return parseInt(segundos.value) ;}




// Definir Intervalo

let pontA = document.getElementById("pontoA");
let pontB = document.getElementById("pontoB");

let ponta = document.getElementById("pontoa");
let pontb = document.getElementById("pontob");

var Aa;
var Bb ;



// Aa

pontA.addEventListener("click",function (){

    Aa = audio1.currentTime;
pontA.style.backgroundColor ="orange";


if(Aa < 10){ ponta.value = `00:0${Math.floor(Aa)}`}

else if( Aa >= 10 && Aa < 60){ponta.value = `00:${Math.floor(Aa)}`}
       

else{
            if(Math.floor(Aa%60) > 10 ||  Math.floor(Aa)/60 > 10){
             ponta.value = `0${Math.floor(Math.floor(Aa)/60)}:${Math.floor(Aa%60)}`}
             
             else{ ponta.value = `0${Math.floor(Math.floor(Aa)/60)}:0${Math.floor(Aa%60)}`}
    }
                                          }      
                     )

// Bb

pontB.addEventListener("click",function(){
    
    
    Bb = audio1.currentTime;
    
    
     if( Bb <= Aa  ){ return console.log("ERRO, impossível definir ponto B") }
     else{

                pontB.style.backgroundColor ="orange";
                    
                
                
                 if(Bb < 10){ pontb.value = `00:0${Math.floor(Bb)}`}
                 else if( Bb >= 10 && Bb< 60){pontb.value = `00:${Math.floor(Bb)}`}
                        
                        else{
   
                    if(Math.floor(Bb%60) > 10 ||  Math.floor(Bb)/60 > 10){ pontb.value = `0${Math.floor(Math.floor(Bb)/60)}:${Math.floor(Bb%60)}` }
                        else{pontb.value = `0${Math.floor(Math.floor(Bb)/60)}:0${Math.floor(Bb%60)}`}
                            
                            }
            
           }

                definidoIntervalo();


                                        }   
                        );


// Go back to A when reachs B
             var binterval;
function definidoIntervalo()
{   


    binterval = setInterval(function(){ if(audio1.currentTime > Bb){ audio1.currentTime = Aa; }},100)

}


// Para limpar o intervalo
function limparkk(){

clearInterval(binterval);

let aaa = document.getElementById("pontoa");
let bbb = document.getElementById("pontob");

aaa.value = "início";
bbb.value = "final";

pontB.style.backgroundColor ="#f0f8ff";
pontA.style.backgroundColor ="#f0f8ff";
}


// LOop

function repetir()
{
let repetirBtn = document.getElementById("repetir");
   
    if(audio1.loop == true){ audio1.loop = false; repetirBtn.style.backgroundColor = "#F0F8FF"; return console.log("funcionou")}


    if(audio1.loop == false){audio1.loop = true; repetirBtn.style.backgroundColor="orange"}
}


 function randomMusic()
 {

         let musicas = new Array();
         musicas = ["1.mp3","2.mp3","3.mp3","4.mp3","3.ogg","6.ogg","5.mp3","original.mp3"]
         let i = Math.floor(Math.random() * 10);
        
    let musicChosen = `${musicas[i]}`;
        
        console.log();

    if(i > 7 ){ musicChosen = `${musicas[7]}` }

       
        audio1.setAttribute("src",musicChosen);

}