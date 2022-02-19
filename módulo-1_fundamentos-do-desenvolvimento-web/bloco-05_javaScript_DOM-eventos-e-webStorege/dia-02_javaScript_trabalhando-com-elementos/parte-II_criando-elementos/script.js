const eleOndEstou = document.getElementById("elementoOndeVoceEsta");
eleOndEstou.parentNode.style.color = "green";
eleOndEstou.firstElementChild.innerHTML = "Adiciona um Texto.";
eleOndEstou.previousElementSibling;
eleOndEstou.nextSibling;
eleOndEstou.nextSibling.nextSibling;


const pai = document.getElementById("pai");
pai.firstElementChild;
pai.children[2];

const newSection = document.createElement("section");
pai.appendChild(newSection);

eleOndEstou.appendChild(newSection);

const newChild = document.getElementById('primeiroFilhoDoFilho');
newChild.appendChild(newSection).id = "ultimo-filho-dos-folhos";

const ultimo = document.getElementById("ultimo-filho-dos-folhos");
ultimo.parentElement.parentElement.nextElementSibling;

// let paiDoPai = document.querySelectorAll('main'); Terminarei de pois...
