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
        <p class="username">Bienvenido, ${localStorage.getItem("session")}
        </div>
        <span></span><li><a href="cart.html"><img height="25" src="cart.png" alt="Comprar"/></a><b class="cantidadproducto">${localStorage.getItem("quantity")? localStorage.getItem("quantity") : "0"}</b></li></span>
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

