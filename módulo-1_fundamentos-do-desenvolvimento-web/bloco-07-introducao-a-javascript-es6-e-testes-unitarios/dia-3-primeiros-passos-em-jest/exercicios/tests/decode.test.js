const decode = require('../src/decode');

describe('Exercício 4.1:', () => {
    it('Teste se encode é uma função', () => {
        expect(typeof decode === 'function').toBeTruthy();
    });
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
    });
    it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
        expect(decode('6, 7, 8, 9, 0')).toMatch('6, 7, 8, 9, 0');
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('1, 2, 3, 4, 5').length === '1, 2, 3, 4, 5'.length).toBeTruthy();
    });
});
