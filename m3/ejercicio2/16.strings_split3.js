let run = "22.222.222-2";

let datos = run.split("-");

let numeroRun = datos[0].replaceAll(".", "");
let dv = datos[1];

console.log("Número run:", numeroRun);
console.log("Digito Verificador:", dv);