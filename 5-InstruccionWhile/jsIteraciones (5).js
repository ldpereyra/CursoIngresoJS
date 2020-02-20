function mostrar()
{
    var contador=0;
    var sexo = prompt("ingrese f ó m .");

    while (sexo.toLocaleLowerCase () !="f" && sexo.toLocaleLowerCase()!="m"||contador==4)
    {   contador++;
        sexo = prompt("error ingrese f ó m ."); 
        //CONTADOR PARA 4 INTENTOS
        if (contador==4){
            //PARA EL WHILE
            break;}
            }
             if (contador==4){
            alert("ERROR");
        }else {
    document.getElementById('Sexo').value=sexo;
    }
    
}//FIN DE LA FUNCIÓN