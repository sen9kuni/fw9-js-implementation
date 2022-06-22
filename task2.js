// tanpa built-in
function membalikKata(teks) {
    hasil = ""
    hasilBalik = ""
    final1 = ""
    for (let x = teks.length - 1; x >= 0; x--) {
        hasil = hasil + teks[x]
    }
    let final = hasil.length
    for (let y = 0; y <= final; y++) {
        if (hasil[y] == ' ') {
            for (let z = y - 1; z >= 0; z--) {
                hasilBalik = hasilBalik + hasil[z]
                y++
            }
            final1 = hasilBalik + " a"
        }
    }
    console.log(final1)
}

membalikKata('Saya belajar Javascript')

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