## Português 🇧🇷

# Parte II - Mão na massa

## Segui as instruções abaixo:

### Copie os códigos HTML e CSS abaixo, salve-os no mesmo diretório com os nomes index.html e style.css , respectivamente;

###### ```HTML```
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>Media Queries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Raleway:wght@300;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1 id="mySpotrybefy">✨ Trybe Tricks ✨</h1>
      <p>Vamos fazer algumas divs desaparecerem hoje?</p>
    </header>
    <main>
      <section class="cards">
        <div class="card">
          <h3>Primeira div</h3>
          <p>E será a primeira participante de hoje!</p>
          <p>Essa div só poderá aparecer se nossa tela possuir <strong>largura mínima</strong> de 500px.</p>
        </div>
        <div class="card">
          <h3>Segunda div</h3>
          <p>Ué, mas ela deveria aparecer aqui?</p>
          <p>Pois é! Mas essa div deverá aparecer apenas se a largura <strong>estiver entre</strong> 600px e 1000px.</p>
        </div>
        <div class="card">
          <h3>Terceira div</h3>
          <p>Vamos para nosso Grand Finale!</p>
          <p>Para nosso grande truque, precisaremos que essa div <strong>não apareça</strong> entre 650px e 950px.</p>
        </div>
        <div class="dont-show">
          <p>Quem gostou, pediu bis!</p>
          <p>Sem alterar a classe '.trick', como fazer para o texto dela aparecer quando a tela estiver com menos de 500px de largura?</p>
        </div>
      </section>
    </main>    
    <footer>
      <p>Trybe Tricks, criando pessoas desenvolvedoras que fazem mágica com as mãos!</p>
    </footer>
    <p class="trick">Floreio! Como você conseguiu fazer aparecer mais essa caixa de texto?</p>
  </body>
</html>
```
###### ```CSS```
```css
body {
  align-items: center;
  color: #525252;
  display: flex;
  flex-flow: column wrap;
  font-family: Raleway, sans-serif;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

h1 {
  font-family: Cinzel, serif;
  font-size: 48px;
}

h3 {
  font-size: 25px;
  margin: 0;
}

p {
  font-size: 18px;
  font-weight: 300;
}

p.trick {
  color: white;
  font-size: 14px;
}

p strong {
  font-weight: 700;
}

.card p:nth-last-child(1) {
  align-self: flex-end;
  font-size: 14px;
}

.cards {
  display: flex;
  flex-flow: row wrap;
}

.card {
  border-radius: 5px;
  color: white;
  display: none;
  flex-flow: row wrap;
  height: 200px;
  margin: 20px;
  padding: 20px;
  width: 200px;
}

.card:nth-of-type(1) {
  background-color: #0fa36b;
}

.card:nth-of-type(2) {
  background-color: #0255c2;
}

.card:nth-of-type(3) {
  background-color: #41197f;
}
```

## Para os seguintes exercícios você não precisará alterar o arquivo HTML, apenas o CSS. 😉
1. A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px.
   
2. A segunda div só poderá aparecer apenas se a largura estiver entre 600px e 1000px.

3. A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px.

4. Sem alterar a classe trick , faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura.

___
## English 🇺🇸

# Part II - Hands-on

## Follow the instructions below:

### Copy the HTML and CSS codes below, save them in the same directory with the names index.html and style.css , respectively;

###### ```HTML```
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>Media Queries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Raleway:wght@300;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1 id="mySpotrybefy">✨ Trybe Tricks ✨</h1>
      <p>Shall we make some divs disappear today?</p>
    </header>
    <main>
      <section class="cards">
        <div class="card">
          <h3>First div</h3>
          <p>And you will be the first participant today!</p>
          <p>This div can only appear if our screen has a <strong>minimum width</strong> of 500px.</p>
        </div>
        <div class="card">
          <h3>Second div</h3>
          <p>Huh, but should she appear here?</p>
          <p>Yes! But this div should only appear if the width <strong>is between</strong> 600px and 1000px.</p>
        </div>
        <div class="card">
          <h3>Third div</h3>
          <p>Let's go to our Grand Finale!</p>
          <p>For our big trick, we'll need this div to <strong>not appear</strong> between 650px and 950px.</p>
        </div>
        <div class="dont-show">
          <p>Who liked it, asked for an encore!</p>
          <p>Without changing the '.trick' class, how can I make her text appear when the screen is less than 500px wide?</p>
        </div>
      </section>
    </main>
    <footer>
      <p>Trybe Tricks, creating developer people who do magic with their hands!</p>
    </footer>
    <p class="trick">Flore! How did you manage to make this text box appear more?</p>
  </body>
</html>
```
###### ```CSS```
```css
body {
  align-items: center;
  color: #525252;
  display: flex;
  flex-flow: column wrap;
  font-family: Raleway, sans-serif;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

h1 {
  font-family: Chisel, serif;
  font-size: 48px;
}

h3 {
  font-size: 25px;
  margin: 0;
}

P {
  font-size: 18px;
  font-weight: 300;
}

p.trick {
  color: white;
  font-size: 14px;
}

p strong {
  font-weight: 700;
}

.card p:nth-last-child(1) {
  align-self: flex-end;
  font-size: 14px;
}

.cards {
  display: flex;
  flex-flow: row wrap;
}

.card {
  border-radius: 5px;
  color: white;
  display: none;
  flex-flow: row wrap;
  height: 200px;
  margin: 20px;
  padding: 20px;
  width: 200px;
}

.card:nth-of-type(1) {
  background-color: #0fa36b;
}

.card:nth-of-type(2) {
  background-color: #0255c2;
}

.card:nth-of-type(3) {
  background-color: #41197f;
}
```

## For the following exercises you will not need to change the HTML file, just the CSS. 😉
1. The first div can only appear if our screen has a minimum width of 500px.
   
2. The second div can only appear if the width is between 600px and 1000px.

3. The third div should not appear if our screen has a width between 650px and 950px.

4. Without changing the trick class, make its text appear only when the screen is less than 500px wide.