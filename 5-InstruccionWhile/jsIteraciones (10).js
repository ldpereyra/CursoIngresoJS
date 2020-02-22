function mostrar()
{
var acumulador;
var respuesta;	
var contador;
var notaalumno;
var sexoAlumno;
var edadAlumno;
var nombreAlumno;
var promedionotas;
var mejornota;
var peornota;
var bandera;
var nombremejornota;
var contadordemujeres;
bandera="no paso por aca";

respuesta= "si";
contadordemujeres=0;
contador=0;//1# inicializar para ingresar
acumulador=0;
 
//declarar contadores y variables
while (respuesta=="si")
//while( contador<5) //#2 definir  //otra manera de escribir la logica
{
	contador=contador+1;//#3 cambio variable de la logica //contador++
	nombreAlumno= prompt ("INGRESE SU Nombre, no sea loquita");
	notaalumno=prompt ("ingrese el "+contador+"numero :");
	notaalumno=parseInt(notaalumno); //#4 parsear siempre el numero
	
	//while(notaalumno >0 &&notaalumno<9) //MAL
	//while(!(notaalumno >0 &&notaalumno<9))//casi
	while (notaalumno <0 || notaalumno>10)//Bien
	{
		notaalumno=prompt ("ingrese el "+contador+"numero :");
		notaalumno=parseInt(notaalumno); //#4 parsear siempre el numero
	}
	sexoAlumno= prompt ("ingrese f o m");
	//while(sexoAlumno== "f"||sexoAlumno=="m");//MAL
	//while(!(sexoAlumno== "f"||sexoAlumno=="m")); CASI BIEN
	while(sexoAlumno!= "f" && sexoAlumno!="m");//{BIEN
//	{
//		sexoAlumno=prompt ("ingrese F O M")
//	}

	edadAlumno=prompt ("ingrese el "+contador+"numero :");
	edadAlumno=parseInt(edadAlumno); //#4 parsear siempre el numero
	
	//while(edadAlumno >0 &&edadAlumno<9) //MAL
	//while(!(edadAlumno >0 &&edadAlumno<9))//casi
	while (edadAlumno <0 || edadAlumno>100)//Bien
	{
		edadAlumno=prompt ("ingrese el "+contador+"numero :");
		edadAlumno=parseInt(edadAlumno); //#4 parsear siempre el numero
	}
//termino el ingreso /while

//if (bandera=="no paso por aca")//no va un bandera
if(sexoAlumno=="f")
{
	contadordemujeres=contadordemujeres+1;
}
{
	bandera="si paso";//no va un bandera
	mejornota=notaalumno;//no va un bandera
	peornota=notaalumno;//no va un bandera
}
if (contador==1)
{
	mejornota=notaalumno;
	peornota=notaalumno;
}
else
{
	
	if(notaalumno>mejornota) //si la nota del alumno es mayor
	{
	mejornota=notaalumno;
	nombremejornota=nombreAlumno;	
	edadprimeralumno=edad;
	}	
	if(notaalumno<peornota)
	{
	peornota=notaalumno;
	}

	 promedionotas=acumulador/contador;
	 
	acumulador=acumulador+notaalumno;
	respuesta=prompt ("si, para seguir");

	console.log("contador:" +contador);
	console.log("acumulador:"+acumulador);
}

}//FIN DE LA FUNCIÓN