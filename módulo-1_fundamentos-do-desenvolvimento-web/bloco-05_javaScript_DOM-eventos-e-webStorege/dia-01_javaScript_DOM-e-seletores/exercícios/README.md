## Português 🇧🇷 

# Funções de manipulação do DOM

## É hora de aplicar meus conhecimentos em manipular os elementos do ```HTML```! Segui as seguintes instruções:

1. A seguir, você verá um trecho de código ```HTML e CSS```.

2. Crie um arquivo ```HTML``` dentro do diretório ```exercises/javascript-dom-eventos-e-web-storage_1``` e copie o código a seguir:

###### ```html```
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html>
```

3. Leia as instruções que estão dentro de um comentário na tag ```<script>```.

4. Não se esqueça de fazer um commit a cada exercício!
___

## English 🇺🇸

# DOM manipulation functions

## It's time to apply my knowledge of manipulating ```HTML``` elements! I followed the following instructions:

1. Next, you'll see a snippet of ```HTML and CSS``` code.

2. Create a ```HTML``` file inside the ```exercises/javascript-dom-events-e-web-storage_1``` directory and copy the following code:

###### ```html```
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 5.1</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header>
      <h1 class="title">Exercise 5.1 - JavaScript </h1>
    </header>
    <main class="main-content">
      <section class="center-content">
        <p>Standard text of our website</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Here you will modify the existing elements using only the functions:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Create a function that changes the text in the <p> tag to a description of how you see yourself in 2 years. (Don't spend time thinking about the text, but doing the exercise)
 Create a function that changes the color of the yellow square to the green of the Trybe (rgb(76,164,109)).
 Create a function that changes the color of the red square to white.
 Create a function that corrects the text of the <h1> tag.
 Create a function that changes all text in the <p> tag to uppercase.
 Create a function that displays the contents of all <p> tags in the console.
        */
    </script>
  </body>
</html>
```

3. Read the instructions inside a comment in the ```<script>``` tag.

4. Don't forget to commit each exercise!