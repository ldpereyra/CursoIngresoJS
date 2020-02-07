/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    // valores

    var numerounoingresado;
    var numerodosingresado;
    var numerounoparseado;
    var numerodosparseado;
    var resultado;

//valore por id

numerounoingresado = document.getElementById ("numeroUno").value;
numerodosingresado = document.getElementById ("numeroDos").value;

// suma de datos

numerounoparseado=parseInt (numerounoingresado);
numerodosparseado=parseInt (numerodosingresado);

//operacion

resultado= numerounoparseado + numerodosparseado;

//mostar resultado
resultado= "El resultado es " + resultado 

alert(resultado);
	
}

function restar()
{
	// valores

    var numerounoingresado;
    var numerodosingresado;
    var numerounoparseado;
    var numerodosparseado;
    var resultado;

//valore por id

numerounoingresado = document.getElementById ("numeroUno").value;
numerodosingresado = document.getElementById ("numeroDos").value;

// suma de datos

numerounoparseado=parseInt (numerounoingresado);
numerodosparseado=parseInt (numerodosingresado);

//operacion

resultado= numerounoparseado - numerodosparseado;

//mostar resultado
resultado= "El resultado es " + resultado 

alert(resultado);
}

function multiplicar()
{ 
	// valores

    var numerounoingresado;
    var numerodosingresado;
    var numerounoparseado;
    var numerodosparseado;
    var resultado;

//valore por id

numerounoingresado = document.getElementById ("numeroUno").value;
numerodosingresado = document.getElementById ("numeroDos").value;

// suma de datos

numerounoparseado=parseInt (numerounoingresado);
numerodosparseado=parseInt (numerodosingresado);

//operacion

resultado= numerounoparseado * numerodosparseado;

//mostar resultado
resultado= "El resultado es " + resultado 

alert(resultado);
}

function dividir()
{
	// valores

    var numerounoingresado;
    var numerodosingresado;
    var numerounoparseado;
    var numerodosparseado;
    var resultado;

//valore por id

numerounoingresado = document.getElementById ("numeroUno").value;
numerodosingresado = document.getElementById ("numeroDos").value;

// suma de datos

numerounoparseado=parseInt (numerounoingresado);
numerodosparseado=parseInt (numerodosingresado);

//operacion

resultado= numerounoparseado / numerodosparseado;

//mostar resultado
resultado= "El resultado es " + resultado 

alert(resultado);
}

