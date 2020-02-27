/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    var respusta;
    var numero;
    var letra;
    var pares;
    var impares;
    var cantidadceros;
    var acumularpositivos;
    var acumularnegativos;

    do {
        numero= prompt("");
        numero=parseInt(numero);
       }while(isNaN(numero)&& numero>-100 && numero<100)

        do{
            letra=prompt("");   
        }while(!isNaN(letra));   
      
        respuesta=confirm("deseacontinuar?"); 
    }while(respuesta);

    //a 
    if (numero % 2 ==0){
        pares++;
    //b
    }else {
        impares++;
    //c
    }if (numero==0){
        ceros++
    //d    
    }if (numerospositivos >0){
        acumularpositivos=numero;
    //e   
    }if (numerosnegativos){
        acumularnegativos=numero;
    }if 
