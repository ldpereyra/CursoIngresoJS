function mostrar()
{
// declarar variables
	var contador=0;
	var respuesta=true;
	var max
	var min
	var primeraiteracion=true;

	while (respuesta){
		var numero =prompt('ingrese un numero valido');
		numero=parseInt (numero);
	
		//VALIDANDO
		while (isNaN(numero)){
			numero=prompt("error, ingresar numero valido");
			numero=parseInt(numero); 
		}
		//OPERANDO
		if(primeraiteracion){
			primeraiteracion=false
			
			min=numero;
			max=numero;
		}else{
        //a partir de la se 2 iteracion
		if (numero >max){
			max=numero;} 
		}
		if (numero <min){
			min=numero;
		}
		//CONFIRMAR SI SIGO| ROMPE EL WHILE
		respuesta= confirm("desea continuar");
	}
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;




}//FIN DE LA FUNCIÓN