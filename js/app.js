let btntweetar = document.getElementById("btntweetar");
let writeTweete = document.getElementById("msg");

btntweetar.addEventListener('click', (event) => {
    event.preventDefault();
    printTweete();
    resetTweete();

});

function printTweete() {
    let newNode = document.createElement("div");
    let hourCaptured = document.createElement("p");

    hourCaptured.innerHTML = time();

    let tweete = document.createElement("p");


    tweete.innerHTML = writeTweete.value;

    newNode.appendChild(tweete);
    newNode.appendChild(hourCaptured);

    document.getElementById("messageHere").appendChild(newNode);

}

function resetTweete() {
    writeTweete.value = "";
}

function time() {
    let date = new Date;
    let inHours = date.getHours().toString();
    let min = date.getMinutes().toString();
    let finalHour = inHours + ":" + min;

    return finalHour;

}

window.doSomething = function (input) {
    document.getElementById('btntweetar').disabled = (input.value.length === 0);
}

function caracteres() {
    let max = 140;
    let atual = document.getElementById("msg").value.length;
    let valor = max - atual;
    console.log(valor);


    if (valor > 0 && valor <= 119) {
        document.getElementById("contadorHere").innerHTML = valor + " caracteres restantes";
        document.getElementsByClassName('btnTweetar')[0].disabled = false;
        document.getElementById("contadorHere").style.color = '#FF8C00';
    } else if (valor > 120 && valor <= 129) {
        document.getElementById("contadorHere").innerHTML = valor + " caracteres restantes";
        document.getElementsByClassName('btnTweetar')[0].disabled = false;
        document.getElementById("contadorHere").style.color = '#FFD700';
    } else if (valor >= 130 && valor <= 140) {
        document.getElementById("contadorHere").innerHTML = valor + " caracteres restantes";
        document.getElementsByClassName('btnTweetar')[0].disabled = false;
        document.getElementById("contadorHere").style.color = '#4AB3F4';

    } else {
        document.getElementById("contadorHere").innerHTML = valor;
        document.getElementsByClassName('btnTweetar')[0].disabled = true;
        document.getElementById("contadorHere").style.color = '#cc0000';
    }
}

function autoResize() {
    objTextArea = document.getElementById('msg');
    while (objTextArea.scrollHeight > objTextArea.offsetHeight) {
        objTextArea.rows += 1;
    }
    while (objTextArea.scrollHeight < objTextArea.offsetHeight) {
        objTextArea.rows -= 1;
    }
}



