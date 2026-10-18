
const question = document.getElementById("question");
const champ = document.getElementById("reponse");
const resultat = document.getElementById("resultat");
const scoreTexte = document.getElementById("score");
const boutonValider = document.getElementById("valider");
const boutonSuivant = document.getElementById("suivant");

let bonneReponse;
let bonnes = 0;
let total = 0;

function nouvelleQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;

    bonneReponse = a * b;

    question.textContent = `${a} × ${b} = ?`;
    champ.value = "";
    resultat.textContent = "";
    boutonValider.disabled = false;
    boutonSuivant.disabled = true;
    champ.focus();
}

function verifierReponse() {
    if (champ.value.trim() === "") {
        resultat.textContent = "Entre une réponse.";
        resultat.style.color = "orange";
        return;
    }

    total++;

    if (Number(champ.value) === bonneReponse) {
        bonnes++;
        resultat.textContent = "Bravo ! Bonne réponse.";
        resultat.style.color = "green";
    } else {
        resultat.textContent =
            `Incorrect. La bonne réponse est ${bonneReponse}.`;
        resultat.style.color = "red";
    }

    scoreTexte.textContent = `Score : ${bonnes} / ${total}`;

    boutonValider.disabled = true;
    boutonSuivant.disabled = false;
}

boutonValider.addEventListener("click", verifierReponse);
boutonSuivant.addEventListener("click", nouvelleQuestion);

nouvelleQuestion();
