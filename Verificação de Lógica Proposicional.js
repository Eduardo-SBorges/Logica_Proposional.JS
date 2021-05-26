const prompt = require('prompt-sync')()

console.log('-'.repeat(69) + '\nInstruções:\n\n1) Só serão aceitas as letras p (1º item), q (2º item) e r (3º item).\n2) Digite nos seguintes formatos "p -> q", "~p -> q", "p v q".\n' + '-'.repeat(69) + '\n')

const hip1 = [prompt('1ª hipótese: ')]
const hip2 = [prompt('2ª hipótese: ')]

let possuiInferencia = 0

if (!isNaN(hip1[0]) || !isNaN(hip2[0]) || hip1[0] === '' || hip2[0] === '') {
    console.log('\nPor favor, digite seguindo as instruções acima e tente novamente.\n')
    return
} else {
    verificarInferencia()
}
if (possuiInferencia !== 1) {
    console.log('\nNão existem deduções válidas segundo a lógica proposicional.\n')
}

function verificarInferencia() {

    function modusPonens() {
        if ((hip1[0] === 'p -> q' && hip2[0] === 'p') || (hip1[0] === 'p' && hip2[0] === 'p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: q\nTeorema: Modus Ponens\n') //1
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> p' && hip2[0] === 'q') || (hip1[0] === 'q' && hip2[0] === 'q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: p\nTeorema: Modus Ponens\n') //2
            possuiInferencia += 1
        }
        if ((hip1[0] === '~p -> q' && hip2[0] === '~p') || (hip1[0] === '~p' && hip2[0] === '~p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: q\nTeorema: Modus Ponens\n') //3
            possuiInferencia += 1
        }
        if ((hip1[0] === '~q -> p' && hip2[0] === '~q') || (hip1[0] === '~q' && hip2[0] === '~q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: p\nTeorema: Modus Ponens\n') //4
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> ~q' && hip2[0] === 'p') || (hip1[0] === 'p' && hip2[0] === 'p -> ~q')) {
            console.log('-'.repeat(30) + '\nDedução: ~q \nTeorema: Modus Ponens\n') //
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> ~p' && hip2[0] === 'q') || (hip1[0] === '~q' && hip2[0] === '~q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: ~p \nTeorema: Modus Ponens\n') //
            possuiInferencia += 1
        }
    }
    modusPonens()

    function modusTollens() {
        if ((hip1[0] === 'p -> q' && hip2[0] === '~q') || (hip1[0] === '~q' && hip2[0] === 'p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: ~p \nTeorema: Modus Tollens\n') //1
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> p' && hip2[0] === '~p') || (hip1[0] === '~p' && hip2[0] === 'q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: ~q \nTeorema: Modus Tollens\n') //
            possuiInferencia += 1
        }
        if ((hip1[0] === '~p -> q' && hip2[0] === 'q') || (hip1[0] === 'q' && hip2[0] === '~p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: p\nTeorema: Modus Tollens\n') //3
            possuiInferencia += 1
        }
        if ((hip1[0] === '~q -> p' && hip2[0] === 'p') || (hip1[0] === 'p' && hip2[0] === '~q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: q\nTeorema: Modus Tollens\n') //4
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> ~q' && hip2[0] === 'q') || (hip1[0] === 'q' && hip2[0] === 'p -> ~q')) {
            console.log('-'.repeat(30) + '\nDedução: ~p \nTeorema: Modus Tollens\n') //5
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> ~p' && hip2[0] === 'p') || (hip1[0] === 'p' && hip2[0] === 'q -> ~p')) {
            console.log('-'.repeat(30) + '\nDedução: ~q \nTeorema: Modus Tollens\n') //6
            possuiInferencia += 1
        }
    }
    modusTollens()

    function silogismoDisjuntivo() {
        if ((hip1[0] === 'p v q' && hip2[0] === '~p') || (hip1[0] === '~p' && hip2[0] === 'p v q')) {
            console.log('-'.repeat(30) + '\nDedução: q\nTeorema: Silogismo Disjuntivo\n') //1
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q v p' && hip2[0] === '~p') || (hip1[0] === '~p' && hip2[0] === 'q v p')) {
            console.log('-'.repeat(30) + '\nDedução: q\nTeorema: Silogismo Disjuntivo\n') //2
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p v q' && hip2[0] === '~q') || (hip1[0] === '~q' && hip2[0] === 'p v q')) {
            console.log('-'.repeat(30) + '\nDedução: p\nTeorema: Silogismo Disjuntivo\n') //3
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q v p' && hip2[0] === '~q') || (hip1[0] === '~q' && hip2[0] === 'q v p')) {
            console.log('-'.repeat(30) + '\nDedução: p\nTeorema: Silogismo Disjuntivo\n') //4
            possuiInferencia += 1
        }
    }
    silogismoDisjuntivo()

    function silogismoHipotetico() {
        if ((hip1[0] === 'p -> q' && hip2[0] === 'q -> r') || (hip1[0] === 'q -> r' && hip2[0] === 'p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: p -> r\nTeorema: Silogismo Hipotético\n') //1
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> q' && hip2[0] === 'q -> p') || (hip1[0] === 'q -> p' && hip2[0] === 'r -> q')) {
            console.log('-'.repeat(30) + '\nDedução: r -> p\nTeorema: Silogismo Hipotético\n') //2
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> p' && hip2[0] === 'p -> r') || (hip1[0] === 'p -> r' && hip2[0] === 'q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: q -> r\nTeorema: Silogismo Hipotético\n') //
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> p' && hip2[0] === 'p -> q') || (hip1[0] === 'p -> q' && hip2[0] === 'r -> p')) {
            console.log('-'.repeat(30) + '\nDedução: r -> q\nTeorema: Silogismo Hipotético\n') //4
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> r' && hip2[0] === 'r -> q') || (hip1[0] === 'r -> q' && hip2[0] === 'p -> r')) {
            console.log('-'.repeat(30) + '\nDedução: p -> q\nTeorema: Silogismo Hipotético\n') //5
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> r' && hip2[0] === 'r -> p') || (hip1[0] === 'r -> p' && hip2[0] === 'q -> r')) {
            console.log('-'.repeat(30) + '\nDedução: q -> p\nTeorema: Silogismo Hipotético\n') //6
            possuiInferencia += 1
        }
        if ((hip1[0] === '~p -> q' && hip2[0] === 'q -> r') || (hip1[0] === 'q -> r' && hip2[0] === '~p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: ~p -> r\nTeorema: Silogismo Hipotético\n') //7
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> r' && hip2[0] === 'r -> ~p') || (hip1[0] === 'r -> ~p' && hip2[0] === 'q -> r')) {
            console.log('-'.repeat(30) + '\nDedução: q -> ~p \nTeorema: Silogismo Hipotético\n') //
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> ~p' && hip2[0] === '~p -> q') || (hip1[0] === '~p -> q' && hip2[0] === 'r -> ~p')) {
            console.log('-'.repeat(30) + '\nDedução: r -> q\nTeorema: Silogismo Hipotético\n') //9
            possuiInferencia += 1
        }
        if ((hip1[0] === '~p -> r' && hip2[0] === 'r -> q') || (hip1[0] === 'r -> q' && hip2[0] === '~p -> r')) {
            console.log('-'.repeat(30) + '\nDedução: ~p -> q\nTeorema: Silogismo Hipotético\n') //10
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> ~p' && hip2[0] === '~p -> r') || (hip1[0] === '~p -> r' && hip2[0] === 'q -> ~p')) {
            console.log('-'.repeat(30) + '\nDedução: q -> r\nTeorema: Silogismo Hipotético\n') //11
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> q' && hip2[0] === 'q -> ~p') || (hip1[0] === 'q -> ~p' && hip2[0] === 'r -> q')) {
            console.log('-'.repeat(30) + '\nDedução: r -> ~p\nTeorema: Silogismo Hipotético\n') //12
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> ~q' && hip2[0] === '~q -> r') || (hip1[0] === '~q -> r' && hip2[0] === 'p -> ~q')) {
            console.log('-'.repeat(30) + '\nDedução: p -> r\nTeorema: Silogismo Hipotético\n') //13
            possuiInferencia += 1
        }
        if ((hip1[0] === '~q -> r' && hip2[0] === 'r -> p') || (hip1[0] === 'r -> p' && hip2[0] === '~q -> r')) {
            console.log('-'.repeat(30) + '\nDedução: ~q -> p\nTeorema: Silogismo Hipotético\n') //14
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> p' && hip2[0] === 'p -> ~q') || (hip1[0] === 'p -> ~q' && hip2[0] === 'r -> p')) {
            console.log('-'.repeat(30) + '\nDedução: r -> ~q\nTeorema: Silogismo Hipotético\n') //15
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> r' && hip2[0] === 'r -> ~q') || (hip1[0] === 'r -> ~q' && hip2[0] === 'p -> r')) {
            console.log('-'.repeat(30) + '\nDedução: p -> ~q\nTeorema: Silogismo Hipotético\n') //16
            possuiInferencia += 1
        }
        if ((hip1[0] === '~q -> p' && hip2[0] === 'p -> r') || (hip1[0] === 'p -> r' && hip2[0] === '~q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: ~q -> r\nTeorema: Silogismo Hipotético\n') //17
            possuiInferencia += 1
        }
        if ((hip1[0] === 'r -> ~q' && hip2[0] === '~q -> p') || (hip1[0] === '~q -> p' && hip2[0] === 'r -> ~q')) {
            console.log('-'.repeat(30) + '\nDedução: r -> p\nTeorema: Silogismo Hipotético\n') //18
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> q' && hip2[0] === 'q -> ~r') || (hip1[0] === 'q -> ~r' && hip2[0] === 'p -> q')) {
            console.log('-'.repeat(30) + '\nDedução: p -> ~r\nTeorema: Silogismo Hipotético\n') //19
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> ~r' && hip2[0] === '~r -> p') || (hip1[0] === '~r -> p' && hip2[0] === 'q -> ~r')) {
            console.log('-'.repeat(30) + '\nDedução: q -> p\nTeorema: Silogismo Hipotético\n') //20
            possuiInferencia += 1
        }
        if ((hip1[0] === '~r -> p' && hip2[0] === 'p -> q') || (hip1[0] === 'p -> q' && hip2[0] === '~r -> p')) {
            console.log('-'.repeat(30) + '\nDedução: ~r -> q\nTeorema: Silogismo Hipotético\n') //21
            possuiInferencia += 1
        }
        if ((hip1[0] === 'p -> ~r' && hip2[0] === '~r -> q') || (hip1[0] === '~r -> q' && hip2[0] === 'p -> ~r')) {
            console.log('-'.repeat(30) + '\nDedução: p -> q\nTeorema: Silogismo Hipotético\n') //22
            possuiInferencia += 1
        }
        if ((hip1[0] === 'q -> p' && hip2[0] === 'p -> ~r') || (hip1[0] === 'p -> ~r' && hip2[0] === 'q -> p')) {
            console.log('-'.repeat(30) + '\nDedução: q -> ~r\nTeorema: Silogismo Hipotético\n') //23
            possuiInferencia += 1
        }
        if ((hip1[0] === '~r -> q' && hip2[0] === 'q -> p') || (hip1[0] === 'q -> p' && hip2[0] === '~r -> q')) {
            console.log('-'.repeat(30) + '\nDedução: ~r -> p\nTeorema: Silogismo Hipotético\n') //24
            possuiInferencia += 1
        }
    }
    silogismoHipotetico()
}