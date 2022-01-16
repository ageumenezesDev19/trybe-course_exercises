//console.log(document.getElementById("teste").innerHTML);
//Conteúdo do elemento;

//console.log(document.getElementById("teste").innerText);
//Texto dentro do conteúdo do elemento;

document.getElementById("teste").innerText = "Conteúdo Modificado pelo JavaScript!"

const paragraph = document.getElementsByClassName("paragraph");
    for (let i = 0; i < paragraph.length; i += 1) {
        paragraph[i].innerHTML = "Textos modificados por um for.";
    }

console.log(document.getElementsByTagName("section"));