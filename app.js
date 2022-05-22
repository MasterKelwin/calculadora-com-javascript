let resultadoCalculo;
const historico = document.querySelector('.historico');

function inserir(number) {
    var resultadoInserir = document.getElementById('resultado');
    resultadoInserir.innerHTML += number;
}

function limpar() {
    resultado.innerHTML = "";
}

function calcular() {
    var resultadoCalcular = document.getElementById('resultado').innerHTML;
    if(resultadoCalcular) {
        const resultadoNaTela = document.getElementById('resultado');
        resultadoCalculo = eval(resultadoCalcular).toFixed(2);
        resultadoNaTela.innerHTML = resultadoCalculo;
        geraHistorico();
    }
    else {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}

function apagar() {
    var resultadoApagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultadoApagar.substring(0, resultadoApagar.length -1);
}

function geraHistorico() {
    const resultadoHistorico = document.createElement("p");
    resultadoHistorico.innerHTML = resultadoCalculo;
    historico.appendChild(resultadoHistorico);
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13) { //enter
        calcular();
    } else {
        return;
    }
});

