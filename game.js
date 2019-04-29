const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();

inicializarQuadrados();

function atualizaMostrador() {
    console.log(gameOver);
    if (gameOver == true) {
        return;
    }
    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        console.log(player);
        player.setAttribute("src", "img/X.png");
    }
    else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        console.log(player);
        player.setAttribute("src", "img/O.png");
    }
}

function inicializarQuadrados() {
    var quadrados = document.getElementsByClassName("quadrado");
    for (var i = 0; i < quadrados.length; i++) {
        quadrados[i].addEventListener("click", function () {
            if (gameOver == true) {
                return;
            }
            if (this.getElementsByTagName("img").length == 0) {
                if (playTime == player1) {
                    this.innerHTML = "<img src = 'img/X.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                } else {
                    this.innerHTML = "<img src = 'img/O.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizaMostrador();
                verificaVencedor();
            }
        });
    }
}
async function verificaVencedor() {
    var quadrados = document.getElementsByClassName("quadrado");
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";
    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "")) {
        vencedor = a1;
    }
    else if ((b2 == a3 && b2 == c1 && b2 != "") || (b2 == a1 && b2 == c3 && b2 != "") || (b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "")) {
        vencedor = b2;
    }
    else if ((c3 == b2 && c3 == a1 && c3 != "") || (c3 == b3 && c3 == a3 && c3 != "") || (c3 == c2 && c3 == c1 && c3 != "")) {
        vencedor = c3;
    }
    else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {
        alert("Deu velha!");
        gameOver = true;
        await sleep(50);
    }


    if (vencedor != "") {
        gameOver = true;
        atualizaMostrador();
        alert("O vencedor é o: " + vencedor);
    }
}
