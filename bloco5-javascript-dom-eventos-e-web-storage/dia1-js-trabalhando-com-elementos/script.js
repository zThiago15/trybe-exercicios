// Acesse o elemento elementoOndeVoceEsta 

let element = document.getElementById('elementoOndeVoceEsta');
console.log(element);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let parentElement = document.getElementById('elementoOndeVoceEsta').parentNode;
console.log(parentElement);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
firstChildOfChild += "texto adicional";
console.log(firstChildOfChild);

// Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById('pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

//Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

// parte 2
// Crie um irmão para elementoOndeVoceEsta .
let irmao = document.createElement('section');
irmao.innerText = "olaa";

let pai = document.getElementById('pai');
pai.appendChild(irmao);

// Crie um filho para elementoOndeVoceEsta .
let ondeVoceEstaFilho = document.createElement('section');
ondeVoceEstaFilho.setAttribute('id', 'teste')
ondeVoceEstaFilho.innerText = "test";

let elementOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementOndeVoceEsta.appendChild(ondeVoceEstaFilho);

// Crie um filho para primeiroFilhoDoFilho      
