// document.querySelector(".submit").addEventListener('click' , ()=>{
//     let input = document.querySelector('.text').value;

//     let promise = fetch(`https://restcountries.com/v3.1/name/${input}`).then((data)=>{
//         return data.json()
//     }).then((res)=>{
//         document.write(res);
//     })
// })



// fetch(`https://restcountries.com/v3.1/name/${name}`).then((data) => {
//     return data.json();
// }).then((res) => {
//     console.log(res[0].borders);
//     let image = document.querySelector('img');
//     image.src = res[0].flags.png;
//     document.querySelector('.card-title').innerHTML = res[0].altSpellings[2];
//     document.querySelector('.name').innerHTML = res[0].altSpellings[1]
//     document.querySelector('.capital').innerHTML = res[0].capital[0]
//     document.querySelector('.border1').innerHTML = res[0].borders[0]
//     document.querySelector('.border2').innerHTML = res[0].borders[1]
//     document.querySelector('.border3').innerHTML = res[0].borders[2]
//     document.querySelector('.border4').innerHTML = res[0].borders[3]
// })

// let name = prompt('enter your country name')

let submit = document.querySelector('#submitBtn');
submit.addEventListener('click', () => {
    let name = document.querySelector('input').value
    fetch(`https://restcountries.com/v3.1/name/${name}`).then((data) => {
    return data.json();
}).then((res) => {
    console.log(res[0].borders);
    let image = document.querySelector('img');
    image.src = res[0].flags.png;
    document.querySelector('.card-title').innerHTML = res[0].altSpellings[2];
    document.querySelector('.name').innerHTML = res[0].altSpellings[1]
    document.querySelector('.capital').innerHTML = res[0].capital[0]
    document.querySelector('.border1').innerHTML = res[0].borders[0]
    document.querySelector('.border2').innerHTML = res[0].borders[1]
    document.querySelector('.border3').innerHTML = res[0].borders[2]
    document.querySelector('.border4').innerHTML = res[0].borders[3]
})
})