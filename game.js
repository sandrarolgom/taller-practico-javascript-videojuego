const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load', setCanvasSize);
//evento para cuando se hace cambio del tamaño de la pantalla 
window.addEventListener('resize', setCanvasSize);

//pasamos las variables a variables globales
let canvasSize;
let elementSize;


//funcion para separar el código
function setCanvasSize(ev) {
    
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    };

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = canvasSize / 10;
    startGame();
};

//función de renderizado de mapas
function startGame(){
    
    //render de nuestro mapa
    game.font = elementSize + "px Verdana";
    game.textAlign = 'end';
    for (let i = 1; i <= 10; i++){
        game.fillText(emojis['X'], elementSize, elementSize * i);
    };
};
