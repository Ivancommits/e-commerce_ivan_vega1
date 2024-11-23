let id = parseInt(window.location.search.split("=")[1])
class Producto {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let prod = new Producto("Mustang", "muy caro", 1, 100000000, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg")

let data = [{
  "id": 1,
  "title": "Guitarra Criolla Clasica Color Negro",
  "Detail": "Guitarra Criolla Clásica en diversos colores, incluye funda",
  "img": "https://http2.mlstatic.com/D_NQ_NP_774542-MLU75918870442_042024-O.webp",
  "price": "$ 81278" ,
  "stock": 45,
  "category": "guitarras"
}, {
  "id": 2,
  "title": "Guitarra Acústica Parquer Master T",
  "Detail": "Disfrutá con esta guitarra Parquer de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Un modelo para cada guitarrista. La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos. Calidad que se hace notar.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_619349-MLU73600344414_122023-O.webp",
  "price": "$282281",
  "stock": 45,
  "category": "guitarras"
}, {
  "id": 3,
  "title": "Pack Guitarra Acustica Fender Fa-125",
  "Detail": "El paquete FA-125 ofrece un excelente sonido Fender y un valor tremendo para cualquiera que busque comenzar su viaje musical con el pie derecho. Este paquete incluye una guitarra acústica dreadnought FA-125 de rico sonido, junto con un soporte, afinador digital, púas, un paquete de cuerdas de repuesto y una suscripción gratuita de 90 días a Fender Play con acceso a cientos de lecciones en línea: todo lo que necesitas. Necesitas empezar a jugar al instante.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_860141-MLU73489147342_122023-O.webp",
  "price": "$ 327900",
  "stock": 45,
  "category": "guitarras"
}, {
  "id": 4,
  "title": "Guitarra eléctrica Fender Player Stratocaster de aliso 2010 3-color",
  "Detail": "Hablar de Fender es entender la música en todo el mundo y en muchos géneros. Es una de las marcas líderes en definir los sonidos que escuchamos. A su vez, satisface las necesidades de guitarristas al crear productos de calidad y respaldarlos con servicio y estabilidad.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_668933-MLA74781913203_022024-O.webp",
  "price": "2718230",
  "stock": 50,
"category": "guitarras"}, {
  "id": 5,
  "title": "Guitarra eléctrica Squier by Fender Bullet Stratocaster HT",
  "Detail": "Disfrutá con esta guitarra Squier by Fender Bullet de la conexión con la música. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Explorá, amplificá tu creatividad y desarrollá tu pasión.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_889545-MLU75128427037_032024-O.webp",
  "price": "$ 446975",
  "stock": 5,
  "category": "guitarras"
}, {
  "id": 6,
  "title": "Guitarra Eléctrica Newen Frizz Lenga Maciza Patagónica",
  "Detail": "Se caracteriza por su exclusivo y propio diseño. Su característico sonido se obtiene desde sus micrófonos Paradynamic y su madera maciza. Este cuerpo totalmente construido de madera solida de la Patagonia, le proporciona una sonoridad muy rica en armónicos y sustain. El mango construido en maple con trastera de palo rosa posee un alma de acero que le otorga mayor estabilidad en la calibración y afinación.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_785302-MLA53367428738_012023-O.webp",
  "price": "$195800",
  "stock": 4,
"category": "guitarras"}, {
  "id": 7,
  "title": "Guitarra eléctrica Gibson Skay Collection SG",
  "Detail": "Gibson es una de las marcas con mayor tradición en el mercado: más de 100 años en la fabricación de guitarras. Se fundamenta a la calidad, la innovación y la excelencia del sonido para que los amantes de la música disfruten la compañía de una Gibson.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_987646-MLA74782155663_022024-O.webp",
  "price": " 4704512",
  "stock": 1,
  "category": "guitarras"
}, {
  "id": 8,
  "title": "Amplificador Ross G10 De 10 Watts Para Guitarra Electrica Color Negro/Amarillo",
  "Detail": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando. Aprovechalo al máximo. Si lo que estás buscando es un equipo más ligero, resistente y potente, este amplificador de tipo transistor es ideal para vos.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_922590-MLU78482685187_082024-O.webp",
  "price": "$ 103990",
  "stock": 15,
  "category": "amplificadores"
}, {
  "id": 9,
  "title": "Amplificador Ross B15 Para Bajo De 15w Color Negro C",
  "Detail": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando. Aprovechalo al máximo. Si lo que estás buscando es un equipo más ligero, resistente y potente, este amplificador de tipo transistor es ideal para vos.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_917835-MLU78211819458_082024-O.webp",
  "price": "$ 159535",
  "stock": 23,
  "category": "amplificadores"
}, {
  "id": 10,
  "title": "Amplificador Marshall Mg Gold Mg15 Transistor Para Guitarra De 15w Color Negro 220v",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_868315-MLU76720666320_062024-O.webp",
  "price": "$ 288744",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 11,
  "title": "Amplificador Marshall MG Gold MG30FX Transistor para guitarra de 30W",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_868568-MLU77629909828_072024-O.webp",
  "price": "$ 485270",
  "stock": 2,
  "category": "amplificadores"
}, {
  "id": 12,
  "title": "Robin Hood",
  "Detail": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "img": "http://dummyimage.com/237x100.png/ff4444/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 13,
  "title": "Bugmaster (Mushishi)",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "img": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 14,
  "title": "Carey Treatment, The",
  "Detail": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/146x100.png/cc0000/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 15,
  "title": "Song of the South",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/134x100.png/dddddd/000000",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 16,
  "title": "I Capture the Castle",
  "Detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/106x100.png/ff4444/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 17,
  "title": "Hero (Ying xiong)",
  "Detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "img": "http://dummyimage.com/154x100.png/cc0000/ffffff",
  "price": "$",
  "stock": 45,
"category": "amplificadores"}, {
  "id": 18,
  "title": "Around the World",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/179x100.png/cc0000/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 19,
  "title": "Tales from Earthsea (Gedo Senki)",
  "Detail": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "img": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 20,
  "title": "Eureka (Yurîka)",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "img": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "price": "$",
  "stock": 45,
  "category": "amplificadores"
}, {
  "id": 21,
  "title": "Bajo Electrico Squier By Fender Sonic Bronco Bass",
  "Detail": "Marca Fender.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_616764-MLU73701559951_122023-O.webp",
  "price": "$ 595964",
  "stock": 13,
  "category": "bajos"
}, {
  "id": 22,
  "title": "Memento Mori (Yeogo goedam II)",
  "Detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "img": "http://dummyimage.com/126x100.png/dddddd/000000",
  "price": "$",
  "stock": 45,
  "category": "bajos"
}, {
  "id": 23,
  "title": "Coronado",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
  "price": "$",
  "stock": 45,
  "category": "bajos"
}, {
  "id": 24,
  "title": "Red Salute",
  "Detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/142x100.png/dddddd/000000",
  "price": "$",
  "stock": 45,
  "category": "bajos"
}, {
  "id": 25,
  "title": "Babar The Movie",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/120x100.png/ff4444/ffffff",
  "price": "$",
  "stock": 45,
  "category": "bajos"
}];


let prodEncontrado = data.find((producto) => producto.id === id); 
const card1 = `<div class="card" style="width: 18rem;">
  <img src="${prodEncontrado.img}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${prodEncontrado.title}</h5>
    <p class="card-text">${prodEncontrado.Detail}</p>
    <p class="card-text">${prodEncontrado.price}</p>
    <p class="card-text">Stock: ${prodEncontrado.stock}</p>
    ${localStorage.getItem("session")?
       `
      <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="restButton()">-</button>
            <input class="form-control text-center shadow-none" id="number-counter" value="1" type="text"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="addButton()">+</button>
          </div>
          <button type="button" class="btn btn-dark" onclick="addProductToCart()">Añadir al carrito</button>`
           
       : `<a href="./login.html"><button class="btn btn-outline-success">Para comprar, debes iniciar sesión</button></a>`}
  </div>
</div>`;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelector(".container").innerHTML = card1;
let input = document.querySelector("#producto main input");
function addButton() {

  if(input.value < prodEncontrado.stock) {
    input.value = String(Number(input.value) + 1); 
  } else {
    alert("fuera de stock!");
  }
}

 function restButton() {
  if (input.value > 1) {
    input.value -= 1;
  }
}



function addProductToCart() {
if(cart.length === 0) {
  if(parseInt(input.value) > prodEncontrado.stock) {
    alert("No hay suficiente stock");
  } else {
    prodEncontrado.price = parseInt(prodEncontrado.price.split("$")[1])
    cart.push({prod:prodEncontrado, quantity: parseInt(input.value)})
    return localStorage.setItem("cart", JSON.stringify(cart));
  }
} 

let existingItemIndex = cart.findIndex((card1) => card1.prod.id == prodEncontrado.id);
const foundItem = cart[existingItemIndex];
if (!foundItem) {
  prodEncontrado.price = parseInt(prodEncontrado.price.split("$")[1])
  cart.push({prod:prodEncontrado, quantity: parseInt(input.value)})
    return localStorage.setItem("cart", JSON.stringify(cart));
}
if ((foundItem.quantity + parseInt(input.value)) > prodEncontrado.stock) {
  alert("sin stock!");
  return
} 
foundItem.quantity += parseInt(input.value);
localStorage.setItem("cart", JSON.stringify(cart));
Toastify({

  text: "Producto agregado!",
  
  duration: 3000
  
  }).showToast()
}

