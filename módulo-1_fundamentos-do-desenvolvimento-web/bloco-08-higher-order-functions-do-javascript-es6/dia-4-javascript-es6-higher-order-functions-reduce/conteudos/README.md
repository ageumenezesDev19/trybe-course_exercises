## Português 🇧🇷

# Array.reduce

### O reduce é diferente das outras HOFs : ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador , comumente referido como acc . E o que ele faz? Ele serve para acumular dentro de si os resultados das funções.

### O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr , que é chamado de current . Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante.
---
## English 🇺🇸

# array.reduce

### The reduce is different from the other HOFs : it has an extra parameter for the function it receives as a parameter. This parameter is called the accumulator, commonly referred to as acc. And what does he do? It serves to accumulate within itself the results of functions.

### The initial value of acc will be the first position of the array. On the first iteration it performs the function with the first value of the array which is in acc with the second position which is in its second parameter curr , which is called current . The second time, acc will contain the return from the first iteration, the third time the return from the first and second, and so on.