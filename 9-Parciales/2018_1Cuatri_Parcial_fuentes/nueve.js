
/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el 
usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/
function mostrar()
{  //tomar datos
    var respuesta;
    var marca;
    var peso;
    var temperatura;
    //maximo minimo
    var temperaturamin;//ok
    var temperaturamax;//ok
    var temperaturapar;//ok
    var contador=0;
    var primeravez=true;
    var pesomax;//ok no empieza con cero nunca!
    var pesomin;//ok
    var marcamaxima;//ok puede ser marca mas pesada
    var productobajocero=0; //ok
    var acumuladorpeso=0; //ok
    var promediopeso;
    var cantidadproductos=0;//ok

    //#1pedir marca / #2peso /#3 temperatura ORDEN CORRECTO
    do {
        do {
            peso=prompt("INGRESE UN PESO ENTRE 1 Y 100");
            peso=parseInt(peso);           
        }while(isNaN(peso) || peso<1 || peso >100);//ok

        do {
            marca=prompt("INGRESE MARCA PARA CONTINUAR");
            
        }while (!isNaN(marca)); //ok 

        do{
            temperatura=prompt("INGRESE UNA TEMPERATURA ENTRE -30 Y 30");
            temperatura=parseInt(temperatura);
        }while(isNaN(temperatura)|| temperatura <-30 || temperatura >30 ); //ok

              respuesta=confirm("desea continuar?");
        }while(respuesta);
            //temperatura par

            if (temperatura %2 ==0){
            temperaturapar++;

           //menor a cero
            } if (temperatura<0){
                productobajocero++

                //#1 primero maximo y minimo

            } if (primeravez){
            primeravez=false
            pesomin=peso;
            pesomax=peso;
            marcamaxima=marca;

            }else
            {   // operador peso max y peso minimo
            if (peso>pesomax){
                pesomax=peso;
                marcamaxima=marca;
            
                    }else if (peso<pesomin){
                    pesomin<peso;             
                    }

                        cantidadproductos++
                        acumuladorpeso +=peso;
    

    }          //promedio prestar atencion!
            if (cantidadproductos>0){
            promediopeso=acumuladorpeso/cantidadproductos;
        }else{
            promediopeso="no ingreso ningun producto";
        }

    document.write("cantidad de numeros"+temperaturapar+"<br>");
    document.write("La marca del producto más pesado"+marcamaxima+"<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados"+productobajocero+"<br>");
    document.write ("El El peso máximo y el mínimo es:" + promediopeso+"<br>");
}