let resultadoCalculo;
const resultadoNaTela = document.getElementById('resultado');
const historico = document.querySelector('.historico');

function inserir(number) {
    var resultadoInserir = document.getElementById('resultado');
    resultadoInserir.innerHTML += number;
}

function limpar() {
    resultado.innerHTML = "";
}

function calcular() {
    resultadoCalculo = eval(resultadoNaTela.innerHTML).toFixed(2);
    resultadoNaTela.innerHTML = resultadoCalculo;
    
    gerarHistorico();
}

function calcularPorcentagem() {
    let porcentagem = resultadoNaTela.innerHTML;
    let porcentagem2 = useRegex(porcentagem);
    let resultadoPorcentagem = (porcentagem / 1000);
    let exibirResultado = resultadoPorcentagem * porcentagem2;
    
    //console.log(porcentagem)
    console.log(porcentagem2)
    //console.log(exibirResultado)
    //operaComPorcentagem(exibirResultado);
    //gerarHistorico();
}

function useRegex(porcentagem) {
    let regex = /(?:[0-9])+[0-9]+/i;
    let exp = new RegExp(regex, 'g');
    let resultado = null;
    while (resultado = exp.exec(porcentagem)) {
        let resultadoRegex = exp.exec(porcentagem); 
        return resultadoRegex[0];
    }  
}

function operaComPorcentagem(exibirResultado) {
    return 
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
    } else {
        return;
    }
});

