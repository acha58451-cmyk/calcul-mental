
const bouton = document.getElementById("valider");
const champReponse = document.getElementById("reponse");
const resultat = document.getElementById("resultat");

bouton.addEventListener("click", function () {
    const reponse = champReponse.value;

    if (reponse.trim() === "") {
        resultat.textContent = "Entre une réponse.";
        return;
    }

    if (Number(reponse) === 100) {
        resultat.textContent = "Bravo ! Bonne réponse.";
        resultat.style.color = "green";
    } else {
        resultat.textContent =
            "Incorrect. La bonne réponse est 100.";
        resultat.style.color = "red";
    }
});
