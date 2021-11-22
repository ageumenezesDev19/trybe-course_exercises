## Português 🇧🇷 

# Parte I - Criação de arquivos e diretórios:

## Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .

### Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

- mkdir unix_tests
- cd unix_tests

### Crie um arquivo de texto com o nome trybe.txt .

- touch trybe.txt

### Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .

- cp trybe.txt trybe_backup.txt  

### Renomeie o arquivo trybe.txt .

- mv trybe.txt trybe2.txt

### Dentro de unix_tests , crie um novo diretório chamado backup .

- mkdir backup   

### Mova o arquivo trybe_backup.txt para o diretório backup .

- mv trybe_backup.txt backup/

### Dentro de unix_tests , crie um novo diretório chamado backup2 .

- mkdir backup2

### Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .

- mv backup/trybe_backup.txt backup2/

### Apague a pasta backup .

- rmdir backup   

### Renomeie a pasta backup2 para backup .

mv backup2 backup

### Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

- pwd
- ls *

### Apague o diretório backup .

- rm -rf backup

### Limpe o terminal.

- clear

### Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
### Copiar
### Internet
### Unix
### Bash
### HTML
### CSS
### JavaScript
### React
### SQL

### Mostre na tela as 5 primeiras skills do arquivo skills.txt .

- head -5 skills.txt

### Mostre na tela as 4 últimas skills do arquivo skills.txt .

- tail -4 skills.txt

### Apague todos os arquivos que terminem em .txt .

- skills.txt trybe2.txt

## English 🇺🇸

Part I - Creating files and directories:

## Tip : For creating empty files you can use the command touch filename.extension .

### Using the terminal, apply the create directories command you learned, create a directory called unix_tests and navigate to it.

- mkdir unix_tests
- unix_tests cd

### Create a text file named trybe.txt .

- touch trybe.txt

### Create a copy of the trybe.txt file named trybe_backup.txt .

- cp trybe.txt trybe_backup.txt

### Rename the trybe.txt file.

- mv trybe.txt trybe2.txt

### Within unix_tests , create a new directory called backup .

- mkdir backup

### Move the trybe_backup.txt file to the backup directory.

- mv trybe_backup.txt backup/

### Within unix_tests , create a new directory called backup2 .

- mkdir backup2

### Move the trybe_backup.txt file from the backup folder to the backup2 folder.

- mv backup/trybe_backup.txt backup2/

### Delete the backup folder.

- rmdir backup

### Rename the backup2 folder to backup .

mv backup2 backup

### See the full path of the current directory and list all files within it.

- pwd
- ls *

### Delete the backup directory.

-rm -rf backup

### Clean the terminal.

- clear

### For exercises 14 and 15, manually create, in the graphical part of your operating system (using the mouse), a text file with the contents below, called skills.txt :
### Copy
### Internet
### Unix
### Bash
### HTML
### CSS
### JavaScript
### React
### SQL

### Display the first 5 skills from the skills.txt file on the screen.

- head -5 skills.txt

### Display the last 4 skills from the skills.txt file on the screen.

- tail -4 skills.txt

### Delete all files ending in .txt .

- skills.txt trybe2.txt