// tanpa built-in
function reverseTexts(texts) {
    let temp = ""
    let Array = []
    let final = ""
    for (let i = 0; i <= texts.length; i++) {
        if (texts[i] === " " || i === texts.length) {
            Array[Array.length] = temp
            temp = ""
            i += 1
        }
        temp += texts[i]
    }

    for (let z = Array.length - 1; z >= 0; z--) {
        final += Array[z] + " ";
    }
    console.log(final)
}

reverseTexts("Saya belajar Javascript")

// dengan built-in

function reverseWord2(texts) {
    let splitText = texts.split(" ")
    let reverseText = splitText.reverse()
    let jointext = reverseText.join(" ")
    console.log(jointext)
}

reverseWord2('Saya belajar Javascript')