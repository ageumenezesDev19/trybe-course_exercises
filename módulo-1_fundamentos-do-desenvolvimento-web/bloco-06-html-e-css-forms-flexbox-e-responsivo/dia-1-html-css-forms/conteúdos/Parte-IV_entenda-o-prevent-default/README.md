## Português 🇧🇷 

# Parte IV - Entender o prevent default

### Nesta parte do cinteúdo eu aprendí sobre o ```.preventDefault()```. Ele previne que o comportamento padrão de um evento seja executado.

### Então passei para o exercício de fixação:

#

## Visualize abaixo alguns exemplos de elementos e seus comportamentos:

```html
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
```
### Esse código gera um elemento clicável que redireciona a pessoa usuária para o site da Trybe. O atributo target="_blank" indica que o comportamento do elemento é abrir o link em outra aba do navegador.

```html
<input type="text" id="input-text"/>
```
### Esse código gera uma caixa de input de texto. O comportamento desse elemento é capturar o(s) caractere(s) digitado(s) pela pessoa usuária e exibi-lo(s) dentro da caixa de texto, alterando o atributo "value" do input de acordo com o que é digitado.

```html
<input type="checkbox" id="input-checkbox" />
```

### Esse código gera um caixinha de input do tipo checkbox. O comportamento desse elemento é escutar o clique da pessoa usuária e marcar ou desmarcar a caixinha.

#

## Para fixar:

- Crie um arquivo HTML ```index.html```

- Crie um arquivo Javascript ```script.js```

- Em seu arquivo HTML

    - Adicione o ```<script src="script.js"></script>``` no final do ```body``` do HTML
    - Copie os três elementos acima (```a```, ```input type="text"```, ```checkbox```) em sua página

- Em seu arquivo Javascript
    - Adicione os seletores abaixo no começo do arquivo

```javascript
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
```

1. Adicione um evento ```click``` no elemento ```a``` que possui o id ```href```. Na função do evento, implemente o método ```.preventDefault()``` para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

2. Adicione um evento ```click ```no elemento ```checkbox``` que possui o id ```input-checkbox```. Na função do evento, implemente o método ```.preventDefault()``` para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

3. Adicione um evento ```keypress``` no elemento ```input type="text"``` que possui o id ```input-text```. Na função do evento, implemente o método ```.preventDefault()``` de forma que somente o caractere ```a``` (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o ```event.key```)

Caso deseje entender melhor o comportamento do método ```.preventDefault()```, acesse <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target="_blank" rel="noopener noreferrer">a documentação do MDN</a> ou <a href="https://www.w3schools.com/jsref/event_preventdefault.asp" target="_blank" rel="noopener noreferrer">a página da w3schools</a>.

#

## English 🇺🇸

# Part IV - Understanding the prevent default

### In this part of the content I learned about ```.preventDefault()```. It prevents the default behavior of an event from running.

### So I moved on to the fixation exercise:

#

## See below some examples of elements and their behavior:

```html
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
```
### This code generates a clickable element that redirects the user to the Trybe website. The attribute target="_blank" indicates that the element's behavior is to open the link in another browser tab.

```html
<input type="text" id="input-text"/>
```
### This code generates a text input box. The behavior of this element is to capture the character(s) typed by the user and display them inside the text box, changing the "value" attribute of the input according to what is typed.

```html
<input type="checkbox" id="input-checkbox" />
```

### This code generates a checkbox type input box. The behavior of this element is to hear the user click and check or uncheck the box.

#

## To fix:

- Create an HTML file ```index.html```

- Create a ```script.js``` Javascript file

- In your HTML file

    - Add the ```<script src="script.js"></script>``` to the end of the HTML ```body```
    - Copy the above three elements (```a```, ```input type="text"```, ```checkbox```) into your page

- In your Javascript file
    - Add the selectors below at the beginning of the file

```javascript
// SELECTORS
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
```

1. Add a ```click``` event to the ```a``` element that has the id ```href```. In the event function, implement the ```.preventDefault()``` method to prevent the element's default behavior. That is, when clicking on the link, nothing should happen.

2. Add a ```click ``` event to the ```checkbox``` element that has the id ```input-checkbox```. In the event function, implement the ```.preventDefault()``` method to prevent the element's default behavior. In other words, when you click on the box, nothing should happen.

3. Add a ```keypress``` event to the ```input type="text"``` element that has the id ```input-text```. In the event function, implement the ```.preventDefault()``` method so that only the ```a``` character (lowercase 'a') can be typed into the box. (Hint: To capture the typed key, use ```event.key```)

If you want to better understand the behavior of the ```.preventDefault()``` method, go to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target ="_blank" rel="noopener noreferrer">the MDN documentation</a> or <a href="https://www.w3schools.com/jsref/event_preventdefault.asp" target="_blank" rel="noopener noreferrer">the w3schools page</a>.