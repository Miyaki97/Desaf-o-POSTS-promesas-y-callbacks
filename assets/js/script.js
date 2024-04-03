const boton = document.querySelector("#botonPosts")
const dataHtml = document.querySelector("#postData")

const API_URL = "https://jsonplaceholder.typicode.com/posts"


const displayData = (data) => {
data.forEach((element)=> {          
    dataHtml.innerHTML += `<li>${element.title}<br>${element.body}</li>` 
})
}

const getData = async() => {
    const res = await fetch(API_URL)  
    console.log(res)

if(!res.ok){
    console.log("la appi falló")
    console.log("código de error:", res.status)
    return 
}

const database = await res.json()
  displayData(database)
 console.log(database)
}

boton.addEventListener("click", getData)