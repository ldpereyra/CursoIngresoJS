/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//variables
    var importeinicial;
    var importeinicialparseado;
    var importecondescuento;
    var RESULTADO;
//id

importeinicial=document.getElementById("importe").value;

//operacion
importeinicialparseado= parseInt (importeinicial);
importecondescuento= importeinicial *0.25; 

RESULTADO= importeinicialparseado-importecondescuento;

document.getElementById("resultado").value = RESULTADO;
	
}
