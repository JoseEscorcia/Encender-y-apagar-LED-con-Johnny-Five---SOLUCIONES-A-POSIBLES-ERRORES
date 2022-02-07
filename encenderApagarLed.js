//Este ejemplo fue realizado en Nodejs versión 13.12.0

const {Board, Led} = require("johnny-five"); //de "Johnny Five" solo estaremos usando las clases "Board" y "Led" en este ejemplo
const board = new Board({port: 'COM3'}); //Creamos una nueva tarjeta y le indicamos el puerto de esta tarjeta

board.on("ready", () => { //Cuando la tarjeta esté lista has tal cosa...
  const led = new Led(13); //inicializamos el led en el pin 13
  led.strobe(2000); //"strobe" hace parpadear. Toma como parametro el tiempo en MILISEGUNDOS   1 segundo = 1000 milisegundos
});