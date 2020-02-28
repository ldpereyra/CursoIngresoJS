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
    var pares=0;
    var impares=0;
    var cantidadceros=0;
    var acumularpositivos=0;
    var acumularnegativos=0;
    var numerospositivo=0;
    var maximo;
    var minimo;
    var primeravez=true;
    var maximoletra;
    var minimoletra;
   

    do {
        numero= prompt("");
        numero=parseInt(numero);
       }while(isNaN(numero)&& numero>-100 && numero<100)

        do{
            letra=prompt("");   
        }while(!isNaN(letra));   
      
        respuesta=confirm("deseacontinuar?"); 
    }while(respuesta);

    //a para calcular numeros pares
    if (numero % 2 ==0){
        pares++;
    //b
    }else if(numero==0){
        pares++;

    }else {
        impares++;
    }
        
    //d    
    if (numerospositivos >0){       
        numerospositivos++;
        acumularpositivos+=numerospositivos
    //e   
    }else if (numerosnegativos<0){
        acumularnegativos+= numero;
    } if (primeravez){
        primeravez=false;
        minimo=numero
        maximo=numero
       
    }  else {
        if (maximo>numero){
            maximo=numero
            maximoletra=letra

        }if (numero<minimo){
            minimo=numero;
            minimo=letra
        }
    }
        if(contadorpositivos !=0){
            promedio= acumularpositivos/contadordepositivos;
        }