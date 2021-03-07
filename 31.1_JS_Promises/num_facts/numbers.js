// Ask for a number
let num = prompt('pick a number')

    let num_facts = [];

    // Make request for number 4 times
    for (let i = 1; i < 5; i++){
        let res = axios.get(`http://numbersapi.com/${num}?json`)
        num_facts.push(res)
    }
    
    // display the text trivia for each response
    Promise.all(num_facts)
        .then(num_facts => num_facts.forEach(n => (displayFacts(n.data.text))))
        .catch((data) => console.log(data))    

    // Make and append trivia to the page
    let trivia_p = document.getElementById('trivia')

    function displayFacts(text) {
        const li = document.createElement('li')
        li.innerText = text
        trivia_p.append(li)
}