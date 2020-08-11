$(document).ready(() => {
    let btnCalcular = document.querySelector('.btn-calcular');
    btnCalcular.addEventListener('click', () => {
        let ret = calcularIMC();
        document.querySelector('.retorno').innerHTML = ret[0].nome + ', seu IMC é ' + ret[0].imc.toFixed(2) + '. Sua classificação é ' + ret[0].meuIMC[0].classificacao + ' e os efeitos são: ' + ret[0].meuIMC[0].efeitos.join(', ') + '.';
    });
});

function calcularIMC() {
    let nomeObj = document.querySelector('#nome');
    let nome = nomeObj.value;
    let pesoObj = document.querySelector('#peso');
    let peso = pesoObj.value;
    let alturaObj = document.querySelector('#altura');
    let altura = alturaObj.value;
    let imc = peso / (altura * altura);
    console.log(imc.toFixed(1));
    let meuIMC =  checkClassificacaoIMC(imc.toFixed(1));
    let ret = [
        {
            nome,
            imc,
            meuIMC
        }
    ];
    return ret;
}

function checkClassificacaoIMC(imc) {
    let classificacaoIMC = [
        {
            imcMin: 16,
            imcMax: 16.9,
            classificacao: 'Muito abaixo do peso',
            efeitos: ['Queda de cabelo', 'infertilidade', 'ausência menstrual']
        },
        {
            imcMin: 17,
            imcMax: 18.4,
            classificacao: 'Abaixo do peso',
            efeitos: ['Fadiga', 'stress', 'ansiedade']
        },
        {
            imcMin: 18.5,
            imcMax: 24.9,
            classificacao: 'Peso normal',
            efeitos: ['Menor risco de doenças cardíacas e vasculares']
        },
        {
            imcMin: 25,
            imcMax: 29.9,
            classificacao: 'Acima do peso',
            efeitos: ['Fadiga', 'má circulação', 'varizes']
        },
        {
            imcMin: 30,
            imcMax: 34.9,
            classificacao: 'Obesidade I',
            efeitos: ['Diabetes', 'angina', 'infarto', 'aterosclerose']
        },
        {
            imcMin: 35,
            imcMax: 40,
            classificacao: 'Obesidade II',
            efeitos: ['Apneia de sono', 'falta de ar']
        },
        {
            imcMin: 40,
            imcMax: 999,
            classificacao: 'Obesidade III',
            efeitos: ['Refluxo', 'dificuldade para se mover', 'escaras', 'infarto', 'AVC', 'diabetes']
        }
    ];
    let meuIMC = classificacaoIMC.filter(cIMC => (cIMC.imcMin <= imc && cIMC.imcMax >= imc) );
    return meuIMC;
}