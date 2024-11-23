let cantidadTotal = 0;
let sessionCart = JSON.parse(localStorage.getItem("cart")) || [];
for (let y = 0; y < sessionCart.length; y++) {
 cantidadTotal += sessionCart[y].quantity;
}
let categorias = ["Guitarras", "Amplificadores", "Bajos"];
let array = [];
let menu = `<link href="./styles.css" rel="stylesheet">
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">Hit Sounds</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
              <div class="d-flex" role="search">
        <input class="form-control me-2 input" type="search" placeholder="Search" aria-label="Search">
        <a href="./index.html" id="botonborrar">X</a>
        <button class="btn btn-outline-success boton" type="submit">Search</button>
              </div>
        <div>
        <p class="username">Bienvenido,${localStorage.getItem("session")}
        </div>
        <span></span><li><a href="/cart.html"><img height="25" src="cart.png" alt="Comprar"/></a><b class="cantidadproducto">${sessionCart ? cantidadTotal : "0"}</b></li></span>
          </div>
        </div>
        <div class="Instrumentos">    
        </div>
        <div>
        ${localStorage.getItem("session")?`<button class="btn btn-outline-success" onclick = "closeSession()">Cerrar sesión</button>`: `<a href="./login.html"><button class="btn btn-outline-success"> Iniciar sesión</button></a>`}
        </div>
      </nav>`;
document.querySelector("header").innerHTML = menu;

for (let i = 0; i < categorias.length; i++) {
    const categoria = `<button class="btn btn-primary category" id="categorias"><a href="#">${categorias[i]}</a></button>`;
array.push(categoria);
} 
document.querySelector('.Instrumentos').innerHTML = array.join("");

function closeSession() {
  localStorage.clear();
  location.href="./index.html";
}

let botonesCateg = document.querySelectorAll(".category");
for (const botonData of botonesCateg) {
  botonData.addEventListener("click", () => {
    console.log(botonData.innerText)
    botones(botonData.innerText);
  })
}

function botones(category) {
let dataFiltered = data.filter((producto) => producto.category == category);
let busqueda = dataFiltered.map((producto) => {
  if(producto.category === category){
   return `<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>

  </div>
</div>`
  } 
}) 
document.querySelector(".container").innerHTML = busqueda.join("");
};
