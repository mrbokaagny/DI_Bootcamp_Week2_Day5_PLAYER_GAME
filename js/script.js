function Game() {
    let userWantsToPlay = confirm("Voulez-vous jouer au jeu ?");
    if (!userWantsToPlay) {
        alert("Pas de problème, au revoir");
        return;
    }
    let userNumber;
    while (true) {
        userNumber = prompt("Entrez un nombre entre 0 et 10 :");
        if (isNaN(userNumber)) {
            alert("Désolé, ce n'est pas un nombre, essayez à nouveau");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Désolé, ce n'est pas un bon chiffre, essayez à nouveau");
        } else {
            break; 
        }
    }

    let computerNumber = Math.round(Math.random() * 10);
    console.log(computerNumber)
    comparator(userNumber, computerNumber);
}

function comparator(userNumber, computerNumber) {
    let count = 0; 
    while (count < 3) {
        if (userNumber == computerNumber) {

            alert("WINNER");//afficher winner

            return; // arrêtez le jeu

        } else if (userNumber > computerNumber) {

            alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau numéro :");
        } else {
            alert("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau");
            userNumber = prompt("Entrez un nouveau numéro :");
        }
            count++;
    }
    alert("Hors de chances");
}