const fetch = require('node-fetch')


// fetch('https://rickandmortyapi.com/api/character/1')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data.name)
//         // console.log(data.gender)
//         data.episode.forEach(val => {
//             console.log(val)
//         });
//     })

async function getCharacter() {
    const request = await fetch('https://rickandmortyapi.com/api/character/1')
    const data = await request.json()
    data.episode.forEach(eps => {
        console.log(eps)
    })
}

getCharacter()