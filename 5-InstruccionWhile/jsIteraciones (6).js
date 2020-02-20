function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	// vARIABLE

	while(contador<5)// || isNaN (numero)???
	{
		contador++;
		var numero =prompt("ingrese un numero");

		//validar

		numero= parseInt (numero); 

		// me vuelvo a validar
	while (isNaN(numero)){
		numero= prompt("INGRESE UN NUMERO VALIDO");
		numero= parseInt(numero);
	}

		// acumulamos
		acumulador += numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN