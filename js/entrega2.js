var parcial, parcial2, promedio;
parcial = parseFloat (prompt("Ingrese nota numerica del primer examen:"));
parcial2 = parseFloat (prompt("Y ahora,ingrese segunda calificacion obtenida en el otro parcial:"));
promedio = (parcial+parcial2)/2;

if(promedio >= 7){
    document.write ("Su promedio es de "+promedio+" . ESTA APROBADO, Nos vemos en el final en 3 semanas,suerte");
}else{
    document.write ("Su promedio es de "+promedio+" . ESTA DESAPROBADO, debera rendir un recuperatorio en 2 semanas,estudie mas duro.");
}