let codigoProducto = "000-0001";

// 000 -> HOGAR
// 111 -> COCINA


if(codigoProducto.startsWith("000")){
    console.log("Categoría HOGAR");
}else if(codigoProducto.startsWith("111")){
    console.log("Categoría COCINA");
}else{
    console.log("Categoría DESCONOCIDA.");
}