// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function limpiarElemento(elemento) {
    document.getElementById(elemento).value = '';
}

function agregarElementoLista(elemento, texto) {
    var ul = document.getElementById(elemento);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(texto));
    //li.setAttribute("id", "element4"); // added line
    ul.appendChild(li);
    // alert(li.id);
  }

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
     console.log(nombreDeAmigo);
     
    if (nombreDeAmigo == "" || nombreDeAmigo == null) {
        alert(`Porfavor ingresa un nombre válido`);
        limpiarElemento('amigo');

    } else {
        //El usuario ingreso la informacion correcta.
     console.log(listaAmigos);
     listaAmigos.push(nombreDeAmigo);

     agregarElementoLista('listaAmigos',`${nombreDeAmigo}`);

     limpiarElemento('amigo');

       
    }
    return;
}