// tanpa built-in

function sortNumber(texts) {
    let numstring = ""
    numstring += texts
    let temp = ""
    let Array = []
    let final = ""
    for (let i = 0; i <= numstring.length; i++) {
        if (numstring[i] === '0' || i === numstring.length) {
            Array[Array.length] = temp

            temp = ""
            i += 1
        }
        temp += numstring[i]
    }

    for (let z = 0; z <= Array.length - 1; z++) {
        // sorting
        function sortNum(num) {
            let str = ""
            str += num

            for (let n = 0; n < str.length; n++) {
                let i = 0;
                while (str[i] < str[n]) ++i;

                let newStr = "";
                for (let x = 0; x < i; x++) newStr += str[x];
                newStr += str[n];
                for (let y = i; y < n; y++) newStr += str[y];
                for (let z = n + 1; z < str.length; z++) newStr += str[z];
                str = newStr;
            }

            str *= 1
            return str
        }
        final += sortNum(Array[z])
    }
    final *= 1
    console.log(final)
}

sortNumber(543210543210321)



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