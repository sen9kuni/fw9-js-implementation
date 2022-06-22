// dengan built-in

function divdeAndSort(number) {
    // let numberString = number.toString()
    let digits = ("" + number).split(0);

    function numberToArray(number) {
        let array = number.toString().split("")
        return array.map(x => parseInt(x))
    }
    let final1 = numberToArray(digits[0])
    let final2 = numberToArray(digits[1])
    let final3 = numberToArray(digits[2])
    let final11 = final1.sort((a, b) => a - b)
    let final12 = final2.sort((a, b) => a - b)
    let final13 = final3.sort((a, b) => a - b)
    let finalfinal = final11.concat(final12, final13)
    let finalBoss = finalfinal.join('')
    console.log(digits)
    console.log(finalBoss)
    console.log(final1)
}


divdeAndSort(881120113260321)

// var n = 123456789;
// var digits = ("" + n).split("");

// console.log(digits);