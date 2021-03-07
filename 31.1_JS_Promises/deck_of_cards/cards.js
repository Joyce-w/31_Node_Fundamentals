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

function drawCard() {
    newDeck()
        .then((res) => {
            axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
                .then((res) => {
                    console.log(res.data.cards[0]['image'])
                })
        })
}

// Not able to get image url back from return to pass into click event!

// jQuery portion
let btn = $('#more_cards')
let pile = $('#card_area')

//click event for additional cards
btn.on('click', function () {
    let curr_card = $(`<img src=${drawCard}>`)
    pile.append(curr_card)
})

// .then(res => {
//     console.log(`${res.data.cards[0]['value']} of ${res.data.cards[0]['suit']}`)
// })