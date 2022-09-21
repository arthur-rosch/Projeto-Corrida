// 5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
// corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
// nome da equipe que fez o menor tempo na propriedade “Vencedor”.
// 6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
// corrida.
// 7. Crie um objeto da classe Corrida e chame seus métodos.
let car = [],
  pistas = [];

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
let loop = true;
while (loop) {
  var choice = Number(prompt("1-Cadastrar Carro \n2-Corridas \n3-Sair"));
  switch (choice) {
    case 1:
      createCar();
      break;
    case 2:
      createRace();
      break;
    case 3:
      alert("Programa Finalizado");
      loop = false;
      break;
    default:
      alert("Opção Invalida");
      break;
  }
}
function createCar() {
  let carro = new Car();
  carro.Nomes = String(prompt("Nome do Carro:"));
  carro.Potencia = Number(prompt("Cv do Carro:"));
  carro.Velocidade = Number(prompt("Velocidade Maxima do Carro:"));
  carro.Aceleração = Number(prompt("De 0 a 100 Em:"));
  car.push(carro);
}
function createRace() {
  let choice = Number(prompt("1-Cadastrar Corrida \n2-Vencedor \n3-Sair")),
    loop = true;
  while (loop) {
    switch (choice) {
      case 1:
        let pista = new Race();
        pista.Nome = String(prompt("Nome da Pista"));
        pista.Tipo = String(prompt("Tipo da Corrida"));
        pista.Distancia = Number(prompt("Distancia Da Pista:"));
        pistas.push(pista);
        loop = false;
        break;
      case 2:
        alert(pistas[0].Winner());
        loop = false;
        break;
      case 3:
        loop = false;
        break;
      default:
        alert("Opção Invalida");
        break;
    }
  }
}
