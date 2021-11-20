# Principais comandos aprendidos:

#### Como não dá para mostrar todos os prcessos que envolvem os exercícios relacionados ao git e o github, vou apenas mostrar os comandos que aprendí com uma breve descrição.

###Git:

- git init -> Inicia o git;
- git add -> adiciona um determinado arquivo para a parte de Staging;
- git commit -m "" -> adiciona um determinado arquivo ao repositório local e verciona ele;
- git branch -> mostra todas as branchs;
- git branch + texto -> cria uma nova branch;
- git checkout + nome de uma branch -> muda para uma outra branch;
- git status -> verifica o status dos nossos arquivos, pode ser usado tanto para obter informações
sobre o repositório local como também sobre o remto;
- git push -> envia todos os arquivos novos para um repositório remoto;
- git fetch -> baixa dados sobre o repositório remoto, se usarmos o git status depois dele, podemos ver se teve 
alguma alteração nos arquivos do remoto;
- git pull -> trás os novos arquivos do repositório remoto para o repositório local;
- git clone + link do repositório -> clona o repositório remoto inteiro gerando um repositório local novo
ou sobrescrevendo um;
- git commit -a -> faz o git add + git commit ao mesmo tempo de um vez;
- git push -u origin + nome da branch -> é o push que se dá pela primeira vez, depois
pode-se usar o git push normalmente.

### GitHub:

- Pull request -> É um processo de análise de código que acontece antes de salvar as alteracões enviadas para
o repositório remoto ou antes de fazer um merge de uma branch com outra;
- Merge -> é quando juntamos uma branch com outra, fazendo com que as informações sejam combinadas.
- Commit -> no github, é uma maneira de versionar um arquivo, os nossos códigos por exemplo, e acontece antes
de salvarmos novas informações ou de fazer um merge.