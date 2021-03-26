

class Deck {
    constructor(id) {
        this.id = id;
        this.value = ''
        this.suit = ''
        this.img = ''
    }
    async getInfo() {
        let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        this.id = deck.data.deck_id
    }
    async draw_card() {
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.id}/draw/?count=1`)

        this.value = (draw.data.cards[0]['value'])
        this.suit = (draw.data.cards[0]['suit'])
        this.image = (draw.data.cards[0]['image'])
        console.log(`${this.value} of ${this.suit}`)

        // display card drawn
        let cardPile = $('.cardPile')
        cardPile.prepend(`<img src=${this.image}>`)

    }
}

// create instance and get deck_id
let d = new Deck
d.getInfo()

// button event to display card
$('.drawCard').on('click', function () {
    d.draw_card()
})

