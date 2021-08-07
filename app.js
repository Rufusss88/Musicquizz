const form = document.querySelector('.form-quizz');
let tableauResults = [];
const reponses = ['a','c','c','c','c','a','b','a','b'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titleResults = document.querySelector('.resultats h2')
const aideResults = document.querySelector('.aide');
const noteResults = document.querySelector('.note');
const touteslesQuestions = document.querySelectorAll('.questioncontainer');
let verifTableau = [];

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for (i = 1; i <10; i++) {
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    //console.log(tableauResults);
    verifFunc(tableauResults);
    tableauResults = [];
})

function verifFunc(tabResults){

    for(let a=0; a < 9; a++){

        if(tabResults [a] === reponses [a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false)
        }
    }
    
    //console.log(verifTableau);
    afficherResults(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResults(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDeFautes);

    switch(nbDeFautes) {
        
        case 0:
            titleResults.innerText = ` ✔️ Bravo, c'est un sans faute ✔️!`
            aideResults.innerText = ''
            noteResults.innerText = `9/9`
            break;
        case 1:
            titleResults.innerText = ` ✔️ Lourd, a une réponse près ✔️! `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `8/9`
            break;
        case 2:
            titleResults.innerText = ` ✨ Pas mal ✨ `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `7/9`
            break;
        case 3:
            titleResults.innerText = ` ✨ Pas mal ✨ `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `6/9`
            break;
        case 4:
            titleResults.innerText = `👀 Peut mieux faire `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `5/9`
            break;
        case 5:
            titleResults.innerText = `👀 Peut mieux faire `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `4/9`
            break;
        case 6:
            titleResults.innerText = `😭 Tu écoute de la tech house ou quoi ?😭 `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `3/9`
            break;
        case 7:
            titleResults.innerText = `😭 Tu écoute de la tech house ou quoi ?😭 `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `2/9`
            break;
        case 8:
            titleResults.innerText =  `👎 Pas dingo 👎 `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `1/9`
            break;
        case 9:
            titleResults.innerText = `👎 Pas dingo 👎 `
            aideResults.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResults.innerText = `0/9`
            break;

        default:
            'Erreur dans la matrix'
    }
}


function couleursFonction(tabValBool) {

    for(let j =0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            touteslesQuestions[j].style.background = 'lightgreen';
        } else {
            touteslesQuestions[j].style.background = '#ffb8b8';
            touteslesQuestions[j].classList.add('echec');

            setTimeout(() => {
                touteslesQuestions[j].classList.remove('echec');
            }, 500)   
        }
    }
}

touteslesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white" ;
    })
})