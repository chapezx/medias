function aritmetica() {
    // Valores
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    // Cálculo da média aritmética
    let media = (n1 + n2 + n3) / 3;

    // Resultado
    let resultado = "Média Aritmética: " + media.toFixed(2);

    // Mostrar no HTML
    document.getElementById("aritmetica").innerText = resultado;
}

function mediana() {

    let n1 = Number(document.getElementById("nn1").value);
    let n2 = Number(document.getElementById("nn2").value);
    let n3 = Number(document.getElementById("nn3").value);
    let n4 = Number(document.getElementById("nn4").value);
    let n5 = Number(document.getElementById("nn5").value);

    let valores = [n1, n2, n3, n4, n5];

    // Ordenando os valores
    valores.sort((a, b) => a - b);

    // Calculando a mediana
    let resultadoMediana = valores[2];

    // Resultado
    let resultado = "Mediana: " + resultadoMediana;

    // Mostrar no HTML
    document.getElementById("mediana").innerText = resultado;
}

function variancia(){
    let n1 = Number(document.getElementById("nm1").value);
    let n2 = Number(document.getElementById("nm2").value);
    let n3 = Number(document.getElementById("nm3").value);
    let n4 = Number(document.getElementById("nm4").value);
    let n5 = Number(document.getElementById("nm5").value);

     // Criando o array
    let valores = [n1, n2, n3, n4, n5];

    // Quantidade de valores
    let n = valores.length;

    // Soma dos valores
    let soma = valores.reduce((total, valor) => total + valor, 0);

    // Média
    let media = soma / n;

    // Soma dos quadrados das diferenças
    let somaQuadrados = valores.reduce(
        (total, valor) => total + Math.pow(valor - media, 2),
        0
    );

    // Variância amostral
    let variancia = somaQuadrados / (n - 1);

    // Resultado
    document.getElementById("variancia").innerText =
        "Variância Amostral: " + variancia.toFixed(2);
}

function desvio(){
    let n1 = Number(document.getElementById("nmr1").value);
    let n2 = Number(document.getElementById("nmr2").value);
    let n3 = Number(document.getElementById("nmr3").value);
    let n4 = Number(document.getElementById("nmr4").value);
    let n5 = Number(document.getElementById("nmr5").value);

    // Criando array
    let valores = [n1, n2, n3, n4, n5];

    // Quantidade de valores
    let n = valores.length;

    // Soma dos valores
    let soma = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    // Média
    let media = soma / n;

    // Soma dos quadrados
    let somaQuadrados = valores.reduce(
        (total, valor) =>
            total + Math.pow(valor - media, 2),
        0
    );

    // Variância amostral
    let variancia = somaQuadrados / (n - 1);

    // Desvio padrão
    let desvio = Math.sqrt(variancia);

    // Mostrar resultado
    document.getElementById("desvio").innerText ="Desvio Padrão: " + desvio.toFixed(2);
}

function coeficiente(){
    let n1 = Number(document.getElementById("nmrs1").value);
    let n2 = Number(document.getElementById("nmrs2").value);
    let n3 = Number(document.getElementById("nmrs3").value);
    let n4 = Number(document.getElementById("nmrs4").value);
    let n5 = Number(document.getElementById("nmrs5").value);

    // Criando array
    let valores = [n1, n2, n3, n4, n5];

    // Quantidade de valores
    let n = valores.length;

    // Soma dos valores
    let soma = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    // Média
    let media = soma / n;

    // Soma dos quadrados
    let somaQuadrados = valores.reduce(
        (total, valor) =>
            total + Math.pow(valor - media, 2),
        0
    );

    // Variância amostral
    let variancia = somaQuadrados / (n - 1);

    // Desvio padrão
    let desvio = Math.sqrt(variancia);

    // Coeficiente de variação
    let cv = (desvio / media) * 100;

    // Mostrar resultado
    document.getElementById("coeficiente").innerText = "Coeficiente de Variação: " + cv.toFixed(2) + "%";
}

function dados(){
    let n1 = Number(document.getElementById("d1").value);
    let n2 = Number(document.getElementById("d2").value);
    let n3 = Number(document.getElementById("d3").value);
    let n4 = Number(document.getElementById("d4").value);
    let n5 = Number(document.getElementById("d5").value);

    // Criando array
    let valores = [n1, n2, n3, n4, n5];

    // Quantidade de valores
    let n = valores.length;

    // Soma dos valores
    let soma = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    // Média
    let media = soma / n;

    // Soma dos quadrados
    let somaQuadrados = valores.reduce(
        (total, valor) =>
            total + Math.pow(valor - media, 2),
        0
    );

    // Variância amostral
    let variancia = somaQuadrados / (n - 1);

    // Desvio padrão
    let desvio = Math.sqrt(variancia);

    // Coeficiente de variação
    let cv = (desvio / media) * 100;

    // Verificação
    let resultado = "";

    if (cv <= 30) {
        resultado =
            "Conjunto Homogêneo | CV = " +
            cv.toFixed(2) + "%";
    } else {
        resultado =
            "Conjunto Heterogêneo | CV = " +
            cv.toFixed(2) + "%";
    }

    // Mostrar resultado
    document.getElementById("dados").innerText = resultado;
}