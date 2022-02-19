function afterUpdate() {
  window.onload = function colorSelected() {
    const colorBlack = document.querySelector('main section div div');
    colorBlack.classList.add('selected');
  };
}

afterUpdate();

function palleteClick(event) {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  event.target.classList.add('selected');
}

const pallete = document.querySelectorAll('.color');
for (let i = 0; i < pallete.length; i += 1) {
  pallete[i].addEventListener('click', palleteClick);
}

const pixelBoard = document.getElementById('pixel-board');

function removeStaticBoard() {
  const allPixelBoard = pixelBoard.childNodes.length;
  for (let line = allPixelBoard; line > 0; line -= 1) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function generatePixels(pixels) {
  removeStaticBoard();
  for (let column = 0; column < pixels; column += 1) {
    const newDiv = document.createElement('div');
    newDiv.classList.add = 'line-board';
    for (let line = 0; line < pixels; line += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newPixel.style.backgroundColor = 'white';
      newDiv.appendChild(newPixel);
    }
    pixelBoard.appendChild(newDiv);
  }
}
/* Função GeneratePixels() -> Tava dando alguns erros,
   então me inspirei no código de Thiago William.
   link: https://github.com/tryber/sd-019-a-project-pixels-art/tree/thiago-william-project-pixels-art */

const numberInput = document.getElementById('board-size');

function inputTest() {
  if (numberInput.value < 5) {
    generatePixels(5);
  } else if (numberInput.value > 50) {
    generatePixels(50);
  } else {
    generatePixels(numberInput.value);
  }
}

function definePixelsSize(event) {
  const theEvent = event.target;
  if (numberInput.value < 1) {
    alert('Board inválido!');
  } else if (theEvent.id === 'generate-board') {
    inputTest();
  }
}

document.addEventListener('click', definePixelsSize);

function generateColor(opacity = 1) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
} // fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

const colorDataStorage = [];

function dataStorage() {
  for (let colors = 1; colors <= 3; colors += 1) {
    const colorsArray = [generateColor()];
    colorDataStorage.push(colorsArray);
  }
}

dataStorage();

function applyGeneratedColor() {
  const colorPalette = document.getElementsByClassName('color');
  for (let colorIndex = 1; colorIndex < colorPalette.length; colorIndex += 1) {
    colorPalette[colorIndex].style.backgroundColor = colorDataStorage[colorIndex - 1];
  }

  document.getElementById('black').style.backgroundColor = 'black';
}

applyGeneratedColor();

function pintPixels(event) {
  const theEvent = event.target;
  const selectedColor = document.querySelector('.selected');
  if (theEvent.className === 'pixel') {
    theEvent.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

document.addEventListener('click', pintPixels);

function clearBoard(event) {
  if (event.target.id === 'clear-board') {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel = 0; pixel < pixels.length; pixel += 1) {
      pixels[pixel].style.backgroundColor = 'white';
    }
  }
}

document.addEventListener('click', clearBoard);
