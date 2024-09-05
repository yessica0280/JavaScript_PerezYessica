fetch('https://randomuser.me/api/')
.then (res => res.json())
.then(data =>{
    document.getElementById("circulo").innerHTML+=`
    <img id="img" src="${data.results[0].picture.large}">
    `
    document.getElementById("nombre").innerHTML+=`
    <p src="${data.results[0].name.title}">
    `
})