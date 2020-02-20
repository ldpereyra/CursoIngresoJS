function mostrar()
{
//variable
	var contador=0;
	var acumulador=0;
	var respuesta=true;
	//otro manera  var iterador= true;
//condicional
respuesta = prompt ("cuantas veces quiere sumar");
	while (respuesta=true){
		contador++;
		var numero= prompt("ingrese un numero");
		numero =parseInt(numero);

	}while (isNaN(numero)){
		numero= prompt("INGRESE UN NUMERO VALIDO");
		numero= parseInt(numero);
	} acumulador +=numero;
	//chequear esto
	//while (respuesta== "si"){
		//respuesta= prompt ("desea continuar");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN