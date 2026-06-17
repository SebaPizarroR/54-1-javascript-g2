let producto = "Televisor Samsung 50 pulgadas con Google TV";
let palabraBuscada = "tv";

//NORMALIZAMOS LOS DATOS DE LAS VARIABLES A MINÚSCULAS
producto = producto.toLowerCase();
palabraBuscada = palabraBuscada.toLowerCase();

let resultado = producto.includes(palabraBuscada); //TRUE O FALSE

if(resultado){
    console.log("Se encontró un producto que coincide.");
}else {
    console.log("No existen coincidencias.")
}