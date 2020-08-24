var button = document.getElementById("button")
button.addEventListener('click',
    function() {
        
        //genera numeri casuali
        var numberPlayer = Math.floor(Math.random() * 6 + 1);
        var numberComputer = Math.floor(Math.random() * 6 + 1);
        
        //stampa risultati
        document.getElementById("numberPlayer").innerHTML = numberPlayer;
        document.getElementById("numberComputer").innerHTML = numberComputer;
        
        //confronto numeri
        var winner = document.getElementById("winner");
        var winnerBox= document.getElementById("winnerBox");
        if (numberPlayer > numberComputer) {
            winner.innerHTML = "Hai vinto!";
            winnerBox.classList.add("winnerGreen");
        } else if (numberPlayer == numberComputer) {
            winner.innerHTML = "Avete pareggiato!";
            winnerBox.classList.add("winnerOrange");
        } else {
            winner.innerHTML = "Hai perso!";
            winnerBox.classList.remove("winnerOrange");
            winnerBox.classList.remove("winnerGreen");

        }

    }
)
