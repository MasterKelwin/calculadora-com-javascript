function inserir(number) {
    var resultadoInserir = document.getElementById('resultado');
    resultadoInserir.innerHTML += number;
}

function limpar() {
    resultado.innerHTML = "";
}

function calcular()
{
    var resultadoCalcular = document.getElementById('resultado').innerHTML;
    if(resultadoCalcular)
    {
        document.getElementById('resultado').innerHTML = eval(resultadoCalcular);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function apagar() {
    var resultadoApagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultadoApagar.substring(0, resultadoApagar.length -1);
}

const geraHTML = () => {
    const containerExecutandoApp = document.createElement("div");
    containerExecutandoApp.classList.add("container-executando-app");

    const containerSenha = document.createElement("div");
    containerSenha.classList.add("container-senha");

    const containerImagens = document.createElement("div");
    containerImagens.classList.add("container-imagens");

    const titulo = document.createElement("h1");
    titulo.innerText = "SENHA";
    titulo.classList.add("senha__titulo");

    const senhaReal = document.createElement("p");
    senhaReal.classList.add("senha__paragrafo");
    senhaReal.innerText = input.value;

    const imagem = document.createElement("img");
    imagem.classList.add("imagem");
    imagem.src = "assets/imgs/01.png";

    senhaDiv.appendChild(containerExecutandoApp);
    containerExecutandoApp.appendChild(containerImagens);
    containerExecutandoApp.appendChild(containerSenha);
    containerImagens.appendChild(imagem);
    containerSenha.appendChild(titulo);
    containerSenha.appendChild(senhaReal);
}


document.addEventListener('keypress', function (e) {
    if (e.which == 13) { //enter
        calcula();
    } else {
        return;
    }
});
