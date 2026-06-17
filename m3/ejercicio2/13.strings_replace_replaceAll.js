let nombre = "Pedro Soto";

//.replace() CAMBIA LA PRIMERA COINCIDENCIA QUE ENCUENTRA
nombre = nombre.replace("Pedro", "Carlos");
nombre = nombre.replace("Soto", "Pereira");
console.log(nombre);


//.replaceAll() CAMBIA TODAS LAS COINCIDENCIAS

let etiqueta = "<h2>Hola mundo</h2>";

etiqueta = etiqueta.replaceAll("h2", "h3");

console.log(etiqueta);
