// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Lista de anigos
let amigos= [];

/** Actualiza Tabla de amigos y los muestra en una tabla */
function actualizarTabla() {
    let tabla = document.getElementById('tablaAmigos');
    let tbody = tabla.querySelector('tbody');
    tbody.innerHTML = '';
    
    amigos.forEach((nombre, index) => {
        let fila = `<tr>

            <td>${index +1}</td>
            <td>${nombre}</td>
            <td>  </td>
            <td><button  class="btn btn-danger" onclick="eliminarAmigo(${index})">x</button></td>
        </tr>`;
        tbody.innerHTML += fila;
    });
}


/** Agrega un amigo y los ingresa a ka tabka */
function agregarAmigo(){

        console.log('agregarAmigo()');
        let input= document.getElementById('amigo');
        let amigo= input.value;

        if(amigo===""){

            alert('Debes ingresar un valor');
        
        }else{

           if(!(amigos.includes(amigo))){
            amigos.push(amigo);
            input.value='';
            console.log(amigos.length);
            actualizarTabla();
           }else{
            alert('Valor Repetido');
           }
        }
}

function sortearAmigo(){
    if(amigos.length===0){
        alert('No existen amigos para sortear, ingrese sus amigos, por favor.');
    }else{
        alert('Haremos el sorteo');
    }
}


function reiniciarLista() {
    amigos = [];
    actualizarTabla();
}



function reiniciarLista() {
    amigos = [];
    actualizarTabla();
}


function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarTabla();
}

