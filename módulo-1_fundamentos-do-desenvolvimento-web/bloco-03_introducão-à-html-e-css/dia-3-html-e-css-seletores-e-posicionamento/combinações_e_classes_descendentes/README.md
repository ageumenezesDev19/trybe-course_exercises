## Português 🇧🇷

### Até este ponto, eu já aprendi sobre o modelo de caixas, sobre como posicionar elementos na minha página e como o agrupamento de seletores e as pseudoclasses funcionam. Agora, dou um passo mais a fundo na dinâmica do CSS, aprendendo sobre combinações de classes em elementos HTML e também a como utilizar a descendência para aplicar estilizações à elementos específicos.

# Para fixar

#### Para fixar ainda mais o conteúdo, copiei e colei o seguinte código:

###### index.html
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```
#### Então criei um arquivo chamado style.css e resolvi os seguintes exercícios:

1. Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).

2. Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.

3. Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.

4. Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.

5. (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"


##### Dica 1: Utilize o seletor :hover para controlar o passar do mouse.

##### Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela, Trybe (verde).

## English 🇺🇸

### Up to this point, I've learned about the box model, how to place elements on my page, and how selector grouping and pseudo-classes work. Now, I take a step deeper into CSS dynamics, learning about class combinations in HTML elements and also how to use descent to apply styles to specific elements.

# To fix

#### To further fix the content, I copied and pasted the following code:

###### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinations and Descending Classes</em></h1>
    <br />
    <h3>Top 5 memorable phrases:</h3>
    <ol>
      <li><em>With great powers come great responsibilities.</em> - Uncle Ben (Spider Man)</li>
      <li><em>Houston, we have a problem.</em> - Jack Swigert</li>
      <li><em>It always seems impossible until it's done.</em> - Nelson Mandela</li>
      <li><em>Part of the journey is the end.</em> - Tony Stark (Iron Man)</li>
      <li><em>Sometimes the best we can do is start over.</em> - Steve Rogers (Captain America)</li>
    </ol>
    <h3>The greatest programming languages:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Best allies of a developer person:</h3>
    <ul>
      <li>
        <a href="https://www.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```
#### So I created a file called style.css and solved the following exercises:

1. Make all Ordered List items have a yellow background color. If the item numbering is PAR, make the font color green. If the number is considered ODD, use the text-transform property to capitalize the text. (Hint: combining classes can be useful here).

2. Make all Header tags (h1, h2...) have a red font color, and if any of them are italicized, increase their size to 40px and add a solid black 1px border.

3. Make all li's be 20px font size, and for all italicized text within a li, use the font-weight property to make it bold.

4. In the listing of programming languages, make the first 3 in the list have a blue font color and, if any have "java*" in the text, use a pink background color.

5. (Bonus) For each link in the developer person's list of allies, hover over each one and make the text bold and change to the "site theme" font color


##### Tip 1: Use the :hover selector to control the mouse hover.

##### Tip 2: Default Color Suggestion. StackOverflow (orange), W3Schools (green), MDN (black), DevDocs (yellow, Trybe (green).