

function isPalindrome(word) {
    //trasforma la parola in minuscolo
    const lowerWord = word.toLowerCase();
    //inverte la parola
    const reverseWord = lowerWord.split("").reverse().join("");
    return lowerWord === reverseWord;
}

const userWord = prompt("Inserisci una parola e scopri se è palindroma")

if (isPalindrome(userWord)) {
    console.log("La tua parola è palindroma")
} else {
    console.log("La tua parola non è palindroma")
}
