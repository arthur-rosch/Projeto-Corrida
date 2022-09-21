// 5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
// corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
// nome da equipe que fez o menor tempo na propriedade “Vencedor”.
// 6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
// corrida.
// 7. Crie um objeto da classe Corrida e chame seus métodos.
let car = [];

class Car {
  Nomes;
  Potencia;
  Velocidade;
  Aceleração;

  Tempo(distancia) {
    let resultado = distancia / (this.Velocidade / this.Aceleração);
    return resultado;
  }
}
class Race {
  Nome;
  Tipo;
  Distancia;
  Vencedor;

  Winner() {
    let menorTempo = car[0].Tempo(this.Distancia);
    console.log("menorTempo: " + menorTempo);
    let vencedor;
    car.forEach((carro) => {
      let tempo = carro.Tempo(this.Distancia);
      console.log("tempo: " + tempo);
      if (tempo < menorTempo) {
        menorTempo = tempo;
        vencedor = carro.Nomes;
      }
    });
    return vencedor;
  }
}

let mercedes = new Car();
mercedes.Nomes = "Cla A45 Amg";
mercedes.Potencia = 240;
mercedes.Velocidade = 220;
mercedes.Aceleração = 2.0;

let honda = new Car();
honda.Nomes = "Civic G10";
honda.Potencia = 210;
honda.Velocidade = 210;
honda.Aceleração = 3.0;

car.push(honda, mercedes);

let pista = new Race();
pista.Nome = "Monaco Race";
pista.Tipo = "Car Race";
pista.Distancia = 10000;
pista.Vencedor = pista.Winner();
console.log(pista.Vencedor);
