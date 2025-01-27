// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaAmigos = [];

function limpiarElemento(elemento) {
    document.getElementById(elemento).value = '';
    document.getElementById(elemento).innerHTML = "";
    
    
}

function agregarElementoLista(elemento, texto) {
    var ul = document.getElementById(elemento);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(texto));
    ul.appendChild(li);
  }

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
     console.log(nombreDeAmigo);
     
    if (nombreDeAmigo == "" || nombreDeAmigo == null) {
        alert(`Porfavor ingresa un nombre válido`);
        limpiarElemento('amigo');

    } else {
        if (listaAmigos.includes(nombreDeAmigo)) {
            alert("El amigo ya existe en la lista, inserta uno diferente");
            limpiarElemento('amigo');
            
            return;
          }
          else{
        //El usuario ingreso la informacion correcta.
     console.log(listaAmigos);
     listaAmigos.push(nombreDeAmigo);

     agregarElementoLista('listaAmigos',`${nombreDeAmigo}`);

     limpiarElemento('amigo');
    } 
    }
    return;
}

function sortearAmigo() {
    let indiceAleatorio =  Math.floor(Math.random()*listaAmigos.length);
    console.log(indiceAleatorio);
    amigoSecreto = listaAmigos[indiceAleatorio];
    limpiarElemento('listaAmigos');
    agregarElementoLista('resultado',`El amigo secreto es: ${amigoSecreto}`);
   
}