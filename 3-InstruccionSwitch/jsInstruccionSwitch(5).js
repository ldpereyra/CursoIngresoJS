function mostrar()
{

//alert (laHora);
	
var hora;
{   var hora=document.getElementById('hora').value;
    hora=parseInt (hora);
    
    switch (hora) {
        case "24":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5:":
        alert ("es de madrugada");
        if (hora<05 || 24){
            alert ("a dormir"); 
        }
        break;

        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
        alert ("es de mañana"); 
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
        alert ("es de tarde");
        default:
        alert ("es de noche");
            break;            
    }


}



}//FIN DE LA FUNCIÓN