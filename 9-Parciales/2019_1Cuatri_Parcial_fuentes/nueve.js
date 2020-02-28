function mostrar()
{
    var respuesta;
    var peso;
    var marca;
    var temperatura;

    do {
        do {
            peso=prompt("ingrese un numero entre 1 y 10");
            peso=parseInt(peso);
        }while(isNaN(peso));     

        respuesta=confirm("desea continuar?");

    }while (respuesta);
}
