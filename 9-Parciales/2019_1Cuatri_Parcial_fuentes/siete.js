// Bienvenidos. 
//Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
//a) El promedio de las notas totales. 
//b) La nota más baja y el sexo de esa persona. 
//c) La cantidad de varones que su nota haya sido mayor o igual a 6.

function mostrar()

{
    var contador=0;
    var nota;
    var sexo;
    var respuesta;
    var acumuladornotas=0;
    var notamasbaja=1;
    var sexonotabaja;
    var contadorvarones=0;


    while (contador<5){
        contador++;
     do {
         nota=prompt ("");
         nota=parseInt(nota);  
     }while(isNaN(nota)||nota <0 ||nota >10);

     do{
         sexo=prompt("");
         while (sexo !="f" && sexo!="m");{ 
     }
   //punto a

  acumuladornotas+=nota

//a
}

//b 
if(contador==1){
    notamasbaja=nota;
  
}else{
    if (nota<notamasbaja){
        notamasbaja=nota;
        sexonotabaja=sexo; //guardo datos de notamasbaja sexo
    }
}
//c
if (nota =>6 && sexo=="m" ){  
contadorvarones++;
}


promedio= acumulador/alumnos;