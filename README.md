# Encender-y-apagar-LED-con-Johnny-Five---SOLUCIONES-A-POSIBLES-ERRORES
A continuación encontrarán un ejemplo muy básico (el "Hola Mundo" de la electrónica) en el cual vamos a encender y apagar el LED interno de la tarjeta de desarrollo Arduino UNO mediante Johnny Five (Javascript) y también encontrarán la solución a los posibles errores que se encontrarán al intentar programar con Johnny Five.

Al intentar programar con Johnny Five pueden tener 3 posibles errores, incluso luego de haber flasheado la placa con firmataStandar en el IDE de Arduino. Los posibles errores son:
1) no te permite instalar johnny five
2) te dice que falta "serialport"
3) te dice que falta "firmata"

Estas soluciones que les diré son para WINDOWS 10, en Linux no tuve problemas pero si ustedes los tienen entonces el proceso supongo que debe ser similar.

Antes de decirle las soluciones que me funcionaron debo aclararles que necesitaran tener instalado lo siguiente:
-Python 2.7
-Visual Studio 2015C++ (esto lo leí de una publicación hecha en Platzi)
-NVM 1.1.9 Windows (fue la que me funcionó)
-Placa electrónica (en mi caso fue Arduino UNO) flasheada con StandardFirmata

Aquí les dejo las soluciones que me funcionaron:
a) no te permite instalar johnny five: Para solucionar esto debes usar otra versión de Nodejs. Esto sucede (según entiendo) porque Johnny Five solo es compatible con algunas versiones de Nodejs. La versión con la que me funcionó fue la "13.12.0" (en un video parece que a otra persona le funcionó con la "5.5.0"). Deben NVM (Node Version Manager) para tener varias versiones de Nodejs y poder cambiarse entre una y otra de forma fácil. Esto es importante porque según leí este tipo de problemas se pueden presentar con otros framework.

b)te dice que falta "serialport": este problema lo podremos solucionar con tan solo indicar el puerto donde está la placa. Una manera para saber el puerto es tan solo ir al IDE de Arduino e ir a la siguiente ruta: "Herramientas -> Puerto"

El codigo debería quedar de la siguiente manera (en mi caso es):
myBoard = new Board({port: "COM3"});

Nota: "COM3" en Windows esos puertos generalmente vienen acompañados por el "COM", ya el numero podría variar. En Linux no usan "COM", es otra cosa, la cual pueden ver en el IDE de Arduino.

c)te dice que falta "firmata": puedes intentar instalar firmata con "npm i firmata"  y se arreglaría, PERO en mi caso NO funcionó en la versión 16.13.0 de Nodejs, me tocó instalar la versión 13.12.0 de Nodejs con NVM y luego si instalar firmata con "npm i firmata".

NOTA: como extra les dejo los instaladores de NVM (Node Version Manager) y Python 2.7.
