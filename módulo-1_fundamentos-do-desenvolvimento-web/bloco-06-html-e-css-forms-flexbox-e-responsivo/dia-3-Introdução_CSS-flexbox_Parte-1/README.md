## Português 🇧🇷 

# <strong>Introdução - CSS Flexbox</strong>

### Hoje eu aprendi sobre <strong>CSS Flexbox</strong>.

### Desenvolver páginas web responsivas é uma tarefa muito importante, pois as pessoas acessam a Internet através de vários dispositivos com telas de diferentes tamanhos.

### Uma das abordagens para criar páginas responsivas é dividir a página em segmentos lógicos, usando cálculos baseados em porcentagem e, em seguida, ajustando os elementos para caberem nesse espaço definido.
<br>

### Infelizmente, a prática não é tão simples quanto descrito acima. Isso acontece porque os elementos não se assentam por padrão, próximos um do outro, como gostaríamos - pelo menos não os que têm a propriedade ```display``` configurada para ser ```block```. Um outro problema comum é, depois de tudo configurado, a adição de margens e definição da propriedade float voltar a desconfigurar toda a estrutura inicialmente proposta.
<br>

### Como descrito acima, criar páginas responsivas utilizando float e posicionamento é um trabalho complicado.
<br>

### Para tornar esse trabalho mais fácil, eu irei aprender a utilizar o ```CSS Flexbox```, que é um módulo de layout que torna fácil o desenvolvimento de estruturas responsivas.
<br>

## Para isso, o conteúdo foi dividido em duas partes:

1. Primeiro eu aprenderei sobre as propriedades ```flex-direction```, ```flex-wrap```, ```flex-flow```, ```reverse```, ```justify-content``` , ```align-items``` e ```align-content```. Todas essas propriedades serão aplicadas em containers.

- CSS Flexbox - parte I

1. Segundo, aprenderei sobre as propriedades ```align-self```, ```order```, ```flex-grow```, ```flex-shrink``` e ```flex-basis```. Também vou ver como trabalhar com ```margins``` no ```Flexbox```. Essas propriedades serão aplicadas em items.

- CSS Flexbox - parte II
---

# Parte 1

## O que aprendi aqui?

### Aprendi sobre CSS Flexbox Layout (Flexible Box). Flexbox é um módulo que visa fornecer uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre os itens em um container, mesmo quando seu tamanho é desconhecido.
<br>

### Um container pode ser qualquer elemento HTML que contenha outros elementos, como, por exemplo, uma ```<div```> ou ```<section>```. Esse elemento pai é chamado de container, e os elementos filhos serão os itens.
<br>

### A ideia principal por trás do "layout flexível" é dar ao container a habilidade de alterar o tamanho (width e height) e a ordem dos itens para melhor ocupar o espaço disponível. Essa habilidade nos permite acomodar uma página em todos os tipos de dispositivos e tamanhos de tela.
---

## English 🇺🇸

# <strong>Introduction - CSS Flexbox</strong>

### Today I learned about <strong>CSS Flexbox</strong>.

### Developing responsive web pages is a very important task as people access the Internet through various devices with screens of different sizes.

### One approach to creating responsive pages is to divide the page into logical segments, using percentage-based calculations, and then adjusting the elements to fit that defined space.
<br>

### Unfortunately, the practice is not as simple as described above. This is because the elements don't by default sit next to each other as we'd like - at least not the ones that have the ```display``` property set to be ```block```. Another common problem is, after everything is configured, the addition of margins and definition of the float property again deconfigure the entire structure initially proposed.
<br>

### As described above, creating responsive pages using float and positioning is a tricky job.
<br>

### To make this job easier, I'm going to learn how to use ```CSS Flexbox```, which is a layout module that makes developing responsive frameworks easy.
<br>

## For this, the content was divided into two parts:

1. First I'll learn about the properties ```flex-direction```, ```flex-wrap```, ```flex-flow```, ```reverse```, ```justify -content``` , ```align-items``` and ```align-content```. All these properties will be applied in containers.

- CSS Flexbox - part I

1. Second, I'll learn about the ```align-self```, ```order```, ```flex-grow```, ```flex-shrink```, and ```flex properties -basis```. I'll also see how to work with ```margins``` in ```Flexbox```. These properties will be applied to items.

- CSS Flexbox - part II
---

# Part 1

## What have I learned here?

### I learned about CSS Flexbox Layout (Flexible Box). Flexbox is a module that aims to provide a more efficient way to organize, align and distribute space between items in a container, even when their size is unknown.
<br>

### A container can be any HTML element that contains other elements, such as a ```<div```> or ```<section>```. This parent element is called a container, and the child elements will be the items.
<br>

### The main idea behind the "flexible layout" is to give the container the ability to change the size (width and height) and order of items to better occupy the available space. This ability allows us to accommodate a page on all types of devices and screen sizes.