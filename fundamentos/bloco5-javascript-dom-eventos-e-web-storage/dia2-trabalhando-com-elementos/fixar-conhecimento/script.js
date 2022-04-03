let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let paiElemento = elementoOndeVoceEsta.parentNode; // section#pai
paiElemento.style.color = "blue";
console.log(paiElemento);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "Olaaaa";
console.log(primeiroFilhoDoFilho);

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let irmaoAnterior = elementoOndeVoceEsta.previousElementSibling;
console.log(irmaoAnterior);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let textAtencao = elementoOndeVoceEsta.nextSibling;
console.log(textAtencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// Agora acesse o terceiroFilho a partir de pai .
terceiroFilho = paiElemento.lastElementChild.previousElementSibling;
console.log(terceiroFilho);

// parte2 
// Crie um irmão para elementoOndeVoceEsta .

let irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.innerText = "teste"

elementoOndeVoceEsta.appendChild(irmaoOndeVoceEsta);
console.log(irmaoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta .
let filhoElementoOndeVoceEsta = document.createElement('section');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
console.log(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho .
let filhoElementoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhoElementoFilhoDoFilho);
console.log(primeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
console.log(filhoElementoFilhoDoFilho.parentNode.parentNode.nextElementSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

paiElemento.removeChild(primeiroFilho);

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);

paiElemento.removeChild(terceiroFilho);

let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
paiElemento.removeChild(quartoEUltimoFilho);