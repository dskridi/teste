function criarParagrafo() {
    var paragrafo = document.createElement('p');
    paragrafo.textContent = 'Você clicou no botão!';
    document.body.appendChild(paragrafo);
}
var botoes = document.querySelectorAll('button');
for(var i = 0; i<botoes.length; i++){
    botoes[i].addEventListener('click', criarParagrafo);
}