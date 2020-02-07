/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{//variables
    var sueldo;
    var sueldoparseado;
    var resultadofinal;
    var aumentodelsueldo;

// ID   
    sueldo= document.getElementById("sueldo").value;

//operacion

sueldoparseado= parseInt (sueldo);
aumentodesueldo= sueldo * 0.10;

resultadofinal= sueldoparseado + aumentodesueldo;

document.getElementById("resultado").value= resultadofinal;



}
