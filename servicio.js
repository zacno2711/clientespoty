let uri ="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us"



let token = "Bearer BQC6xdgPgEgcFwkyyKm7so3nFxtfRg8zRO2uNrKlYjnfuE6igDKcBMpud2pe17eds4BEw9xPM7NBPQaSQyGV1AiuLc8UBH7KlzbR0SxaIi5c02p02MeqJ3Kk8eNGnKJ3weieBjaWyBk-zK3P6KYUMVYPI912AsrhMC8"

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
    console.log(respuesta)//objeto
    /*console.log(respuesta.tracks)//arreglo
    console.log(respuesta.tracks[0])//objeto
    console.log(respuesta.tracks[0].name)
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].album.images[0].url) 
    */
   paintDates(respuesta.tracks)
 
    

})
.catch(function(error){
    console.log(error)
})

function paintDates (dates){

    let fila=document.getElementById("fila")
    dates.forEach(function(cancion){
        

        let columna=document.createElement("div")
        columna.classList.add("col")
        
        let tarjeta =document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen =document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        let titulo=document.createElement("h2")
        titulo.textContent=cancion.name

        let tema=document.createElement("audio")
        tema.classList.add("controller")
        tema.src=cancion.album.preview_url
      


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(tema)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        

    })

}