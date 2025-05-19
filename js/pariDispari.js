//generare un numero casuale 
function getRandomBetween(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

//pari o o dispari
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }

}

//chiede all'utente pari o dispari
const userChoice = (prompt("Scegli pari o dispari").toLowerCase())

//verifica che l'utente abbia scelto correttamente pari o dispari
if (userChoice !== "pari" && userChoice !== "dispari") {

    alert("Qualcosa è andato storto, ricari la pagina e inserisci pari o dispari")
} else {

    //chiede all'utente il numero
    let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"))

    //verifica che il numero sia tra 1 e 5 e che non sia NaN
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Numero non valido, ricarica la pagina e inserisci un numero da 1 a 5")

    } else {
        //genera il numero del computer, fa la somma e guarda se è pari o no
        const computerNumber = getRandomBetween(1, 5)
        const sum = computerNumber + userNumber
        const result = isEvenOrOdd(sum)


        //dichiara chi ha vinto
        if (userChoice === result) {
            console.log("Hai vinto")
        } else {
            console.log("Hai perso")
        }
    }
}

