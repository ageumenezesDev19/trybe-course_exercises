// Setup e Teardown:
// Porque precisamos destes ciclos?

// Para entender isso, vejamos os códigos a seguir:
// cicles.test.js

let cities = [];

const addCity = (city) => {
    cities.push(city);
};

const removeCity = (city) => {
    cities = cities.filter((eachCity) => eachCity !== city);
};

/* Aqui temos a declaração de uma variável cities , que é uma lista de cidades;
Há duas funções, addCity que adiciona cidades ao array e removeCity que...
Pasmem! Remove cidades desse array.

Agora você vai realizar dois testes, para saber se essas funções funcionam
exatamente como deseja. */

test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
});

test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
});

/* ---------------------------------------------------------------- */

beforeEach(() => {
    cities = ['Pindamonhangaba'];
});

afterEach(() => {
    cities = [];
});

test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
});

/* No código acima, você declarou uma função beforeEach , que roda antes de cada um dos testes,
ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles,
para definir as suas configurações. Como visto antes, este é o ciclo anterior aos testes
chamado de setup.

Nesta fase, é configurado o array para ter sempre o valor ['Pindamonhangaba'] , portanto,
em todos os testes realizados, o valor do array será sempre o mesmo.

Também declaramos uma função afterEach , que roda após cada um dos testes e faz a limpeza dos
dados do nosso array depois de cada execução. Além disso, como o próprio nome indica,
ela é executada após cada teste no terceiro ciclo dos testes, que é a fase de teardown.

Geralmente utilizamos esta fase para limpar os valores que foram manipulados durante os testes.

Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem
dentro desse describe , ele rodará apenas dentro dos testes que estão nesse describe.

Ou seja, se criarmos um segundo describe , aquele beforeEach e afterEach que estão no primeiro
describe não serão rodados antes e/ou depois dos testes do segundo. */
