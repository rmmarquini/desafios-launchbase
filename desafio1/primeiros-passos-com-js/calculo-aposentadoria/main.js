$(document).ready(() => {
    let btnCalcular = document.querySelector('.btn-calcular');
    btnCalcular.addEventListener('click', () => {
        let nomeObj = document.querySelector('#nome');
        let nome = nomeObj.value;
        let sexoObj = document.querySelector('#sexo');
        let sexo = sexoObj.value;
        let idadeObj = document.querySelector('#idade');
        let idade = idadeObj.value;
        let contribuicaoObj = document.querySelector('#contribuicao');
        let contribuicao = contribuicaoObj.value;
        let retornoObj = document.querySelector('.retorno');
        let errValidar = validaPreenchimento(nome, sexo, idade, contribuicao);
        if (errValidar.length > 0) {
            retornoObj.classList.add('error');
            retornoObj.innerHTML = errValidar.join("<br />");
        } else {
            retornoObj.classList.remove('error');
            retornoObj.innerHTML = '';
            let podeAposentar = calcularAposentadoria(sexo, idade, contribuicao);
            retornoObj.innerHTML = (podeAposentar) ? nome + ', você pode se aposentar!' : nome + ', você não pode se aposentar!';
        }
    });
});

function calcularAposentadoria(sexo, idade, contribuicao) {
    /**
     * O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
     * Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
     * precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
     */
    if (sexo === "M") {
        return (contribuicao < 35 || (idade + contribuicao) < 95 ) ? false : true;
    } else {
        return (contribuicao < 30 || (idade + contribuicao) < 85 ) ? false : true;
    }
}

function validaPreenchimento(nome, sexo, idade, contribuicao) {
    let err = [];
    if (isNumeric(nome) || isEmpty(nome)) {
        err.push('O nome não está preenchido ou é inválido.');
    }
    if (isEmpty(sexo)) {
        err.push('Informe seu sexo.')
    }
    if (!isNumeric(idade) || isEmpty(idade)) {
        err.push('A idade não foi informada ou é inválida.')
    }
    if (!isNumeric(contribuicao) || isEmpty(contribuicao)) {
        err.push('O tempo em anos de contribuição não foi informado ou é inválido.');
    }
    if (isNumeric(idade) && isNumeric(contribuicao)) {
        if (contribuicao >= idade) {
            err.push('Os anos de contribuição não podem ser maiores que sua idade!');
        }
        if ((idade - contribuicao) < 0 ) {
            err.push('Sua idade não pode ser menor que o tempo de contribuição');
        }
        if ((idade - contribuicao) < 16) {
            err.push('Pela lei brasileira você pode começar contribuir à partir dos 16 anos. Neste caso, há algo errado, pois idade - contribuição = ' + (idade - contribuicao));
        }
    }
    return err;
}

function isNumeric(valor) {
    return (/^\d+$/).test(valor);
}

function isEmpty(valor) {
    return (valor.length > 0) ? false : true;
}