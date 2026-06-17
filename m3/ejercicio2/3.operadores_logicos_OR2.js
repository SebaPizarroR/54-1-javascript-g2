let cesante = false;
let RSH = 60;

//PARA OBTENER LA BECA DEBE CUMPLIR UNA DE LAS SIGUIENTES CONDICIONES:
//- ESTAR CESANTE
//- RSH <= 60

if(cesante || RSH <= 60){
    console.log("beca obtenida");
}else{
    console.log("No cumple los requisitos para obtener la beca.");
}