// Agora a prática:

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada
pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo
da pessoa funcionária e a partir dele gerar automaticamente um email
no formato nome_da_pessoa@trybe.com. */

const newEmployees = (nomeCompleto1, nomeCompleto2, nomeCompleto3) => {
    const employees = {
      id1: `${nomeCompleto1}`, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: `${nomeCompleto2}`, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: `${nomeCompleto3}`, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const employeesEmail = (TheEmployees, action) => {
    let email = [];
    const names = Object.values(TheEmployees);
    for (let i = 0; i < names.length; i += 1) {
        email.push(`${names[i].replace(/ /g, "_")}@trybe.com`.toLowerCase());
    };

    action(email);
};

employeesEmail(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'), console.log);
// .toLowerCase(), Font: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// .replace(/ /g, ""), Font: https://www.delftstack.com/pt/howto/javascript/javascript-remove-spaces/#utilize-replace-para-substituir-apenas-o-espa%25C3%25A7o-branco

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se
o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
(Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const sorteio = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

const checkSort = (number, sort, action) => {
    if (number === sort) {
        action("Parabéns você ganhou");
    } else {
        action("Tente novamente");
    }
};

checkSort(4, sorteio(1, 5), console.log);

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas
(Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação
final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas
certas. */

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
// e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (r, s) => {
    let grade = 0;
    if (r.length === s.length) {
        for (let i = 0; i < r.length; i += 1) {
            if (r[i] === s[i]) {
                grade += 1;
            } else if (r[i] !== s[i]) {
                grade -= 0.5;
            }
        }
    }

    return grade;
};

const studentPoints = (r, s, check) => {
    const result = check(r, s);
    console.log(result);
}

studentPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);
