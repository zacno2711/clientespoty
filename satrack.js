let uri = "https://locationintegrationapi.satrack.com/api/location"

let parametrosPeticion ={
    method:"GET",
    headers:{
        
    }
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return (respuesta.json())
    })
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(error){
    console.log(error)
})