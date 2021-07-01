const prompt = require('prompt-sync')()

console.log('-'.repeat(69) + '\nInstruções:\n\n1) Só serão aceitas as letras p (1º item), q (2º item) e r (3º item).\n2) Digite nos seguintes formatos "p -> q", "~p -> q", "p v q".\n' + '-'.repeat(69) + '\n')

const hip1 = (prompt('1ª hipótese: ')).trim()
const hip2 = (prompt('2ª hipótese: ')).trim()

let possuiInferencia = 0

if (!isNaN(hip1) || !isNaN(hip2) || hip1 === '' || hip2 === '') {
    console.log('\nPor favor, digite seguindo as instruções acima e tente novamente.\n')
    return
} else {
    verificarInferencia()
}
if (possuiInferencia !== 1) {
    console.log('\nNão existem deduções válidas segundo a lógica proposicional.\n')
}

function prntMP(item) {
    console.log('-'.repeat(30) + '\nDedução: ' + item + '\nTeorema: Modus Ponens\n')
    possuiInferencia++
}
function prntMT(item) {
    console.log('-'.repeat(30) + '\nDedução: ' + item + '\nTeorema: Modus Tollens\n')
    possuiInferencia++
}
function prntSD(item) {
    console.log('-'.repeat(30) + '\nDedução: ' + item + '\nTeorema: Silogismo Disjuntivo\n')
    possuiInferencia++
}

function prntSH(item) {
    console.log('-'.repeat(30) + '\nDedução: ' + item + '\nTeorema: Silogismo Hipotético\n')
    possuiInferencia++
}

function verificarInferencia() {

    function modusPonens() {
        if ((hip1 === 'p -> q' && hip2 === 'p') || (hip1 === 'p' && hip2 === 'p -> q')) {
            prntMP('q') //1
        }
        if ((hip1 === 'q -> p' && hip2 === 'q') || (hip1 === 'q' && hip2 === 'q -> p')) {
            prntMP('p') //2
        }
        if ((hip1 === '~p -> q' && hip2 === '~p') || (hip1 === '~p' && hip2 === '~p -> q')) {
            prntMP('q') //3
        }
        if ((hip1 === '~q -> p' && hip2 === '~q') || (hip1 === '~q' && hip2 === '~q -> p')) {
            prntMP('p') //4
        }
        if ((hip1 === 'p -> ~q' && hip2 === 'p') || (hip1 === 'p' && hip2 === 'p -> ~q')) {
            prntMP('~q') //5
        }
        if ((hip1 === 'q -> ~p' && hip2 === 'q') || (hip1 === '~q' && hip2 === '~q -> p')) {
            prntMP('~p') //6
        }
    }
    modusPonens()

    function modusTollens() {
        if ((hip1 === 'p -> q' && hip2 === '~q') || (hip1 === '~q' && hip2 === 'p -> q')) {
            prntMT('~p')
        }
        if ((hip1 === 'q -> p' && hip2 === '~p') || (hip1 === '~p' && hip2 === 'q -> p')) {
            prntMT('~q')
        }
        if ((hip1 === '~p -> q' && hip2 === 'q') || (hip1 === 'q' && hip2 === '~p -> q')) {
            prntMT('~p')
        }
        if ((hip1 === '~q -> p' && hip2 === 'p') || (hip1 === 'p' && hip2 === '~q -> p')) {
            prntMT('~q')
        }
        if ((hip1 === 'p -> ~q' && hip2 === 'q') || (hip1 === 'q' && hip2 === 'p -> ~q')) {
            prntMT('~p')
        }
        if ((hip1 === 'q -> ~p' && hip2 === 'p') || (hip1 === 'p' && hip2 === 'q -> ~p')) {
            prntMT('~q')
        }
    }
    modusTollens()

    function silogismoDisjuntivo() {
        if ((hip1 === 'p v q' && hip2 === '~p') || (hip1 === '~p' && hip2 === 'p v q')) {
            prntSD('q')
        }
        if ((hip1 === 'q v p' && hip2 === '~p') || (hip1 === '~p' && hip2 === 'q v p')) {
            prntSD('q')
        }
        if ((hip1 === 'p v q' && hip2 === '~q') || (hip1 === '~q' && hip2 === 'p v q')) {
            prntSD('p')
        }
        if ((hip1 === 'q v p' && hip2 === '~q') || (hip1 === '~q' && hip2 === 'q v p')) {
            prntSD('p')
        }
    }
    silogismoDisjuntivo()

    function silogismoHipotetico() {
        if ((hip1 === 'p -> q' && hip2 === 'q -> r') || (hip1 === 'q -> r' && hip2 === 'p -> q')) {
            prntSH('p -> r')
        }
        if ((hip1 === 'r -> q' && hip2 === 'q -> p') || (hip1 === 'q -> p' && hip2 === 'r -> q')) {
            prntSH('r -> p')
        }
        if ((hip1 === 'q -> p' && hip2 === 'p -> r') || (hip1 === 'p -> r' && hip2 === 'q -> p')) {
            prntSH('q -> r')
        }
        if ((hip1 === 'r -> p' && hip2 === 'p -> q') || (hip1 === 'p -> q' && hip2 === 'r -> p')) {
            prntSH('r -> q')
        }
        if ((hip1 === 'p -> r' && hip2 === 'r -> q') || (hip1 === 'r -> q' && hip2 === 'p -> r')) {
            prntSH('p -> q')
        }
        if ((hip1 === 'q -> r' && hip2 === 'r -> p') || (hip1 === 'r -> p' && hip2 === 'q -> r')) {
            prntSH('q -> p')
        }
        if ((hip1 === '~p -> q' && hip2 === 'q -> r') || (hip1 === 'q -> r' && hip2 === '~p -> q')) {
            prntSH('~p -> r')
        }
        if ((hip1 === 'q -> r' && hip2 === 'r -> ~p') || (hip1 === 'r -> ~p' && hip2 === 'q -> r')) {
            prntSH('q -> ~p')
        }
        if ((hip1 === 'r -> ~p' && hip2 === '~p -> q') || (hip1 === '~p -> q' && hip2 === 'r -> ~p')) {
            prntSH('r -> q')
        }
        if ((hip1 === '~p -> r' && hip2 === 'r -> q') || (hip1 === 'r -> q' && hip2 === '~p -> r')) {
            prntSH('~p -> q')
        }
        if ((hip1 === 'q -> ~p' && hip2 === '~p -> r') || (hip1 === '~p -> r' && hip2 === 'q -> ~p')) {
            prntSH('q -> r')
        }
        if ((hip1 === 'r -> q' && hip2 === 'q -> ~p') || (hip1 === 'q -> ~p' && hip2 === 'r -> q')) {
            prntSH('r -> ~p')
        }
        if ((hip1 === 'p -> ~q' && hip2 === '~q -> r') || (hip1 === '~q -> r' && hip2 === 'p -> ~q')) {
            prntSH('p -> r')
        }
        if ((hip1 === '~q -> r' && hip2 === 'r -> p') || (hip1 === 'r -> p' && hip2 === '~q -> r')) {
            prntSH('~q -> p')
        }
        if ((hip1 === 'r -> p' && hip2 === 'p -> ~q') || (hip1 === 'p -> ~q' && hip2 === 'r -> p')) {
            prntSH('r -> ~q')
        }
        if ((hip1 === 'p -> r' && hip2 === 'r -> ~q') || (hip1 === 'r -> ~q' && hip2 === 'p -> r')) {
            prntSH('p -> ~q')
        }
        if ((hip1 === '~q -> p' && hip2 === 'p -> r') || (hip1 === 'p -> r' && hip2 === '~q -> p')) {
            prntSH('~q -> r')
        }
        if ((hip1 === 'r -> ~q' && hip2 === '~q -> p') || (hip1 === '~q -> p' && hip2 === 'r -> ~q')) {
            prntSH('r -> p')
        }
        if ((hip1 === 'p -> q' && hip2 === 'q -> ~r') || (hip1 === 'q -> ~r' && hip2 === 'p -> q')) {
            prntSH('p -> ~r')
        }
        if ((hip1 === 'q -> ~r' && hip2 === '~r -> p') || (hip1 === '~r -> p' && hip2 === 'q -> ~r')) {
            prntSH('q -> p')
        }
        if ((hip1 === '~r -> p' && hip2 === 'p -> q') || (hip1 === 'p -> q' && hip2 === '~r -> p')) {
            prntSH('~r -> q')
        }
        if ((hip1 === 'p -> ~r' && hip2 === '~r -> q') || (hip1 === '~r -> q' && hip2 === 'p -> ~r')) {
            prntSH('p -> q')
        }
        if ((hip1 === 'q -> p' && hip2 === 'p -> ~r') || (hip1 === 'p -> ~r' && hip2 === 'q -> p')) {
            prntSH('q -> ~r')
        }
        if ((hip1 === '~r -> q' && hip2 === 'q -> p') || (hip1 === 'q -> p' && hip2 === '~r -> q')) {
            prntSH('~r -> p')
        }
    }
    silogismoHipotetico()
}
