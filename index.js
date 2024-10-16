let h1 = document.querySelector("h1").innerText = "Productos";
let data = [{
  "id": 1,
  "title": "Amy's O",
  "Detail": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "img": "http://dummyimage.com/173x100.png/ff4444/ffffff",
  "price": 31,
  "stock": 31,
  "category": "guitarras"
}, {
  "id": 2,
  "title": "My Name Is Julia Ross",
  "Detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
  "price": 52,
  "stock": 66,
  "category": "guitarras"
}, {
  "id": 3,
  "title": "Watch, The",
  "Detail": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/243x100.png/cc0000/ffffff",
  "price": 49,
  "stock": 62,
  "category": "guitarras"
}, {
  "id": 4,
  "title": "Crippled Masters (Tian can di que)",
  "Detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "img": "http://dummyimage.com/150x100.png/cc0000/ffffff",
  "price": 50,
  "stock": 8
,
"category": "guitarras"}, {
  "id": 5,
  "title": "Company of Wolves, The",
  "Detail": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "img": "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
  "price": 69,
  "stock": 83,
  "category": "guitarras"
}, {
  "id": 6,
  "title": "Beach Girls and the Monster, The",
  "Detail": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "img": "http://dummyimage.com/137x100.png/dddddd/000000",
  "price": 82,
  "stock": 9
,
"category": "guitarras"}, {
  "id": 7,
  "title": "Junior Prom",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/205x100.png/dddddd/000000",
  "price": 88,
  "stock": 13,
  "category": "guitarras"
}, {
  "id": 8,
  "title": "At First Sight",
  "Detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
  "price": 76,
  "stock": 55,
  "category": "amplificadores"
}, {
  "id": 9,
  "title": "I Love, You Love (Ja milujem, ty milujes)",
  "Detail": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "img": "http://dummyimage.com/173x100.png/cc0000/ffffff",
  "price": 18,
  "stock": 76,
  "category": "amplificadores"
}, {
  "id": 10,
  "title": "Island of Dr. Moreau, The",
  "Detail": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "img": "http://dummyimage.com/240x100.png/ff4444/ffffff",
  "price": 83,
  "stock": 54,
  "category": "amplificadores"
}, {
  "id": 11,
  "title": "Exit to Eden",
  "Detail": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "img": "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
  "price": 88,
  "stock": 58,
  "category": "amplificadores"
}, {
  "id": 12,
  "title": "Robin Hood",
  "Detail": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "img": "http://dummyimage.com/237x100.png/ff4444/ffffff",
  "price": 67,
  "stock": 17,
  "category": "amplificadores"
}, {
  "id": 13,
  "title": "Bugmaster (Mushishi)",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "img": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
  "price": 59,
  "stock": 22,
  "category": "amplificadores"
}, {
  "id": 14,
  "title": "Carey Treatment, The",
  "Detail": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/146x100.png/cc0000/ffffff",
  "price": 66,
  "stock": 21,
  "category": "amplificadores"
}, {
  "id": 15,
  "title": "Song of the South",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/134x100.png/dddddd/000000",
  "price": 55,
  "stock": 76,
  "category": "amplificadores"
}, {
  "id": 16,
  "title": "I Capture the Castle",
  "Detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/106x100.png/ff4444/ffffff",
  "price": 19,
  "stock": 98,
  "category": "amplificadores"
}, {
  "id": 17,
  "title": "Hero (Ying xiong)",
  "Detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "img": "http://dummyimage.com/154x100.png/cc0000/ffffff",
  "price": 24,
  "stock": 2
,
"category": "amplificadores"}, {
  "id": 18,
  "title": "Around the World",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/179x100.png/cc0000/ffffff",
  "price": 76,
  "stock": 43,
  "category": "amplificadores"
}, {
  "id": 19,
  "title": "Tales from Earthsea (Gedo Senki)",
  "Detail": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "img": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
  "price": 62,
  "stock": 79,
  "category": "amplificadores"
}, {
  "id": 20,
  "title": "Eureka (Yurîka)",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "img": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "price": 43,
  "stock": 75,
  "category": "amplificadores"
}, {
  "id": 21,
  "title": "Kiki",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "img": "http://dummyimage.com/177x100.png/dddddd/000000",
  "price": 70,
  "stock": 69,
  "category": "bajos"
}, {
  "id": 22,
  "title": "Memento Mori (Yeogo goedam II)",
  "Detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "img": "http://dummyimage.com/126x100.png/dddddd/000000",
  "price": 27,
  "stock": 11,
  "category": "bajos"
}, {
  "id": 23,
  "title": "Coronado",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
  "price": 18,
  "stock": 92,
  "category": "bajos"
}, {
  "id": 24,
  "title": "Red Salute",
  "Detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/142x100.png/dddddd/000000",
  "price": 91,
  "stock": 31,
  "category": "bajos"
}, {
  "id": 25,
  "title": "Babar The Movie",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/120x100.png/ff4444/ffffff",
  "price": 85,
  "stock": 45,
  "category": "bajos"
}];

function cards () {

let cards = data.map((producto) => `<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
    <a href="./producto.html?id=${producto.id}" class="."><button></button></a>
  </div>
</div>`);
document.querySelector(".container").innerHTML = cards.join("");
}

cards();

function buscadorf() {
  let inputBuscador = document.querySelector(".input");

  
  let filterData = data.filter((producto) => producto.title == inputBuscador.value);
  let cards = filterData.map((producto) => `<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
    <a href="./producto.html?id=${producto.id}" class="."><button></button></a>
  </div>
</div>`);
  document.querySelector(".container").innerHTML = cards.join("");
  
  };

let botonBuscador = document.querySelector(".boton");  
botonBuscador.addEventListener("click", buscadorf);

let botonesCateg = document.querySelectorAll(".category");
for (const botonData of botonesCateg) {
  botonData.addEventListener("click", () => {
    botones(botonData.innerText);
  })
}

function botones(category) {
let dataFiltered = data.filter((producto) => producto.category == category);
let busqueda = dataFiltered.map((producto) => {
  if(producto.category === category){
   return `<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
    <a href="./producto.html?id=${producto.id}" class="."><button></button></a>
    <p class="category">${producto.category}</p>
  </div>
</div>`
  } 
}) 
document.querySelector(".container").innerHTML = busqueda.join("");
};