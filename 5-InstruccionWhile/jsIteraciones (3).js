function mostrar()
{
//variables

var clave = prompt("ingrese el número clave.");
var contador= 0;
// Condicion

while (clave.toLocaleLowerCase () != "utn750"){
    contador++;

    clave= prompt ("ERROR DESTRUCION TOTAL");
    //si me equivoco tres veves se corta el while
    if(contador==3){
        break;
    }
}
//si el contador es igual o mayor a 3 error
if (contador==3){
    alert("intentos maximos egresados")
    }else {
        alert("Bienvenido");
    }


}//FIN DE LA FUNCIÓN
