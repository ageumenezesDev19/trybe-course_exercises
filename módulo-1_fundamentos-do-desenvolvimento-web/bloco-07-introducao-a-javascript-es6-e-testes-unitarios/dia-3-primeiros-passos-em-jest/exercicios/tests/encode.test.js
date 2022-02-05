const encode = require('../src/encode')

describe('Exercício 4:', () => {
    it('Teste se encode é uma função', () => {
        expect(typeof encode === 'function').toBeTruthy();
    });
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
    });
    it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
        expect(encode('b, c, d, f, g')).toMatch('b, c, d, f, g');
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('a, e, i, o, u').length === 'a, e, i, o, u'.length).toBeTruthy();
    });
});
