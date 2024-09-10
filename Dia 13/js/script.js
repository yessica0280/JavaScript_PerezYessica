fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
.then (res => res.json())
.then(data =>{
    console.log(data)
    console.log(data.cards[0].images.png)
    document.getElementById('resultado').innerHTML+=`
    <img id="carta" src="${data.cards[0].images.png}">
    `
})