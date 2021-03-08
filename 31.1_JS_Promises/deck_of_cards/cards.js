let deckID = null;
let card = null


//Make promise to get deck_id
let newDeck = new Promise((resolve, reject) => {
    let res = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    resolve(res)
    reject("Something wrong with API")
})


// jQuery portion
let btn = $('#more_cards')
let pile = $('#card_area')

//click event for additional cards from newDeck promise
btn.on('click', function () {
    newDeck
        .then((res) => {
            axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
                .then((res) => displayCard(res.data.cards[0]['image']))
        })    
})
    
//display card on screen
function displayCard(url) {
    let curr_card = $(`<img src=${url}>`)
    pile.append(curr_card)
}

