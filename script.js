const button = document.getElementById("countButton")
button.addEventListener("click", function() {
   countL()
   countP()
   frequency()
})




let typedText = document.getElementById("textInput").value
typedText = typedText.toLowerCase(); 
typedText = typedText.replace(/[^a-z'\s]+/g, "")
let countLetters = []
let letters = []
function countL() {
    let texto = document.getElementById("textInput").value
    texto = texto.toLowerCase();
    texto = texto.replace(/[^a-z'\s]+/g, "")
    for (let i = 0; i < texto.length; i++) {
        letraAtual = texto[i]
        if (countLetters[letraAtual] === undefined) {
            countLetters[letraAtual] = 1
            letters.push(letraAtual)
        } else {
            countLetters[letraAtual]++
        }
    }
}
let countW = []
let palavra = []
function countP() {
    let txt = document.getElementById("textInput").value
    txt = txt.toLowerCase();
    txt = txt.replace(/[^a-z'\s]+/g, "")
    let words = txt.split(/\s/)
    for (let i = 0; i < words.length; i++) {
        insert = words[i]
        if (countW[insert] === undefined) {
            countW[insert] = 1
            palavra.push(insert)
        } else {
            countW[insert]++
        }
    }
}

function frequency() {
    const body = document.querySelector("body")
    const lettersDV = document.createElement("div")
    const wordDV = document.createElement("div")
    let quebra = ""
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != "\n")
            quebra += letters[i] + ": " + countLetters[letters[i]] + " "
    }
    quebra += "\n\n\n\n"
    let quebra2 = ""
    for (let i = 0; i < palavra.length; i++) {
        quebra2 += palavra[i] + ": " + countW[palavra[i]] + " "
    }
    lettersDV.innerText = quebra
    wordDV.innerText = quebra2
    body.appendChild(lettersDV)
    body.appendChild(wordDV)
}