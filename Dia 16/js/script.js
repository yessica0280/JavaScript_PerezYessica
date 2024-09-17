fetch('https://www.datos.gov.co/resource/uqfr-drs5.json')
.then(res => res.json())
.then(data =>{
    console.log(data)
})
