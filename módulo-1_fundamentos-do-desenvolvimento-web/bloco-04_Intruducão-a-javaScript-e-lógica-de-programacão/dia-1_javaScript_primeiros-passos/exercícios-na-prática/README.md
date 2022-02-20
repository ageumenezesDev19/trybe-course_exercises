## Português 🇧🇷 

# <strong>Agora a prática!</strong>

## Nos exercícios de hoje, eu fiz quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para conseguir executar meus códigos, foi me recomendado utilizar a extensão Code Runner, tem um conteúdo bem explicativo que fizeram sobre ela que fala sobre o uso do <a href="https://app.betrybe.com/course/real-life-engineer/vscode" target="_blank" rel="noopener noreferrer">VS Code</a>.

## Para fazer os programas, eu segui as orientações abaixo:

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

- Adição (a + b)
- Subtração (a - b)
- Multiplicação (a * b)
- Divisão (a / b)
- Módulo (a % b)

### *Dica: Neste <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math" target="_blank" rel="noopener noreferrer">link</a> você encontra mais detalhes sobre operadores matemáticos 😉

2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

- <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math" target="_blank" rel="noopener noreferrer">Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus</a>.
- Um ângulo será considerado inválido se não tiver um valor positivo.

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
- Exemplo: bishop (bispo) -> diagonals (diagonais)

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

- <strong>Bonus:</strong> use somente um if .

9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

- <strong>Bonus:</strong> use somente um if .

10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

    - valorCustoTotal = valorCusto + impostoSobreOCusto
    - lucro = valorVenda - valorCustoTotal (lucro de um produto)

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

    - <strong>INSS (Instituto Nacional do Seguro Social)</strong>

        - Salário bruto até R$ 1.556,94: alíquota de 8%
        - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

    - <strong>IR (Imposto de Renda)</strong>
        - Até R$ 1.903,98: isento de imposto de renda
        - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

### <strong>Exemplo:</strong> Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

- O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
- Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
- Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

    - R$ 2.670,00: salário com INSS já deduzido;
    - 7.5%: alíquota de imposto de renda;
    - R$ 142,80 parcela a se deduzir do imposto.

- Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
- O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

### Resultado: R$ 2.612,55.
#### <strong>Dica:</strong> que tal identificar as alíquotas com variáveis de nomes explicativos?

#

## English 🇺🇸

# <strong>Now practice!</strong>

## In today's exercises, I did fifteen little programs. All work with conditional logic ( if/else and switch/case ), arithmetic operators ( + , - , * , / , % ) and logical operators ( > , < , && , || ). In order to be able to run my codes, I was recommended to use the Code Runner extension, there is a very explanatory content that they did about it that talks about using the <a href="https://app.betrybe.com/course/real-life-engineer/vscode" target="_blank" rel="noopener noreferrer">VS Code</a>.

## To make the programs, I followed the guidelines below:

1. Make five programs, one for each basic arithmetic operation. Your program must have two constants, a and b , defined at the beginning with the values ​​that will be operated on. Make programs to:

- Addition (a + b)
- Subtraction (a - b)
- Multiplication (a * b)
- Division (a / b)
- Module (a % b)

### *Tip: In this <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math" target="_blank" rel="noopener noreferrer">link</a> you find more details about mathematical operators 😉

2. Write a program that returns the greater of two numbers. At the beginning of the program, define two constants with the values ​​that will be compared.

3. Write a program that returns the largest of three numbers. At the beginning of the program, define three constants with the values ​​to be compared.

4. Write a program that, given a value defined in a constant, returns "positive" if that value is positive, "negative" if it is negative, and "zero" otherwise.

5. Write a program that defines three constants with the values ​​of the three internal angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise. If any angle is invalid the program should return an error message.

- <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math" target="_blank" rel="noopener noreferrer">For the angles to be a valid triangle , the sum of the three must be 180 degrees</a>.
- An angle will be considered invalid if it does not have a positive value.

6. Write a program that takes the name of a chess piece and returns the moves it makes.

- As a challenge, make the program work if you receive the name of a piece in capital letters or in small letters, without increasing the amount of conditionals.
- As a tip, you can search for a function that makes a string with all lowercase letters (lower case) .
- If the passed part is invalid, the program must return an error message.
- Example: bishop (bishop) -> diagonals (diagonals)

7. Write a program that converts a percentage grade (from 0 to 100) into grades A to F. Follow these rules:

- Percentage >= 90 -> A
- Percentage >= 80 -> B
- Percentage >= 70 -> C
- Percentage >= 60 -> D
- Percentage >= 50 -> E
- Percentage < 50 -> F
- The program must return an error message and terminate if the passed grade is less than 0 or greater than 100.

8. Write a program that defines three numbers as constants and returns true if at least one of the three is even. otherwise it returns false .

- <strong>Bonus:</strong> just use an if .

9. Write a program that defines three numbers as constants and returns true if at least one of the three is odd. otherwise it returns false .

- <strong>Bonus:</strong> just use an if .

10. Write a program that starts with two values ​​in two different constants: the cost of a product and its sales value. From the values, calculate how much profit (sales value minus the cost of the product) the company will have when selling a thousand of these products.

- Note that the cost of the product is subject to a 20% tax.
- Your program should also issue an error message and terminate if any of your input values ​​are less than zero.
- The profit of a product is the result of subtracting the sale value from the cost of the product, with the 20% tax also being part of the cost value.

    -ValueCostTotal =ValueCost +taxOnCost
    - profit = valueSale - valueTotalCost (profit of a product)

11. A person who works with a formal contract in Brazil has the INSS and the IR deducted from their gross salary. Make a program that, given a gross salary, calculates the net to be received.

- The notation for a salary of R$1500.10, for example, should be 1500.10. For tax ranges, use the following references:

    - <strong>INSS (National Social Security Institute)</strong>

        - Gross salary up to R$ 1,556.94: rate of 8%
        - Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
        - Gross salary from BRL 2,594.93 to BRL 5,189.82: 11% rate
        - Gross salary above R$ 5,189.82: maximum rate of R$ 570.88

    - <strong>IR (Income Tax)</strong>
        - Up to R$1,903.98: exempt from income tax
        - From BRL 1,903.99 to 2,826.65: rate of 7.5% and installment of BRL 142.80 to be deducted from the tax
        - From BRL 2,826.66 to BRL 3,751.05: 15% rate and installment of BRL 354.80 to be deducted from the tax
        - From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from the tax
        - Above R$ 4,664.68: 27.5% rate and a portion of R$ 869.36 to be deducted from the tax.

### <strong>Example:</strong> A person has a gross salary of R$3,000. The calculation will be:

- The gross salary is between R$2,594.93 and R$5,189.82, so its rate for INSS is 11%. The INSS will be 11% of R$3,000, that is, R$330.00.
- To find the base salary, subtract the INSS rate from the gross salary: BRL 3,000.00 - BRL 330.00 = BRL 2,670.00.
- To get the amount of the IR, we have a salary (already deducting the INSS) between BRL 1,903.99 and 2,826.65, the rate then being 7.5%, with a portion of BRL 142.80 to be deducted from the tax . So we have:

    - R$ 2,670.00: salary with INSS already deducted;
    - 7.5%: income tax rate;
    - R$ 142.80 installment to be deducted from the tax.

- Making the calculation, we have: (7.5% of BRL 2,670.00) - BRL 142.80 = BRL 57.45
- The last calculation to get the net salary is BRL 2,670.00 - BRL 57.45 (base salary - IR value) = BRL 2,612.55.

### Result: BRL 2,612.55.
#### <strong>Hint:</strong> how about identifying the rates with explanatory name variables?