let infor=[];
fetch('https://randomuser.me/api/')
.then (res => res.json())
.then(data =>{
    infor.push(data);
    console.log(data.results[0].picture.large);
    document.getElementById("circulo").innerHTML+=`
    <img id="img" src="${data.results[0].picture.large}">
    `
    document.getElementById("texto").addEventListener("click", ver)
    function ver(){
        document.getElementById("data")
    }
})
function mostrar(){
    document.getElementById("texto").innerHTML=`
    <p class="letra">Hi, My name is<span class="mover-texto5">${infor[0].results[0].login.username}</span></p>
    `
}
function mostrar1(){
    document.getElementById("texto").innerHTML=`
    <p class="letra1">My email address is<span class="mover-texto3">${infor[0].results[0].email}</span></p>
    `
}
function mostrar2(){
    document.getElementById("texto").innerHTML=`
    <p class="letra2">My birthday is<span class="mover-texto4">${infor[0].results[0].dob.date}</span></p>
    `
}
function mostrar3(){
    document.getElementById("texto").innerHTML=`
    <p class="letra3">My address is<span class="mover-texto2">${infor[0].results[0].location.street.number}
    ${infor[0].results[0].location.street.name}</span></p>
    `
}
function mostrar4(){
    document.getElementById("texto").innerHTML=`
    <p class="letra4">My phone number is<span class="mover-texto1">${infor[0].results[0].phone}</span></p>
    `
}
function mostrar5(){
    document.getElementById("texto").innerHTML=`
    <p class="letra5">My password is<span class="mover-texto">${infor[0].results[0].login.password}</span></p>
    `
}
function borrar(){
    document.getElementById("texto").innerHTML="";
}