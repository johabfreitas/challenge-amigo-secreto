//Array para inserir os amigos
let listaDeAmigos = [];

//Captura uma entrada, valida se não é nula e inseri a lista
function adicionarAmigo() {
    let entradaDeAmigos = document.querySelector('input').value;

    if (!entradaDeAmigos) {
      alert("Por favor, insira um nome!");
    } else {
      listaDeAmigos.push(entradaDeAmigos);
      atualizarCampo();
    }

    //Aqui adiciona o conteúdo do array a uma lista em HTML
    entradaDeAmigos = document.getElementById('listaAmigos');
    entradaDeAmigos.innerHTML = listaDeAmigos.join("<br>");

    //console.log(listaDeAmigos);
}

//Limpar o campo após a entrada
function atualizarCampo(){
    entradaDeAmigos = document.querySelector("input");
    entradaDeAmigos.value = "";
}
