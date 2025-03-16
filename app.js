listaNomes = [];

console.log("teste");

function adicionarAmigo(){
    nome = document.querySelector('input');
    listaNomes.push(nome.value);

    nome.innerHTML = '';
}


function sortearAmigo(){
    let indiceAmigoSorteado = Math.floor(Math.random()*listaNomes.length);
    console.log(listaNomes[indiceAmigoSorteado]);
    
}