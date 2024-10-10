let categorias = ["guitarras", "amplificadores", "bajos"];
let array = [];
let menu = `<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hit Sounds</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nosotros
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Empleo</a></li>
                  <li><a class="dropdown-item" href="#">Dónde encontrarnos</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Soporte</a></li>
                </ul>
              </li>
            </ul>
              <div class="d-flex" role="search">
        <input class="form-control me-2 input" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success boton" type="submit">Search</button>
              </div>
          </div>
        </div>
        <div class="Instrumentos"> 
            
        </div>
      </nav>`;
document.querySelector("header").innerHTML = menu;

for (let i = 0; i < categorias.length; i++) {
    const categoria = `<a href="#" class="btn btn-primary">${categorias[i]}</a>`;
array.push(categoria);
} 
document.querySelector('.Instrumentos').innerHTML = array.join("");

