/* 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase,
que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado
com os falso-positivos em testes assíncronos. */

const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

describe('1 - Verifica a chamada da callback de uma função uppercase:', () => {
    it ('Verifica se a função retorna o valor esperado de forma assíncrona:', (done) => {
        uppercase('test', (callback) => {
            try {
                expect(callback).toMatch('TEST');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
    it ('Verifica se a função não retorna o valor esperado de forma assíncrona:', (done) => {
        uppercase('test', (callback) => {
            try {
                expect(callback).not.toMatch('test');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
    it ('Verifica se a função retorna uma string:', (done) => {
        uppercase('test', (callback) => {
            try {
                expect(typeof callback === 'string').toBeTruthy();
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});


