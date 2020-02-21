function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		var numero =prompt('ingrese un numero valido');
		numero=parseInt (numero);
	
		//VALIDANDO
		while (isNaN(numero)){
			numero=prompt("error, ingresar numero valido");
			numero=parseInt(numero); 
		}
		if (numero >= 0){
			positivo +=numero;
		}else {
			negativo *=numero;
			contador++;
		}
		respuesta= confirm("desea continuar");
	
	}




}//FIN DE LA FUNCIÓN