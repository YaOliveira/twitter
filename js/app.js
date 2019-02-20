/* printar a mensagem postada pelo usuário */
let btnPrint = document.querySelector('.btnTweetar');

function printMensagem() {
    let tweete = document.getElementById("msg").value;
    document.querySelector('#messageHere').innerHTML = tweete;
}

btnPrint.addEventListener('click', function () {
    printMensagem();
    event.preventDefault();
});

// // versão 2

window.doSomething = function (input) {
    document.getElementById('btntweetar').disabled = (input.value.length === 0);
}

/*função para contador regressivo de caracteres da textarea*/
/* contador de caracteres */

function caracteres() {
    let max = 20;
    let atual = document.getElementById("msg").value.length;
    let valor = max - atual;
    console.log(valor);


    if (valor > 10 && valor <= 20) {
        document.getElementById("contadorHere").innerHTML = valor + " caracteres restantes";
        document.getElementsByClassName('btnTweetar')[0].disabled = false;
        document.getElementById("contadorHere").style.color = 'yellow';
    } else if (valor >= 0 && valor <= 10) {
        document.getElementById("contadorHere").innerHTML = valor + " caracteres restantes";
        document.getElementsByClassName('btnTweetar')[0].disabled = false;
        document.getElementById("contadorHere").style.color = '#010101';

    } else {
        document.getElementById("contadorHere").innerHTML = valor;
        document.getElementsByClassName('btnTweetar')[0].disabled = true;
        document.getElementById("contadorHere").style.color = '#cc0000';
    }
}




