function mostrar()
{

/*Realizar el algoritmo que permita el ingreso por prompt
 de las nota  (validar entre 0 y 10) ,
  el sexo (validar el sexo “f” o “m”) de 5 alumnos,
   informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

{ 
    var nota=0;
    var sexo;
    var promedio;
    var notamasbaja=0;
    var contadorvaroles=0;
    var alumnos=0;
    var acumulador=0
    var sexonotabaja;


    while (alumnos<5) {

        alumnos++;

        do {
            nota = prompt("INGRESE UNA NOTA");
            nota = parseInt(nota);



        } while (isNaN(nota) || nota>10 || nota <0);



        do {
            sexo = prompt("INGRESE EL SEXO DEL ALUMNO: f o m");

        } while (sexo!="f" && sexo!="m");

        //punto a
        acumulador+=nota;


        //punto b
        if (contador == 1) {
            notamasbaja= nota;

        } else {
            if (nota< notamasbaja) {
                notamasbaja=nota
                sexonotabaja= sexo
            }
        }

        //punto c

        if (nota>=6 && sexo== "m") {
            contadorvaroles++

        }

    }


    promedio= acumulador/alumnos;
    alert (promedio);

    alert ("")

}