// USO DE AND Y OR

let vigente = true;

let cuidadoNinios = true;

let cuidador = true;

if((cuidadoNinios || cuidador) && vigente){
    console.log("Se paga subsidio de cuidados.");
}else {
    console.log("No es posible pagar el subsidio de cuidados");
}