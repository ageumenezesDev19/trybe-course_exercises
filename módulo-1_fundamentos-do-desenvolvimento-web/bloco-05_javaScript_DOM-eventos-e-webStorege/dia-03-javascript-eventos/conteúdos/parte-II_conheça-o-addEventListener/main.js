const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function addClassTech1Li () {
    secondLi.className = undefined;
    thirdLi.className = undefined;
    firstLi.className = "tech";
}

function addClassTech2Li () {
    firstLi.className = undefined;
    thirdLi.className = undefined;
    secondLi.className = "tech";
}

function addClassTech3Li () {
    firstLi.className = undefined;
    secondLi.className = undefined;
    thirdLi.className = "tech";
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener('click', addClassTech1Li);
secondLi.addEventListener('click', addClassTech2Li);
thirdLi.addEventListener('click', addClassTech3Li);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeTechText1 () {
    if (firstLi.className === "tech") {
        const newText = input.value;
        firstLi.innerText = newText;
    }
}

function changeTechText2 () {
    if (secondLi.className === "tech") {
        const newText = input.value;
        secondLi.innerText = newText;
    }
}

function changeTechText3 () {
    if (thirdLi.className === "tech") {
        const newText = input.value;
        thirdLi.innerText = newText;
    }
}

input.addEventListener('change', changeTechText1);
input.addEventListener('change', changeTechText2);
input.addEventListener('change', changeTechText3);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

function redirect () {
    window.location.href = "https://ageumenezesdev19.github.io";
}

myWebpage.addEventListener('dblclick', redirect); //window.location.href = ""; Font: https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809

// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor1 () {
    myWebpage.style.color = "yellow";
}

function changeColor2 () {
    myWebpage.style.color = "white";
}

myWebpage.addEventListener('mouseover', changeColor1);
myWebpage.addEventListener('mouseleave', changeColor2);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.