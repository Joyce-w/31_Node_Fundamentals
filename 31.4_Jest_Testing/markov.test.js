const { MarkovMachine } = require('./markov')

describe('test markov generator', function () {
        let str;
        let chain;
        beforeAll(function(){
                str = new MarkovMachine('hello there')
                chain = str.makeChains()
                
        })
        test('test str output', function () {
                console.log(str)
                expect(str['words']).toContain('hello')
                expect(chain['there']).toEqual([null])
        })


})