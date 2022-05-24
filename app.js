'use strict';

let resultadoCalculo;
const resultadoNaTela = document.getElementById('resultado');
resultadoNaTela.focus();
const historico = document.querySelector('.historico');

function inserir(number) {
    var resultadoInserir = document.getElementById('resultado');
    resultadoInserir.innerHTML += number;
}

function limpar() {
    resultadoNaTela.innerHTML = "";
}

function calcular() {
    resultadoCalculo = eval(resultadoNaTela.innerHTML).toFixed(2);
    resultadoNaTela.innerHTML = resultadoCalculo;
    
    gerarHistorico();
}

function calcularPorcentagem() {
    let campoComPorcentagem = resultadoNaTela.innerHTML;
    let valor = useRegexValor(campoComPorcentagem);
    let porcentagem = useRegexPorcentagem(campoComPorcentagem);
    let resultadoUmPorCento = valor / 100;
    let valorPorcentagemNumerica = resultadoUmPorCento * porcentagem;
    operaComPorcentagem(valorPorcentagemNumerica, valor);
    gerarHistorico();
}

function operaComPorcentagem(valorPorcentagemNumerica, valor) {
    let campoComPorcentagem = (resultadoNaTela.innerHTML);
    let operador = useRegexOperador(campoComPorcentagem);
    let conta = `${valor} ${operador} ${valorPorcentagemNumerica}`
    let fazConta = (eval(conta)).toFixed(0);
    resultadoCalculo = fazConta;
    resultadoNaTela.innerHTML = resultadoCalculo;
}

function useRegexPorcentagem(campoComPorcentagem) {
    let regex = /(?:[0-9])+[0-9]+/i;
    let exp = new RegExp(regex, 'g');
    let resultado = null;
    while (resultado = exp.exec(campoComPorcentagem)) {
        let resultadoRegex = exp.exec(campoComPorcentagem); 
        return resultadoRegex[0];
    }  
}

function useRegexValor(campoComPorcentagem) {
    let regex = /[0-9]+/i;
    let exp = new RegExp(regex, 'g');
    let resultadoValor = exp.exec(campoComPorcentagem);
    return resultadoValor[0];
}

function useRegexOperador(campoComPorcentagem) {
    let regex = /[+-/*]/i;  //(\-?\+?(\*)?+\/?) 
    let exp = new RegExp(regex, 'g');
    let resultadoOperador = exp.exec(campoComPorcentagem);
    return resultadoOperador[0];
}

function apagar() {
    var resultadoApagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultadoApagar.substring(0, resultadoApagar.length -1);
}

function gerarHistorico() {
    const resultadoHistorico = document.createElement("p");
    resultadoHistorico.innerHTML = resultadoCalculo;
    historico.appendChild(resultadoHistorico);
}

function inverterSinal() {
    let valorNegativo = resultadoNaTela.innerHTML * -1;
    resultadoNaTela.innerHTML = valorNegativo;
};

const mapaTeclado = {
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    0: 'tecla0',
    '/': 'tecla/',
    '*': 'tecla*',
    '-': 'tecla-',
    '+': 'tecla+',
    '=': 'tecla=',
    Enter: 'tecla=',
    Backspace: 'teclaDelete',
    c: 'teclaC',
    Escape: 'teclaDelete',
    ',': 'tecla.',
};

function mapearTeclado(evento) {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
}

document.addEventListener('keydown', mapearTeclado);