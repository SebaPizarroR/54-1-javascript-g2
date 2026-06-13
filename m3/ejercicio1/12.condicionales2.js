//ASIGNACIÓN DE BECAS SEGÚN PUNTAJE RSH

//RSH >= 80: 0% DE BECA
//RSH >= 60: 30% DE BECA
//RSH >= 50: 50% DE BECA
//RSH < 50: 100% DE BECA

let rsh = 55;

if(rsh >= 80){
    console.log("0% de beca.");
}else if(rsh >=60){
    console.log("30% de beca.");
}else if(rsh >=50){
    console.log("50% de beca.");
}else {
    console.log("100% de beca.");
}

