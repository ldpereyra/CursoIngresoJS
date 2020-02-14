function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    alert ("Que comiences bien el año");
       break;
    case "Marzo":
    alert ("A clases");
       break;
    case "Julio":
    alert ("Vacaciones");
       break;
    case "Diciembre":
    alert ("Feliz navidad")
    default: 
    alert ("No hay un evento mensual programado")
      break;   
}



}//FIN DE LA FUNCIÓN