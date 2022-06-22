// tanpa built-in


// dengan built-in
// test
// 

function reverseWord2(texts) {
    let splitText = texts.split(" ")
    let reverseText = splitText.reverse()
    let jointext = reverseText.join(" ")
    console.log(jointext)
}

reverseWord2('Saya belajar Javascript')