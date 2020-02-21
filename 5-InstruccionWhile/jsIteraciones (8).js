function mostrar()
{
	
//variable
var contador=0;
var positivo=0;
var negativo=1;
var respuesta=true;
//validar numero siempre!

while (respuesta){
	var numero =prompt('ingrese un numero valido');
	numero=parseInt (numero);


	while (isNaN(numero)){
		numero=prompt("error, ingresar numero valido");
		numero=parseInt(numero);

	}
	// operaciones
	if (numero >= 0){
		positivo +=numero;
	}else {
		negativo *=numero;
		contador++;
	}

	
	respuesta= confirm("desea continuar");
}//cierro el while de respuesta

//validas que haya un negativo
if (contador==0){
	negativo="no ingresaste nada";
}
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN