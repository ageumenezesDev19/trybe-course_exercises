## Português 🇧🇷 
# Agora a prática

## Aprofunde meu conhecimento

### Antes de começar, criei um arquivo HTML e copie o código abaixo:
<br>

###### ```HTML```
```Html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      section {
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
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

### O objetivo desses exercícios é colocar em prática o que eu acabei de aprender sobre DOM. Por isso, devo fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags ```<script>``` e ```</script>```. Então segui as devidas instruções:

## Vamos aos exercícios:


1. Adicione a tag ```h1``` com o texto ```Exercício 5.2 - JavaScript DOM``` como filho da tag ```body```;

2. Adicione a tag ```main``` com a classe ```main-content``` como filho da tag ```body```;

3. Adicione a tag ```section``` com a classe ```center-content``` como filho da tag ```main``` criada no passo 2;

4. Adicione a tag ```p``` como filho do ```section``` criado no passo 3 e coloque algum texto;

5. Adicione a tag ```section``` com a classe ```left-content``` como filho da tag ```main``` criada no passo 2;

6. Adicione a tag ```section``` com a classe ```right-content``` como filho da tag ```main``` criada no passo 2;
s
7. Adicione uma imagem com ```src``` configurado para o valor ```https://picsum.photos/200``` e classe ```small-image```. Esse elemento deve ser filho do ```section``` criado no passo 5;

8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, ```um```, ```dois```, ```três```, ... como valores da lista. Essa lista deve ser filha do ```section``` criado no passo 6;

9. Adicione 3 tags ```h3```, todas sendo filhas do ```main``` criado no passo 2.
<br>
<br>

## Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1. Adicione a classe ```title``` na tag ```h1``` criada;

2. Adicione a classe ```description``` nas 3 tags ```h3``` criadas;

3. Remova a ```section``` criado no passo 5 (aquele que possui a classe ```left-content```). Utilize a função ```.removeChild()```;

4. Centralize a ```section``` criado no passo 6 (aquele que possui a classe ```right-content```). Dica: para centralizar, basta configurar o ```margin-right: auto``` da ```section```;

5. Troque a cor de fundo do elemento pai da ```section``` criada no passo 3 (aquela que possui a classe ```center-content```) para a cor verde;

6. Remova os dois últimos elementos ( ```nove``` e ```dez``` ) da lista criada no passo 8.

___

## English 🇺🇸

# Now the practice

## Deepen my knowledge

### Before starting, I created an HTML file and copied the code below:
<br>

###### ```HTML```
```Html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 5.2</title>
    <style>
      section {
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
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // PUT YOUR CODE HERE
    </script>
  </body>
</html>
```

### The purpose of these exercises is to put into practice what I've just learned about DOM. Therefore, I must do the exercises using only JavaScript code, which must be inserted between the tags ```<script>``` and ```</script>```. Then I followed the instructions:

## Let's get to the exercises:


1. Add the ```h1``` tag with the text ```Exercise 5.2 - JavaScript DOM``` as a child of the ```body``` tag;

2. Add the ```main``` tag with the ```main-content``` class as a child of the ```body``` tag;

3. Add the ```section``` tag with the ```center-content``` class as a child of the ```main``` tag created in step 2;

4. Add the ```p``` tag as a child of the ```section``` created in step 3 and place some text;

5. Add the ```section``` tag with the ```left-content``` class as a child of the ```main``` tag created in step 2;

6. Add the ```section``` tag with the ```right-content``` class as a child of the ```main``` tag created in step 2;
s
7. Add an image with ```src``` set to the value ```https://picsum.photos/200``` and class ```small-image```. This element must be a child of the ```section``` created in step 5;

8. Add an unordered list with the values ​​from 1 to 10 in words, that is, ```one```, ```two```, ```three```, ... as values ​​of the list. This list must be a child of the ```section``` created in step 6;

9. Add 3 ```h3``` tags, all children of the ```main``` created in step 2.
<br>
<br>

## Now that you've created a lot, let's make some changes and removals:

1. Add the ```title``` class to the created ```h1``` tag;

2. Add the ```description``` class to the 3 created ```h3``` tags;

3. Remove the ```section``` created in step 5 (the one with the ```left-content``` class). Use the ```.removeChild()``` function;

4. Center the ```section``` created in step 6 (the one with the ```right-content``` class). Tip: to center, just set the ```margin-right: auto``` of the ```section```;

5. Change the background color of the parent element of the ```section``` created in step 3 (the one with the ```center-content``` class) to green;

6. Remove the last two elements ( ```nine``` and ```ten``` ) from the list created in step 8.