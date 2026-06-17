/*
OPERADORES LÓGICOS
&& -> AND -> Y LÓGICO
|| -> OR -> O LÓGICO
!  -> NOT -> NEGACIÓN 

*/

let email = "CORREO@gmail.com";
let password = "123456";

let emailDB = "CorReo@gmail.com";
let passwordDB = "123456";


if(email.toLowerCase() == emailDB.toLowerCase() && password == passwordDB){
    console.log("Login correcto");
    //RESTO DE INSTRUCCIONES...
}else {
    console.log("Credenciales inválidas.");
}