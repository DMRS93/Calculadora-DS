'use strict';
let visor = document.getElementById('visor'); // seleciona o visor
visor.value = 0; // por defeito começa no 0
const inputNum = document.querySelectorAll('.number'); // tenho que selecionar todos e fazer um for para especificar
const clear = document // quando carregar no c, o visor volta a 0
  .getElementById('botaoC')
  .addEventListener('click', function () {
    document.getElementById('visor').value = 0;
  });
const operadores = document.querySelectorAll('.operation');
const BtnEq = document // funcao para executar a operaçao de =
  .querySelector('.equal')
  .addEventListener('click', function () {
    let igualA = visor.value;
    let output = eval(igualA);
    if (output === Infinity || output === -Infinity) {
      // se divisao por 0
      visor.value = 'NaN';
    } else {
      visor.value = output;
    }
  });

/* if (e * 0 || e / 0 || 0 * e || 0 / e) {
  visor.value === 'Nan';
} */

for (let i = 0; i < inputNum.length; i++) {
  // funcao para quando carregar nos botoes dos numeros, eles aparecerem no visor
  inputNum[i].addEventListener('click', function (e) {
    if (visor.value === '0') {
      visor.value = e.target.textContent; // se o visor estiver com output de 0, carregando no 0, nao acontece nada
    } else {
      visor.value += e.target.textContent; // senao tiver no valor 0, procede com os outros botoes normalmente
    }
  });
}
for (let i = 0; i < operadores.length; i++) {
  // função para executar a aritemetrica dos sinais de operacao
  operadores[i].addEventListener('click', function (e) {
    visor.value += e.target.textContent;
  });
}
document.addEventListener('keydown', keyboardInputHandler); // utilizar o teclado em vez de cliques
function keyboardInputHandler(e) {
  // funcao para formatar o teclado com os inputs
  //vou buscar o visor
  visor = document.getElementById('visor');
  let visorultInput = visor.value;
  //numeros

  console.log(e.key);

  if (e.key === '0') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '0');
    } else {
      visor.value += '0';
    }
  } else if (e.key === '1') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '1');
    } else {
      visor.value += '1';
    }
  } else if (e.key === '2') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '2');
    } else {
      visor.value += '2';
    }
  } else if (e.key === '3') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '3');
    } else {
      visor.value += '3';
    }
  } else if (e.key === '4') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '4');
    } else {
      visor.value += '4';
    }
  } else if (e.key === '5') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '5');
    } else {
      visor.value += '5';
    }
  } else if (e.key === '6') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '6');
    } else {
      visor.value += '1';
    }
  } else if (e.key === '7') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '7');
    } else {
      visor.value += '7';
    }
  } else if (e.key === '8') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '8');
    } else {
      visor.value += '8';
    }
  } else if (e.key === '9') {
    if (visor.value === '0') {
      (visor.value = visorultInput.substring(0, visor.value.length - 1)),
        (visor.value += '9');
    } else {
      visor.value += '9';
    }
  }

  //operadores
  if (e.key === '+') {
    visor.value += '+';
  } else if (e.key === '-') {
    visor.value += '-';
  } else if (e.key === '*') {
    visor.value += '*';
  } else if (e.key === '/') {
    visor.value += '/';
  }

  //decimal key
  if (e.key === '.') {
    visor.value += '.';
  }

  //enter para ver o resultado
  if (e.key === 'Enter') {
    visor.value = eval(visor.value || null);
  }

  //backspace remove o ultimo input
  if (e.key === 'Backspace') {
    let visorultInput = visor.value;

    //remove o ultimo elemento da String
    visor.value = visorultInput.substring(0, visor.value.length - 1);
  }
}
