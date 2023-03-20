import Deck from "../src/models/deck";

describe("Deck", function () {
    describe('shuffle', function () {
        it('Mixed up', function () {
            const config = { cards: [1, 2, 3, 4] }
            let deck = new Deck(config)

            expect(deck.shuffle()).toBe(true)
        })

        it('deck without cards ', function () {
            const config = { cards: [] }
            let deck = new Deck(config)

            expect(deck.shuffle()).toBe(false)
        })
    })

    describe('draw', function () {
        it('draw : pioche,retourne et retire la carte', function () {
            const config = { cards: [1, 2, 3] }
            const pioche = 1
            let deck = new Deck(config)

            expect(deck.draw(config)).toEqual(pioche)
        })
    })

    describe('getCardsCount', function () {
        it('getCardsCount : Retourne les cartes du Deck ', function () {
            const config = { cards: [1, 2, 3] }
            const pioche = 3
            let deck = new Deck(config)

            expect(deck.getCardsCount(config)).toEqual(pioche)
        })
    })
})