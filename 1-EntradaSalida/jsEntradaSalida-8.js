/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{//variable

var numero01
var numero02
var numero02parseado
var numero01parseado

numero01= document.getElementById("numeroDividendo").value;
numero02= document.getElementById("numeroDividendo").value;

//operacion

numero01parseado=parseInt (numero01)
numero02parseado=parseInt (numero02)

resultado= numero01parseado % numero02parseado

//Mensaje con resultado

resultado= "El resultado es "+resultado

alert(resultado)

}
