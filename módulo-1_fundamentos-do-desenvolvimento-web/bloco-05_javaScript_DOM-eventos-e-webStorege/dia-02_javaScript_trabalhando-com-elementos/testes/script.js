console.log(document.querySelector("h1").parentNode); // Retorna o header;
console.log(document.querySelector("h1").parentNode.parentNode); // Retorna o body;
console.log(document.querySelector("h1").parentNode.parentNode.parentNode); // Retorna o HTML.

let itens = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
];

/* const putItens = document.querySelector("#section-2");
const li = document.createElement("li");
putItens.appendChild(li); */

const putItens = document.querySelector("#section-2");
for (let i in itens) {
    let item = itens[i];
    let li = document.createElement("li");
    li.innerText = item;
    putItens.appendChild(li);
}
