// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Lista de anigos
let amigos = [];

/** Actualiza Tabla de amigos y los muestra en una tabla */
function actualizarTabla() {
    let tabla = document.getElementById('tablaAmigos');
    let tbody = tabla.querySelector('tbody');
    tbody.innerHTML = '';

    amigos.forEach((nombre, index) => {
        let fila = `<tr>

            <td>${index + 1}</td>
            <td>${nombre}</td>
            <td>  </td>
            <td><button  class="btn btn-danger" onclick="eliminarAmigo(${index})">x</button></td>
        </tr>`;
        tbody.innerHTML += fila;
    });
}


/** Agrega un amigo y los ingresa a ka tabka */
function agregarAmigo() {

    console.log('agregarAmigo()');
    let input = document.getElementById('amigo');
    let amigo = input.value;

    if (amigo === "") {

        alert('Debes ingresar un valor');

    } else {

        if (!(amigos.includes(amigo))) {
            amigos.push(amigo);
            input.value = '';
            console.log(amigos.length);
            actualizarTabla();
        } else {
            alert('Valor Repetido');
        }
    }
}
/** Sorte 1 amigo de la lista */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No existen amigos para sortear, ingrese sus amigos, por favor.');
    } else {
        // console.log(amigos.length);
        let valor = getRandomInt(amigos.length);
        let selAmigo= amigos[valor];
        console.log('AMIGO SELECCIONADO ES :' +selAmigo)
        amigos.splice(valor, 1);
        alert('Ha Ganado '+selAmigo+' ,Felicidades');
        actualizarTabla();
        // alert('Haremos el sorteo');
    }
}

/** Vuelve la lista a 0 elementos */
function reiniciarLista() {
    amigos = [];
    actualizarTabla();
}

/** Quita un amigo de la lista */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarTabla();
}
/** Genera un random pasando como parametro e valor Maximo */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

