var paragrafo = document.querySelector('p');

paragrafo.addEventListener('click',atualizarNome);

function atualizarNome() {
    var nome = prompt('Insira um novo nome');
    paragrafo.textContent = 'Jogador 1: ' + nome;
}
