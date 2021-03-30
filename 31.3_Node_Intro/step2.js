const fs = require('fs')
const axios = require('axios')
const process = require('process')

// step 1
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('ERROR',err)
            process.exit(1)
        }
        else {
            console.log(data)
        }
    })    
}


// step 2
async function webCat(url) {
    try {
        axios.get(url).then(function(resp){
            console.log(resp.data)

        })        
    }
    catch(err) {
        console.error('ERROR', err)
        process.exit(1)
    }
}

let path = process.argv[2]

// if path is url, run webCat(), otherwise run cat()
if (path.slice(0, 4) === 'http') {
    webCat(path)
}
else {
    cat(path)
}
