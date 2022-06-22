// dengan built-in

function divdeAndSort(number) {
    let tempNum = ("" + number).split(0);

    function numberToArray(number) {
        let array = number.toString().split("")
        return array.map(x => parseInt(x))
    }
    let numArray1 = numberToArray(tempNum[0])
    let numArray2 = numberToArray(tempNum[1])
    let numArray3 = numberToArray(tempNum[2])
    let sortNum1 = numArray1.sort((a, b) => a - b)
    let sortNum2 = numArray2.sort((a, b) => a - b)
    let sortNum3 = numArray3.sort((a, b) => a - b)
    let conNum = sortNum1.concat(sortNum2, sortNum3)
    let joinNum = conNum.join('')
    let final = parseInt(joinNum)
    console.log(final)
}


divdeAndSort(881120113260321)