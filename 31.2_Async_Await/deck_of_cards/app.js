let choosen_num = prompt("Enter a number to get facts!")

get_num_fact(choosen_num)

async function get_num_fact(num) {
    let num1 = axios.get(`http://numbersapi.com/${num}`)
    let num2 = axios.get(`http://numbersapi.com/${num}`)
    let num3 = axios.get(`http://numbersapi.com/${num}`)
    let num4 = axios.get(`http://numbersapi.com/${num}`)

    let num1Promise = await num1
    let num2Promise = await num2
    let num3Promise = await num3
    let num4Promise = await num4

    $('li').remove()

    $('ul').append(`<li>${num1Promise.data}</li>`)
    $('ul').append(`<li>${num2Promise.data}</li>`)
    $('ul').append(`<li>${num3Promise.data}</li>`)
    $('ul').append(`<li>${num4Promise.data}</li>`)
}

