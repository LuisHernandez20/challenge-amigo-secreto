// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var listaAmigos = [];

// Esta función permite la limpieza de cualquier elemento selecionandolo por el id(elemento), pudiendo ser un <p> o un <input>, o cualquier elemento que pueda manejar información
function limpiarElemento(elemento) {
    document.getElementById(elemento).value = '';
    document.getElementById(elemento).innerHTML = "";
}

// Función que permite agregar los nosmbres ingresados a una lista(esta puede cualquier lista que pudiera existir en el html ya que los parametros son variables que pueden ser diferentes, dependiendo de ocmo se invoque)
function agregarElementoLista(elemento, texto) {
    var ul = document.getElementById(elemento);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(texto));
    ul.appendChild(li);
  }

  // Validación de texto ingresado, asi como el agregado del nombre a un array para despues utilizarse de la forma que mas convenga
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
    // Función que nos permite obtener un numero aleatorio mediante la cantidad de nombre ingresado por el usuario
    let indiceAleatorio =  Math.floor(Math.random()*listaAmigos.length);
    console.log(indiceAleatorio);
    amigoSecreto = listaAmigos[indiceAleatorio];
    limpiarElemento('listaAmigos');
    agregarElementoLista('resultado',`El amigo secreto es: ${amigoSecreto}`);
    alert(
        "El sorteo se ha realizado. Para reiniciar, recarga la pagina'."
      );
      document.getElementById("botonSorteo").disabled = true;
}