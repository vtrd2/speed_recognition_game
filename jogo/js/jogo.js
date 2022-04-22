function generateDivButtons(x_, y_) {
    let gameBody = document.getElementsByClassName("gameBody")[0];
    let x = 1;
    for (let y = 1; y <= y_; y++) {
        let line = document.createElement("div");
        line.className = "line";
        line.id = "line" + y;
        gameBody.appendChild(line);
        for (let n = 1; n <= x_; n++) {
            let divButton = document.createElement('div');
            divButton.className = "divButton";
            divButton.id = "button" + x;
            line.appendChild(divButton)
            x++;
        }
    }
}

function chooseButton(x, y) {
    //gera dois valores aleatorios entre 0 e x, 0 e y
    let value = Math.floor(Math.random() * x*y);
    let buttonf1 = document.getElementById("button" + value);
    return buttonf1;
}

function alterarButton(x, y) {
    let buttonf = chooseButton(x, y);
    buttonf.style.backgroundColor = "rgb(255, 0, 0)"; 
    buttonf.style.cursor = "pointer";
    return buttonf;
}

function onclick(button, times) {
    button.onclick = function() {
        button.style.backgroundColor = "rgb(122, 122, 122)";
        button.style.cursor = "default";
        button.onclick = null;
        if (times == 1) {
            let totalTime = new Date().getTime() - time;
            alert("Fim do jogo, tempo total: " + totalTime/1000 + " segundos");
            //retorna false se acabou
            return false;
        } else {
            button = alterarButton(x, y);
            onclick(button, times - 1);
        } 
    }
}

let x = 5;
let y = 10;

let times = 3;
let time = new Date().getTime();


generateDivButtons(x, y);

let button = alterarButton(x, y);
let jogoRodando = onclick(button, times);