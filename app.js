
const submit = document.querySelector('#submitBtn');
const cardBody = document.querySelector(".card-body");

submit.addEventListener('click', () => {
    let name = document.querySelector('input').value
    fetch(`https://restcountries.com/v3.1/name/${name && "pakistan"}`).then((data) => {
        return data.json();
    }).then((res) => {
        let image = document.querySelector('img');
        image.src = res[0].flags.png;
        document.querySelector('.card-title').innerHTML = res[0].altSpellings[2];
        document.querySelector('.name').innerHTML = res[0].altSpellings[1]
        document.querySelector('.capital').innerHTML = res[0].capital[0]

        let borders = res[0].borders;
        let allBOrders = ""

        borders.forEach(element => {
            allBOrders += `
                <a href="#" class="btn btn-primary">${element}</a>
            `
        });
        cardBody.innerHTML = allBOrders;
        console.log(res[0])
    })
})