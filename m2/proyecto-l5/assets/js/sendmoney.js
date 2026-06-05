//SIMULAMOS LA CARGA DE UN BALANCE INICIAL
let balance = 100_000;

//CAPTURAMOS EL ELEMENTO DEL DOM EN CUAL QUEREMOS MOSTRAR EL BALANCE
const balanceEl = document.getElementById("balance");

//LE ASIGNAMOS EL VALOR SIMULADO DE LA BASE DE DATOS
balanceEl.textContent = balance.toLocaleString("es-CL");

//SIMULAMOS LOS REGISTROS DE CONTACTO DEL CLIENTE

const contactos = [
    {
        id: 1,
        nombre: "John Doe",
        cbu: "123456789",
        alias: "john.doe",
        banco: "ABC Bank",
    },
    {
        id:2,
        nombre: "Jane Smith",
        cbu: "987654321",
        alias: "jane.smith",
        banco: "XYZ Bank",
    },
];


//FUNCIÓN QUE SE VA A ENCARGAR DE CARGAR LOS CONTACTOS EN LA UL DEL DOM
function cargarContactos(listaContactos){

    let acumuladorLi = "";

    for (const contacto of contactos) {

        //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
        let { id, nombre, cbu, alias, banco } = contacto;

        //AQUÍ VAMOS ACUMULANDO TANTOS LI COMO CONTACTOS TENGAMOS
        acumuladorLi += `
        <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="contacto" value="${cbu}" id="contacto${id}" required>

            <label class="form-check-label" for="contacto${id}">${nombre}, CBU: 
            ${cbu}, Alias: ${alias}, Banco: ${banco}</label>
        </li>
        `;
    };

    //AGREGAMOS LOS ELEMENTOS DE LISTA A LA UL DEL DOM
    document.getElementById("listaContactos").innerHTML = acumuladorLi;
};


//FUNCIÓN INICIAL / PRINCIAL

function main(){
    cargarContactos(contactos);
};

main();
