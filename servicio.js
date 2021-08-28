let uri ="https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC/top-tracks?market=us"

let token = "Bearer BQCQpy9PsEXLP8KXxxvK2opigZLd_oBgForxtbL0FvMC6Vgr6XC1KIMEJlvVRwgPe_BmdpMwn3yixbNAZhoiwPZ_huBOjbiKJ0XjqEsOVt-n-JL37oxlYRbQAXpjExiY0QI_jvO9bNE2PuYxzpf0orHvhQmhPaqEq6I"

let parametrosPeticion ={
    method:"GET",
    headers:{
        Authorization:token
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