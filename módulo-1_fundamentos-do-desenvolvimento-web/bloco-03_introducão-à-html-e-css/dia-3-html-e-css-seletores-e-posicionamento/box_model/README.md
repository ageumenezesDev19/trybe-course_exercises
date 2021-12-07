## Português 🇧🇷

### Neste conteúdo me foi apresentado famoso box model ou "modelo de caixas" utilizado como base do CSS e estudar algumas propriedades bem interessantes dele. Daí eu reproduzi o que foi aprendido. 

#### Para isso, copiei os códigos abaixo e cole-os no meu VS Code, criando um arquivo index.html e um arquivo style.css.

###### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```
###### style.css
```css
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}
```

##### E então segui as instruções destacadas no comentário do códico.

## English 🇺🇸

### Today I was introduced to the famous box model or "box model" used as the basis of CSS and to study some very interesting properties of it. Then I reproduced what was learned.

#### For that, I copied the codes below and paste them into my VS Code, creating an index.html file and a style.css file.

###### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fixing Exercise: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="width-and-height box" style="background: #036b52">A</div>
  <div class="width-and-height padding box" style="background: #41197f;">B</div>
  <div class="width-and-height padding margin box" style="background: #444955">C</div>
  <div class="width-and-height padding margin border box" style="background: #3898EC">D</div>
</body>
</html>
```
###### style.css
```css
.box {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insert a 20px padding into the class below to apply it to items B, C and D */
.padding {

}

/* insert in the class below a margin of 30px to apply it to items C and D */
.margin {

}

/* insert in the class below a border with the value '5px solid black' to apply it to item D */
.border {
  
}
```

##### And then I followed the instructions highlighted in the code comment.