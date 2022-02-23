/* aca use el ejemplo del profe modificando para ver como funcionaba*/

/*Elegir GTA ,si sos mayor de 17 te da el link, sino te ofrece Sonic*/ 


let  juego = prompt("¿Que desea jugar hoy?")
const  link = "Descargar juego" 

while(juego != ""){
   switch (juego.toUpperCase()) {
        case "GTA":
            const edad = prompt("Cuantos años tiene?")
            if(edad > 17){
              alert(link)
              juego = ""
            }else{
            const  Sonic = prompt("No quiere jugar Sonic?")
              if(Sonic.toUpperCase() != "SI"){
                alert("Lo sentimos, no hay juego")
                juego = ""
              }else{
                alert(link)
                juego = ""
              }
            }
            break
        case "SONIC":
            alert(link);
            juego = ""
          break
        default:
           alert("No se encuentra en la biblioteca de juegos")
           juego = prompt("Que desea jugar hoy?")
          break
   }
  
   
}