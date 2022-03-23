// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({
        name,
        distanceFromSun: {
            value,
            measurementUnit
        }
    }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
    name: "Mars",
    distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
};

const venus = {
    name: "Venus",
    distanceFromSun: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};

// console.log(planetDistanceFromSun(mars)); // A = Mars
// console.log(planetDistanceFromSun(venus)); // B = Venus
// console.log(planetDistanceFromSun(jupiter)); // C = Jupiter

// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const func2 = () => {
    const planetDistanceFromSun = ({
            name,
            distanceFromSun: {
                value,
                measurementUnit
            }
        }) =>
        `${name} is ${value} ${measurementUnit} apart from the Sun`;

    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };

    const venus = {
        name: "Venus",
        distanceFromSun: {
            value: 108200000,
            measurementUnit: "kilometers",
        },
    };

    const jupiter = {
        name: "Jupiter",
        distanceFromSun: {
            value: 778500000,
            measurementUnit: "kilometers",
        },
    };

    // console.log(planetDistanceFromSun(mars)); // A = Mars
    // setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B = Jupiter
    // setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C = Venus
}

func2();

/* 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos. */

const getPlanet = () => {
    setTimeout(() => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
                value: 227900000,
                measurementUnit: "kilometers",
            },
        };
        // console.log("Returned planet: ", mars);
    }, 2000);
};

getPlanet(); // imprime Marte depois de 4 segundos

/* 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity
de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte,
gastando um tempo variável de até 5 segundos para que termine o envio.
Crie a função sendMarsTemperature , que imprime a temperatura em Marte. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (temperature, delay) => {
    setTimeout(() => {
        const message = `Mars temperature is: ${temperature} degree Celsius`;
        // console.log(message);
        return message;
    }, delay);
}

// sendMarsTemperature(getMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

/* 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon!
No laboratório do Professor Carvalho, você é informado de que existem três
Pokémon's disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails
de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o
sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados,
então não se esqueça de tratá-los também, combinado? */

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find((poke) => poke.name !== filter)) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(({ name }) => name === filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }

  module.exports = {
    getPokemonDetails,
  };
