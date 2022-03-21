## Português 🇧🇷

# Lidando com erros em operações assíncronas

### No último exercício, usamos em conjunto `callbacks` e assincronicidade, que nesse caso correspondem a:
- operação assíncrona : retorno de `user` depois de um certo tempo, que varia;
- callbacks : as funções `userFullName` e `userNationality`, que são chamadas depois que o usuário é retornado.

### Nesse caso, a operação assíncrona sempre finaliza com sucesso, e existe uma callback que atua sobre o resultado desse sucesso. Mas isso não reflete por completo todas as operações assíncronas.
<br>

### Suponhamos que estejamos pegando dados de usuário via requisição em um outro servidor. Podemos garantir que essa requisição vai ocorrer sempre com sucesso? E se houver uma falha de conexão? E se o servidor não estiver funcionando no momento da requisição? Esses casos são exemplos de fatores externos, sobre os quais não se tem controle algum e que precisam ser tratados.
<br>

### Ou seja, da mesma forma que se tem uma `callback` para quando a operação assíncrona tem sucesso, também precisaria ter uma callback para quando a operação assíncrona termina com erro.
