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
    //entradaDeAmigos = document.getElementById('listaAmigos');
    //entradaDeAmigos.innerHTML = listaDeAmigos.join("<br>");
    atualizarListaDeAmigos();

}

function meuBotao(){
    document.querySelector('input').addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            document.getElementById("botaoAdicionar").click();        
        }
    });

    document.getElementById("botaoAdicionar").addEventListener("click", function(event){
        console.log(event);
    });
}

function atualizarListaDeAmigos(){
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = "";

    listaDeAmigos.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        listaExibicao.appendChild(li);
    });

}

function sortearAmigos(){

}

//Limpar o campo após a entrada
function atualizarCampo(){
    entradaDeAmigos = document.querySelector("input");
    entradaDeAmigos.value = "";
}
