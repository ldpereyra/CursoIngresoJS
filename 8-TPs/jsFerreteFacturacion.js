/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1
var precio2
var precio3
var preciopromedio
var preciofinal
var resultadosuma

function Sumar () 
{
    precio1= document.getElementById("PrecioUno").value;
    precio2= document.getElementById("PrecioDos").value;
    precio3= document.getElementById("PrecioTres").value;
    //parse

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    //operacion

    resultadosuma= precio1+precio2+precio3;

    resultadosuma= "El resultado es " + resultadosuma
    alert(resultadosuma); 
	
}
function Promedio () 
{
    precio1= document.getElementById("PrecioUno").value;
    precio2= document.getElementById("PrecioDos").value;
    precio3= document.getElementById("PrecioTres").value;
    //parse
    
    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    //operacion

    preciopromedio= (parseFloat(precio1) + parseFloat(precio2)+parseFloat(precio3))/3;

    preciopromedio= "El resultado es " + preciopromedio
    alert(preciopromedio); 
	
}
function PrecioFinal () 
{
	precio1= document.getElementById("PrecioUno").value;
    precio2= document.getElementById("PrecioDos").value;
    precio3= document.getElementById("PrecioTres").value;
    //parse

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    //operacion

    resultadosuma= precio1+precio2+precio3;
    preciofinal=resultadosuma*0.21;

    resultadosuma= "El resultado es " + preciofinal
    alert(preciofinal); 
	
}