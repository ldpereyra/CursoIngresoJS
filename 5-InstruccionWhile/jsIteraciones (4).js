function mostrar()
{
	
	var numero= prompt("ingrese un número entre 0 y 10.");

while (numero <0 || numero>9 || isNaN(numero)){
	numero= prompt(" ERORR ingrese un número entre 0 y 10.");

numero=parseInt (numero);
	document.getElementById("Numero").value =numero; 
}

}//FIN DE LA FUNCIÓN