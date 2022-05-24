let resultadoCalculo;
const resultadoNaTela = document.getElementById('resultado');
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
    operaComPorcentagem(valorPorcentagemNumerica);
    gerarHistorico();
}

function operaComPorcentagem(valorPorcentagemNumerica) {
    let campoComPorcentagem = resultadoNaTela.innerHTML;
    let valor = useRegexValor(campoComPorcentagem);
    let operador = useRegexOperador(campoComPorcentagem);
    let conta = `${valor} ${operador} ${valorPorcentagemNumerica}`
    let fazConta = eval(conta);
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

document.addEventListener('keypress', function (e) {
    if (e.which == 13) { //enter
        calcular();
    } 
});

