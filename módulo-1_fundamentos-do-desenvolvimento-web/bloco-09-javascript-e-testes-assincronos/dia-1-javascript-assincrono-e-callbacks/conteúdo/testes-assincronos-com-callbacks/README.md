## Português 🇧🇷

# Testes Assíncronos com Callbacks

### Vi no exemplo anterior que nem sempre a operação assíncrona será executada com sucesso. Por esse motivo, é importante manter uma boa cobertura de testes a fim de prevenir possíveis erros. Para isso, irei utilizar o Jest.

## Importante:
### Ao realizar testes assíncronos com callbacks, é necessário ter cuidado com falso-positivo (quando o teste deveria falhar mas acaba passando). Isso acontece pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, a pessoa roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.
---
## English 🇺🇸

# Asynchronous Tests with Callbacks

### I saw in the previous example that the asynchronous operation will not always be executed successfully. For this reason, it is important to maintain good test coverage to prevent possible errors. For this, I will use Jest.

## Important:
### When performing asynchronous tests with callbacks, it is necessary to be careful with false positives (when the test should fail but ends up passing). This is because Jest doesn't know, by default, when to wait for an asynchronous function to finish executing. That is, the person runs the test, Jest analyzes the synchronous functions, does not wait for the asynchronous ones to finish and, given the end of the test, generates a positive result before an eventual problem in an asynchronous function accuses an error.
