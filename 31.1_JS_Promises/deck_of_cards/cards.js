let deckID = null;
let card = null


//get card id
function newDeck() {
    return new Promise((resolve, reject) => {
        let res = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        resolve(res)
        reject("Something wrong with API")
    })
}


    newDeck()
        .then((res) => {
            axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
                .then((res) => displayCard(res.data.cards[0].image))
        })

// jQuery portion
let btn = $('#more_cards')
let pile = $('#card_area')

//click event for additional cards
function displayCard(url) {
    btn.on('click', function () {
        let curr_card = $(`<img src=${url}>`)
        pile.append(curr_card)
    })    
}

