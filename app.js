let listaNomes = [];

function adicionarAmigo(){
    nome = document.querySelector('input');
    if(validarEntrada(nome.value)){
        listaNomes.push(nome.value);
    }
    limparCampo();
    exibirLista(listaNomes);
}


function sortearAmigo(){
    if(validarSorteio(listaNomes)){
        let indiceAmigoSorteado = Math.floor(Math.random()*listaNomes.length);
        let amigoSorteado = listaNomes[indiceAmigoSorteado];
        exibirResultado(amigoSorteado);
    }
    
}

function exibirLista(lista = []){
    let campo = document.querySelector('#listaAmigos');
    campo.innerHTML = '';
    lista.forEach(teste);
}

function exibirResultado(resultado){
    let campo = document.querySelector('#resultado');
    campo.innerHTML = resultado;
}

function validarEntrada(valor){
    if(valor == ''){
        retornarErro('Informe um nome')
        return 0;
    }else if(listaNomes.includes(valor)){
        retornarErro(`O nome ${valor} já foi informado`)
        return 0;
    }else{
        retornarErro('')
        return 1;
    }
}

function validarSorteio(lista = []){
    if(lista.length < 2){
        retornarErro('Informe pelo menos 2 nomes');
        return false;
    }else{
        return true;
    }
}

function retornarErro(mensagem = ''){
    let mensagemErro = document.querySelector('p');
    mensagemErro.innerHTML = mensagem;
}

function teste(valor){
    let campo = document.querySelector('#listaAmigos');
    campo.innerHTML += ' ' + valor + '<br>';
}

function limparCampo(){
    nome.value = '';
}

