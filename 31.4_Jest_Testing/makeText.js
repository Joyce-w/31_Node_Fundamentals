/** Command-line tool to generate Markov text. */
const fs = require('fs')
const process = require('process')
const { MarkovMachine } = require('./markov')
const axios = require('axios')


function genText(text) {
        let markovText = new MarkovMachine(text);
        console.log(markovText.makeText());
}


// make function for reading file
function filePath(path) {
        fs.readFile(path, 'utf8', function (err, data){
                if (err) {
                        console.log('There was an error in making a text:', err)
                        process.exit(1)
                }
                else {
                        genText(data)
                }
        })
}

// make function for reading url
async function webPath(path) {
        let res;
        try {
                res = await axios.get(path)
        }
        catch (err){
                console.log(err)
                process.exit(1)
        }
        genText(res.data)
}


let path = process.argv[2]
let input = process.argv[3]

if (path == 'file') {
        filePath(input)
}
else if (path == 'url') {
        webPath(input) 
} 
else {
        console.error('error in file type, either "url" or "file" allowed')
        process.exit(1)
}
