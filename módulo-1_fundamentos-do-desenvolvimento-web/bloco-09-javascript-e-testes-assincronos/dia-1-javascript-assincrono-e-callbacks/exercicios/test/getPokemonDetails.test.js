const { getPokemonDetails } = require("../src/script");

/* 9 - A fim de evitar que futuros treinadores sejam prejudicados,
o Professor Carvalho pediu que você o ajude a escrever testes para
o sistema que distribui os pokémons. Crie um novo arquivo .test.js
ou .spec.js e copie o código abaixo. Complete os testes para a função
getPokemonDetails de acordo com as especificações.
*/

// Verifique se a importação do arquivo correto está sendo feita.;

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedErro = new Error('Não temos esse pokémon para você :(');

    const callback = (erro, result) => {
        expect(erro).toEqual(expectedErro);
        done();
    }

    getPokemonDetails('Mew', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectedString = 
    'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (erro, result) => {
        try {
          expect(result).toBe(expectedString);
          done();
        } catch (error) {
          done(err);
        }
    }

    getPokemonDetails('Charmander', callback);
  });
});
