
const question = document.getElementById("question");
const champ = document.getElementById("reponse");
const resultat = document.getElementById("resultat");
const scoreTexte = document.getElementById("score");
const boutonValider = document.getElementById("valider");
const boutonSuivant = document.getElementById("suivant");
const boutonRecommencer = document.getElementById("recommencer");
const difficulte = document.getElementById("difficulte");
const chronometre = document.getElementById("chronometre");

let tempsRestant = 10;
let intervalle = null;
let bonneReponse;
let bonnes = 0;
let total = 0;
function arreterChronometre() {
    clearInterval(intervalle);
    intervalle = null;
}

function demarrerChronometre() {
    arreterChronometre();

    tempsRestant = 10;
    chronometre.textContent = `Temps restant : ${tempsRestant} s`;

    intervalle = setInterval(function() {
        tempsRestant--;

        chronometre.textContent =
            `Temps restant : ${tempsRestant} s`;

        if (tempsRestant <= 0) {
            arreterChronometre();

            total++;

            resultat.textContent =
                `Temps écoulé ! La bonne réponse est ${bonneReponse}.`;
            resultat.style.color = "red";

            scoreTexte.textContent = `Score : ${bonnes} / ${total}`;

            boutonValider.disabled = true;
            boutonSuivant.disabled = false;
        }
    }, 1000);
}

function nouvelleQuestion() {
    let maximum;

    if (difficulte.value === "facile") {
        maximum = 5;
    } else if (difficulte.value === "moyen") {
        maximum = 10;
    } else {
        maximum = 20;
    }

    const a = Math.floor(Math.random() * maximum) + 1;
    const b = Math.floor(Math.random() * maximum) + 1;

    bonneReponse = a * b;

    question.textContent = `${a} × ${b} = ?`;
    champ.value = "";
    resultat.textContent = "";
    boutonValider.disabled = false;
    boutonSuivant.disabled = true;
    champ.focus();
    demarrerChronometre();
}
difficulte.addEventListener("change", function() {
    nouvelleQuestion();
});
function verifierReponse() {
    if (champ.value.trim() === "") {
        resultat.textContent = "Entre une réponse.";
        resultat.style.color = "orange";
        return;
    }
    arreterChronometre();

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

function recommencerQuiz() {
    bonnes = 0;
    total = 0;

    scoreTexte.textContent = "Score : 0 / 0";

    nouvelleQuestion();
}

boutonRecommencer.addEventListener("click", recommencerQuiz);

nouvelleQuestion();
