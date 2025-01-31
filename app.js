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
    
    atualizarListaDeAmigos();
    
    //Aqui adiciona o conteúdo do array a uma lista em HTML
    //entradaDeAmigos = document.getElementById('listaAmigos');
    //entradaDeAmigos.innerHTML = listaDeAmigos.join("<br>");
}

/*
Utilizei uma função anônima que recebe um objeto de evento como parâmetro.
Esse objeto contém informações sobre o evento que ocorreu, 
como qual tecla foi pressionada, qual botão foi clicado, etc. 
*/
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

/**
 * Função sortearAmigo
 * Math.random() gera um número entre 0 e 1, por exemplo 0.76.
 * Multiplicamos pelo tamanho do array(listaDeAmigos.length),
 * transformando em um número entre 0 e o último índice.
 * Math.floor() arredonda para baixo para garantir que seja um índice válido.
 */
function sortearAmigo(){
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    console.log("Amigo escolhido", sorteado);
}

//Limpar o campo após a entrada
function atualizarCampo(){
    entradaDeAmigos = document.querySelector("input");
    entradaDeAmigos.value = "";
}
