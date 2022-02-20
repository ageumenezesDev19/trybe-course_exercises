## Português 🇧🇷

# Qual seletor usar?

### O getElementById(id) funciona de maneira diferente do querySelector('#id') , mas o resultado é o mesmo. O primeiro tem uma performance melhor, mas o segundo é mais flexível.
<br>

### Enquanto os getElementsByClassName('ClassName') e getElementsByTagName('TagName') retornam uma HTMLCollection, os querySelectorAll('.ClassName') e querySelectorAll('TagName') retornam uma NodeList.

### Um outro ponto é a forma da resposta, que pode ser diferente entre os seletores ( HTMLCollection e NodeList ). A forma de buscar os dados armazenados nessas estruturas, em alguns casos, pode mudar, então tenha cuidado na hora de fazer funções que utilizem o resultado dos seletores, isso pode salvar das dores de cabeça sobre o porquê de uma função aparentemente correta não funcionar.

## Resumindo, o que determinará o uso de cada um vai depender do contexto do projeto a ser feito.

---

## English 🇺🇸

# Which selector to use?

### getElementById(id) works differently than querySelector('#id') , but the result is the same. The first performs better, but the second is more flexible.
<br>

### While getElementsByClassName('ClassName') and getElementsByTagName('TagName') return an HTMLCollection, querySelectorAll('.ClassName') and querySelectorAll('TagName') return a NodeList.

### Another point is the form of the response, which can be different between the selectors ( HTMLCollection and NodeList ). The way of fetching the data stored in these structures, in some cases, can change, so be careful when making functions that use the result of selectors, this can save you from headaches about why an apparently correct function does not work.

## In short, what will determine the use of each one will depend on the context of the project to be done.
