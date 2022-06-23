// dengan built-in

function divdeAndSort(number) {
    let finalNumber = ""
    let tempNum = number.toString().split(0);

    tempNum.map(item => {
        let newArrayNum = item.split('')

        finalNumber += newArrayNum.sort((a, b) => {
            return a - b
        }).join('')
    })
    return parseInt(finalNumber)
}


console.log(divdeAndSort(881120113260321))