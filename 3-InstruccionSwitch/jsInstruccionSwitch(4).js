function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
     alert ("si tiene 31 Dias")
    case "Febrero":
     alert ("si tiene 28 Dias");
     break;
    default:
     alert ("si tiene 30 Dias")
    
}
	
	



}//FIN DE LA FUNCIÓN