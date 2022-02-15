const body = document.querySelector('body');
const paragraph = document.querySelector('p');


const inputBg = document.querySelector('#colorBg');
const addBgColor = document.querySelector('#addBgColor');
// Eventos
addBgColor.addEventListener('click', function () {
    
    localStorage.setItem('bgColor', inputBg.value);
    inputBg.value = "";

})

const inputText = document.querySelector("#colorText");
const addTextColor = document.querySelector('#addTextColor');

addTextColor.addEventListener('click', function () {
    
    localStorage.setItem('textColor', inputText.value);
    inputText.value = "";
})

const inputFontSizer = document.querySelector('#fontSize');
const addFontSize = document.querySelector('#addFontSize');
addFontSize.addEventListener('click', function () {

    localStorage.setItem('fontSize', inputFontSizer.value);
    inputFontSizer.value = "";
})



window.onload = function () {
    // quando a pag for carregada, adicione as caracteristicas salvas(cor fundo, cor letra, etc) do localStorage, para seus respectivos elementos
    
    let corFundo = localStorage.getItem('bgColor');
    body.style.backgroundColor = corFundo;

    let corText = localStorage.getItem('textColor')
    paragraph.style.color = corText;

    let tamanhoFonte = localStorage.getItem('fontSize');
    paragraph.style.fontSize = `${tamanhoFonte}px`;

    let espacoLinha = localStorage.getItem('spaceLine');
    paragraph.style.lineHeight = espacoLinha;
}
