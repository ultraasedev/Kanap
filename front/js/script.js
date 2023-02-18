//recuperer l'url back end

const url = "http://127.0.0.1:3000/api/products/"
const container = document.getElementById("items")

//recupere les infos et les traitre

const getArticles = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
        
    })
    .then(function (data){
        console.log(data)
     //on traite les articles & donnees

     
      for(product in data){
        container.innerHTML += `<a href="./product.html?id=42">
        <article>
          <img src="${data[product].imageUrl}" alt="${data[product].altTxt}">
          <h3 class="productName">${data[product].name}</h3>
          <p class="productDescription">${data[product].description}</p>
        </article>
      </a>`
        
      }
    })
}


//lancement de la fonction getArticles
getArticles()
