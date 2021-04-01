const { MarkovMachine } = require('./markov')

describe('test markov generator', function () {
        let str;
        let chain;
        beforeAll(function(){
                str = new MarkovMachine('My name is Joyce and I like to walk my dog. My dog is a cute golden reteriver. goldens are the best dog because they are well behaved. Joyce can be well behaved as well')
                chain = str.makeChains()
                text = str.makeText(numWords = 100)
                
        })
        test('test str output', function () {
                expect(str['words']).toContain('Joyce')
        })

        test(' test makeText function ', function () {
                let strArr = text.split(' ')
                expect(strArr.length).toEqual(100)
        })


})