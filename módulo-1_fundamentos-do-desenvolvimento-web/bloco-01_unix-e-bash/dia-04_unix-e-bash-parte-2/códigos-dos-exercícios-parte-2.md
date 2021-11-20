# Parte I - Comandos de Input e Output

#### Navegue até a pasta unix_tests;

- cd unix_tests

#### Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

- cat skills2.txt
  Internet
  Unix
  Bash
- Ctrl + D

#### Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

- cat >> skills2.txt
  Html
  CSS
  JavaScript
  Node.js
  Shall
- Ctrl + D
- cat skills2.txt| Sort

#### Conte quantas linhas tem o arquivo skills2.txt.

- wc -l skills2.txt

#### Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

- cat skills2.txt | head -3 | sort > top_skills.txt

#### Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

- cat > phrases2.txt
 This davice conteins atoms;
 And Softwares;   
 And energy bro.

#### Conte o número de linhas que contêm as letras br.

- grep 'br' phrases2.txt | wc -l

#### Conte o número de linhas que não contêm as letras br.

- grep -v 'br' phrases2.txt | wc -l 

#### Adicione dois nomes de países ao final do arquivo phrases2.txt.

- cat >> phrases2.txt
  Brasil
  United States Of Amarica

#### Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

- cat phrases2.txt countries.txt > bunch_of_things.txt

#### Ordene o arquivo bunch_of_things.txt.

- sort bunch_of_things.txt > organizador.txt
- cat organizador.txt > bunch_of_things.txt
- rm organizador.txt



# Parte II - Permissões

#### Navegue até a pasta unix_tests ;

- cd unix_texts/

#### Rode o comando ls -l e veja quais as permissões dos arquivos;

- ls -l

#### Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;

- chmod og+w  bunch_of_things.txt
- ls -l
##### Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt


#### Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;

- chmod a-w bunch_of_things.txt
##### Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

#### Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .

- chmod 644 bunch_of_things.txt
##### Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt



# Parte III - Processos & Jobs

#### Liste todos os processos;

- ps

#### Agora use o comando sleep 30 & ;

- sleep 30 &

#### Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução;

- kill 18998

#### Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

- sleep 30
- Ctrl + Z
- bg %sleep

#### Crie um processo em background que rode o comando sleep por 300 segundos.

- sleep 300 &

#### Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. 
##### Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

- sleep 200
- sleep 100

#### Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
##### Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

- jobs
- fg %sleep\ 300
- ctrl + Z

#### Retome a execução do processo sleep 100 em background com o comando bg .

- bg %sleep\ 100

#### Termine a execução de todos os processos sleep.

kill 19325 19179 19175


# (Bônus) - Parte IV - O despertar do terminal

##### E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊

##### Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

##### No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

- fortune > fortune.txt 

##### Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;

- fortune | wc-l

##### Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;


