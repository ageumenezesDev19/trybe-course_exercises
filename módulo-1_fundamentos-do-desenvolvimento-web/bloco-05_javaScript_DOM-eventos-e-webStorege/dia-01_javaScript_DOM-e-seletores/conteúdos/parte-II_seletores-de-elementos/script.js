const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";

const titulo = document.getElementById("page-title");
    titulo.innerText = "One of the best Science movies: Tron";
    titulo.style.color = "blue";
    titulo.style.fontFamily = "Arial";


const paragraph2 = document.getElementById("second-paragraph");
    paragraph2.style.color = "aqua";
    paragraph2.style.fontSize = "20px";
    paragraph2.innerHTML = "The story is related to a new digital frontier where humans could inhabit, but there was a problem that changes everything...";
    paragraph2.style.width = "30%";

const paragraphs = document.getElementsByClassName("paragraphs");
    paragraphs[0].style.fontStyle = "italic";
    paragraphs[0].style.backgroundColor = "darkslateblue";
    paragraphs[0].style.width = "29%";
    paragraphs[0].style.padding = "1%"
    paragraphs[0].style.borderRadius = "10px";

const subtitle = document.getElementsByTagName("h4");
    subtitle[0].style.color = "orange";