/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

