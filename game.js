const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame)

function startGame(){
    let canvasSize;
    //si el alto es más grande que el ancho, el tamaño del ancho va a ser el que se utilice para el atributo width y height
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    } else {
        //en caso de que sea más grande el ancho, se cojerá la medida del alto como base
        canvasSize = window.innerHeight * 0.8;
    };

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    //definir posiciones de los elementos
    const elementSize = canvasSize / 10;
    console.log({canvasSize, elementSize});

    //le estamos dando una fuente con medida de elementSize que es /10 de lo que mide la pantalla, el canvas y tenemos que ponerle que lo queremos en px y con texto Verdana 
    game.font = elementSize + "px Verdana";
    //aquí le decimos que se alinee al principio
    game.textAlign = 'end';


    for (let i = 1; i <= 10; i++){
        //llamamos al objeto de emojis y le decimos que queremos el icono que está en X
        game.fillText(emojis['X'], elementSize * i , elementSize )
    }

    //le decimos a canvas que le queremos asignar su atributo de width/height una medida dinámica dependiendo del tamaño del dispositivo pero no funciona porque las medidas no son cuadradas siempre y no se ajusta a todas las medidas de la pantalla
    //canvas.setAttribute('width', window.innerWidth * 0.75);
    //canvas.setAttribute('height', window.innerHeight * 0.5);
};