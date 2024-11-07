const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

//evento que selecciona el momento en el que se carga la página para que primero se recargue la página y luego se empieza a trabajar con canvas
window.addEventListener('load', startGame)

//función con el código que se debe ejecutar al principio de nuestro juego para inicializar lo que necesitemos y después irlo manipulando en función del movimiento
function startGame(){
    //fillRect --> lugar donde va a iniciar y terminar nuestro trazo/imagen/línea,etc
    game.fillRect(0,0,100,100);
    //clearRect --> si queremos borrar desde las posiciones
    game.clearRect(0,0,100,50);
    //fillStyle --> para dar estilo a los textos
    game.fillStyle = "Black";
    //fillFont --> para dar tamaño y tipo al texto
    game.font = '25px Verdana';
    //textAlign = para dar ubicación al texto
    game.textAlign = "enrightd";
    //fillText --> insertar texto
    game.fillText('Hola mundo', 100, 100);
};