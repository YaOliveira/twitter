let btnPrint = document.querySelector('.btnTweetar');

function printMensagem(){
    let tweete = document.getElementById("msg").value; 
    document.querySelector('#messageHere').innerHTML = tweete;
}

btnPrint.addEventListener('click', function(){
  printMensagem();
  event.preventDefault();
});

// // versão 2

window.doSomething = function(input) {
    document.getElementById('btntweetar').disabled = (input.value.length == 0);
}

/*função para contador regressivo de caracteres da textarea*/


$(document).on("keydown", "#TxtObservacoes", function () {
    var caracteresRestantes = 255;
    var caracteresDigitados = parseInt($(this).val().length);
    var caracteresRestantes = caracteresRestantes - caracteresDigitados;
    
    $(".caracteres").text(caracteresRestantes);
});