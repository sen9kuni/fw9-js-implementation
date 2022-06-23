// tanpa built-in
function checkPalindrome1(teks) {
    let hasil = ""
    for (let x = teks.length - 1; x >= 0; x--) {
        hasil = hasil + teks[x]
    }
    if (hasil === teks) {
        console.log('palindrom')
    } else {
        console.log('not palindrom');
    }

}

checkPalindrome1('karak')


// dengan built-in
function checkPalindrome2(text) {
    // versi singkat
    let textTemp = text.toLowerCase()
    let splitText = textTemp.split("").reverse().join("")

    // ver agak panjang
    // let splitText = text.split("")
    // let reverseSplit = splitText.reverse()
    // let joinReverse = reverseSplit.join("")

    // jika yang agak panjang if yang splitText diganti dengan joinReverse
    if (splitText === textTemp) {
        console.log('palindrom')
    } else {
        console.log('not palindrom');
    }
}

checkPalindrome2('MalAm')