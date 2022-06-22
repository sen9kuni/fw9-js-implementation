// tanpa built-in
function membalikKata(teks) {
    let hasil = ""
    let hasilBalik = ""
    let hasilBalik1 = ""
    let hasilBalik2 = ""
    let final1 = ""
    let final2 = ""
    let final3 = ""
    let finaltemp = ""



    for (let x = teks.length - 1; x >= 0; x--) {
        hasil = hasil + teks[x]
    }
    console.log(hasil)


    let final = hasil.length
    for (let y = 0; y <= final; y++) {
        if (hasil[y] == ' ') {
            for (let z = y - 1; z >= 0; z--) {
                hasilBalik = hasilBalik + hasil[z]
                y++
            }
            final1 = hasilBalik + " "
        }
    }

    let test = final1.length
    console.log(test);
    for (let y = test; y <= final; y++) {
        if (hasil[y] == ' ') {
            for (let z = y - 1; z >= test; z--) {
                hasilBalik1 = hasilBalik1 + hasil[z];
                y++
            }
            final2 = hasilBalik1 + " "
        }
    }

    let test2 = test + final2.length - 1
    for (let i = final - 1; i >= test2; i--) {
        hasilBalik2 = hasilBalik2 + hasil[i]
    }
    final3 = final3 + hasilBalik2

    finaltemp = `${final1}${final2}${final3}`
    console.log(finaltemp)
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