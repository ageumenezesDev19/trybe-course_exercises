const title = document.getElementById("header-container");
    title.style.backgroundColor = "rgb(0, 216, 144)";

const section1 = document.querySelectorAll(".emergency-tasks h3");
    for (let i = 0; i < section1.length; i += 1) {
        section1[i].style.backgroundColor = "blueviolet";
    }

const section2 = document.querySelectorAll(".no-emergency-tasks h3");
    for (let i = 0; i < section2.length; i += 1) {
        section2[i].style.backgroundColor = "black";
    }

const section1Back = document.getElementsByClassName("emergency-tasks");
    section1Back[0].style.backgroundColor = "rgb(255, 163, 133)";

const section2Back = document.getElementsByClassName("no-emergency-tasks");
    section2Back[0].style.backgroundColor = "rgb(255, 231, 92)";

const footer = document.getElementById("footer-container");
    footer.style.backgroundColor = "rgb(41, 68, 68)";
