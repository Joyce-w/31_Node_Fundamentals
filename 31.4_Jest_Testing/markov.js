/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let obj = {}
    //loop thru this.words and set keyvalues
    for (let w in this.words) {
      let temp = this.words[w]
      let k = parseInt(w) + 1
      // check if key is already in obj
      if (!(temp in obj)) {
        // check if next work is undefined
        if (this.words[k] == undefined) {
          obj[temp] = [null]
        } else {
          obj[temp] = [this.words[k]]              
        }
      }
      else {
        // if key already exists, add onto the values
        let arr = obj[temp]
        arr.push(this.words[k])
        obj[temp] = arr
      }
    }
    return obj
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

module.exports = { MarkovMachine }
