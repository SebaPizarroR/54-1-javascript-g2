let texto = "Introducción a JavaScript ddddddddddddddddd55555555";

//length -> retorna la cantidad de caracteres
let cantidad = texto.length;

let limiteCaracteres = 50;

console.log("Cantidad de caracteres; ", cantidad);

if(cantidad <= limiteCaracteres){
    console.log("Se ha publicado el post.");
}else {
    console.log("Se ha superado la cantidad máxima de caracteres permitidos: ", limiteCaracteres, "Caracteres.");
    let caracteresSobrantes = cantidad - limiteCaracteres;
    console.log("Te pasaste en :", caracteresSobrantes, "caracteres.");
}