let h1 = document.querySelector("h1").innerText = "Productos";
let data = [{
  "id": 1,
  "title": "Guitarra Criolla Clasica Color Negro",
  "Detail": "Guitarra Criolla Clásica en diversos colores, incluye funda",
  "img": "https://http2.mlstatic.com/D_NQ_NP_774542-MLU75918870442_042024-O.webp",
  "price": "$ 81.278" ,
  "stock":"Stock: 11",
  "category": "guitarras"
}, {
  "id": 2,
  "title": "Guitarra Acústica Parquer Master T",
  "Detail": "Disfrutá con esta guitarra Parquer de la conexión con la música. Está diseñada para aficionados y profesionales. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Un modelo para cada guitarrista. La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos. Calidad que se hace notar.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_619349-MLU73600344414_122023-O.webp",
  "price": "$282.281",
  "stock":"Stock: 16",
  "category": "guitarras"
}, {
  "id": 3,
  "title": "Pack Guitarra Acustica Fender Fa-125",
  "Detail": "El paquete FA-125 ofrece un excelente sonido Fender y un valor tremendo para cualquiera que busque comenzar su viaje musical con el pie derecho. Este paquete incluye una guitarra acústica dreadnought FA-125 de rico sonido, junto con un soporte, afinador digital, púas, un paquete de cuerdas de repuesto y una suscripción gratuita de 90 días a Fender Play con acceso a cientos de lecciones en línea: todo lo que necesitas. Necesitas empezar a jugar al instante.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_860141-MLU73489147342_122023-O.webp",
  "price": "$ 327.900",
  "stock":"Stock: 19",
  "category": "guitarras"
}, {
  "id": 4,
  "title": "Guitarra eléctrica Fender Player Stratocaster de aliso 2010 3-color",
  "Detail": "Hablar de Fender es entender la música en todo el mundo y en muchos géneros. Es una de las marcas líderes en definir los sonidos que escuchamos. A su vez, satisface las necesidades de guitarristas al crear productos de calidad y respaldarlos con servicio y estabilidad.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_668933-MLA74781913203_022024-O.webp",
  "price": "$ 2.718.230",
  "stock":"Stock: 23",
"category": "guitarras"}, {
  "id": 5,
  "title": "Guitarra eléctrica Squier by Fender Bullet Stratocaster HT",
  "Detail": "Disfrutá con esta guitarra Squier by Fender Bullet de la conexión con la música. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Explorá, amplificá tu creatividad y desarrollá tu pasión.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_889545-MLU75128427037_032024-O.webp",
  "price": "$ 446.975",
  "stock":"Stock: 5",
  "category": "guitarras"
}, {
  "id": 6,
  "title": "Guitarra Eléctrica Newen Frizz Lenga Maciza Patagónica",
  "Detail": "Se caracteriza por su exclusivo y propio diseño. Su característico sonido se obtiene desde sus micrófonos Paradynamic y su madera maciza. Este cuerpo totalmente construido de madera solida de la Patagonia, le proporciona una sonoridad muy rica en armónicos y sustain. El mango construido en maple con trastera de palo rosa posee un alma de acero que le otorga mayor estabilidad en la calibración y afinación.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_785302-MLA53367428738_012023-O.webp",
  "price": "$ 195.800",
  "stock":"Stock: 4",
"category": "guitarras"}, {
  "id": 7,
  "title": "Guitarra eléctrica Gibson Skay Collection SG",
  "Detail": "Gibson es una de las marcas con mayor tradición en el mercado: más de 100 años en la fabricación de guitarras. Se fundamenta a la calidad, la innovación y la excelencia del sonido para que los amantes de la música disfruten la compañía de una Gibson.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_987646-MLA74782155663_022024-O.webp",
  "price": "$ 4.704.512",
  "stock":"Stock: ¡Última Disponible!",
  "category": "guitarras"
}, {
  "id": 8,
  "title": "Amplificador Ross G10 De 10 Watts Para Guitarra Electrica Color Negro/Amarillo",
  "Detail": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando. Aprovechalo al máximo. Si lo que estás buscando es un equipo más ligero, resistente y potente, este amplificador de tipo transistor es ideal para vos.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_922590-MLU78482685187_082024-O.webp",
  "price": "$ 103.990",
  "stock":"Stock: 15",
  "category": "amplificadores"
}, {
  "id": 9,
  "title": "Amplificador Ross B15 Para Bajo De 15w Color Negro C",
  "Detail": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando. Aprovechalo al máximo. Si lo que estás buscando es un equipo más ligero, resistente y potente, este amplificador de tipo transistor es ideal para vos.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_917835-MLU78211819458_082024-O.webp",
  "price": "$ 159.535",
  "stock":"Stock: 23",
  "category": "amplificadores"
}, {
  "id": 10,
  "title": "Amplificador Marshall Mg Gold Mg15 Transistor Para Guitarra De 15w Color Negro 220v",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_868315-MLU76720666320_062024-O.webp",
  "price": "$ 288.744",
  "stock":"Stock: 45",
  "category": "amplificadores"
}, {
  "id": 11,
  "title": "Amplificador Marshall MG Gold MG30FX Transistor para guitarra de 30W",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_868568-MLU77629909828_072024-O.webp",
  "price": "$ 485.270",
  "stock":"Stock: 2",
  "category": "amplificadores"
}, {
  "id": 12,
  "title": "Marshall Mg10 Gold Amplificador Guitarra 10 Watts Distorsion",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_969544-MLU73214355537_122023-O.webp",
  "price": "$ 346.982",
  "stock":"Stock: 6",
  "category": "amplificadores"
}, {
  "id": 13,
  "title": "Mini Amplificador Guitarra Marshall Ms-4 + Color Negro",
  "Detail": "El MS4 ofrece la presencia y el atractivo de un Stack de Marshall en un formato compacto. Cuenta con controles de ganancia, volumen y tono, y entrega un sonido similar al del MS-2, pero con dimensiones de 25 x 11 x 6 cm y dos altavoces. Incluye un arco de protección en su panel posterior que permite posicionarlo inclinado. El MS-4 puede operar con baterías o con un adaptador de corriente.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_964288-MLU74132737913_012024-O.webp",
  "price": "$ 116.911",
  "stock":"Stock: 8",
  "category": "amplificadores"
}, {
  "id": 14,
  "title": "Amplificador De Guitarra Portátil Orange Crush Mini 3w 9v",
  "Detail": "Amplificador de Guitarra Portátil Orange Crush Mini",
  "img": "https://http2.mlstatic.com/D_NQ_NP_934202-MLA44973568992_022021-O.webp",
  "price": "$ 158.700",
  "stock":"Stock: 23",
  "category": "amplificadores"
}, {
  "id": 15,
  "title": "Amplificador Laney Richter Rb2 Combo 30w Para Bajo",
  "Detail": "Amplificador De Bajo Laney Richter RB2",
  "img": "https://http2.mlstatic.com/D_NQ_NP_641344-MLA48801929632_012022-O.webp",
  "price": "$ 516.022",
  "stock":"Stock: 8",
  "category": "amplificadores"
}, {
  "id": 16,
  "title": "Amplificador De Bajo Electrico Sunset Con Potencia De 15w",
  "Detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_791177-MLA78960278176_092024-O.webp",
  "price": "$",
  "stock":"Stock: 26",
  "category": "amplificadores"
}, {
  "id": 17,
  "title": "Amplificador Guitarra Eléctrica 10 Watts Distorsión",
  "Detail": "Amplificador Sunset TG10 para guitarra eléctrica/electroacústica 10W. Amplificador ideal para estudio, incluye entrada de auricular y salida auxiliar.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_626104-MLA79167733293_092024-O.webp",
  "price": "$100.493",
  "stock":"Stock: 13",
"category": "amplificadores"}, {
  "id": 18,
  "title": "Amplificador De Bajo Eléctrico 15w Sunset Series Color Naranja",
  "Detail": "Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_652839-MLU73125315692_122023-O.webp",
  "price": "$ 162.877",
  "stock":"Stock: 18",
  "category": "amplificadores"
}, {
  "id": 19,
  "title": "Amplificador Marshall MG Gold MG15G Transistor para guitarra de 15W",
  "Detail": "Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_793836-MLU75174595542_032024-O.webp",
  "price": "$ 419.249",
  "stock":"Stock: 18",
  "category": "amplificadores"
}, {
  "id": 20,
  "title": "Amplificador Marshall Jvm205c Combo Valvular 50w Made In Uk Color Negro/Dorado",
  "Detail": "Amplificador Marshall JVM205C Combo Valvular 50W Made In UK. Con tu amplificador Marshall JVM JVM205C, vas a poder mejorar todos los sonidos y encontrarás las melodías que estás buscando. Gracias a su potencia de 50 W, disfrutarás de un tono real y una gran apariencia.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_750665-MLA43361136474_092020-O.webp",
  "price": "$ 2.667.021",
  "stock":"Stock: 29",
  "category": "amplificadores"
}, {
  "id": 21,
  "title": "Bajo Electrico Squier By Fender Sonic Bronco Bass",
  "Detail": "Marca Fender.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_616764-MLU73701559951_122023-O.webp",
  "price": "$ 595.964",
  "stock":"Stock: 13",
  "category": "bajos"
}, {
  "id": 22,
  "title": "Kit Bajo Electrico + Cable + Ampli 10watts + Funda Y Puas",
  "Detail": "Descubre el Kit Bajo Eléctrico Sunset EBS150, una opción ideal tanto para principiantes como para músicos experimentados. Este bajo eléctrico cuenta con un cuerpo de tilo que proporciona un sonido cálido y resonante, mientras que su mástil de arce garantiza una excelente durabilidad y comodidad al tocar.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_712972-MLU78021644988_082024-O.webp",
  "price": "$ 541.599",
  "stock":"Stock: 17",
  "category": "bajos"
}, {
  "id": 23,
  "title": "Bajo Electrico Sunset Precision Bass Funda Ampli Cable Puas",
  "Detail": "Bajo Elecctrico Precision Bass Sunset EBS150. Cuenta con un sonido de calidad y construccion cuidada. Es un bajo perfecto para quienes quieren iniciarse en la musica o tambien es perfecto para quienes quieren tener un bajo con excelente Calidad-Precio. Incluye un combo perfecto para que puedas tocar desde el momento en que recibis el producto.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_855074-MLA76640830080_062024-O.webp",
  "price": "$ 350.169",
  "stock":"Stock: 17",
  "category": "bajos"
}, {
  "id": 24,
  "title": "Ibanez Gsr200 Bajo Electrico Activo 4",
  "Detail": "El Ibanez Gsr200 es un bajo eléctrico activo de 4 cuerdas con un acabado laqueado en color Weathered Black. Este instrumento está diseñado para diestros y ofrece la famosa sonoridad Soundgear, comodidad, tono y jugabilidad.",
  "img": "https://http2.mlstatic.com/D_NQ_NP_948572-MLU73304723790_122023-O.webp",
  "price": "$ 597.999",
  "stock":"Stock: 5",
  "category": "bajos"
}, {
  "id": 25,
  "title": "Bajo Electrico 4 Cuerdas Squier By Fender Affinity Bsb",
  "Detail": "Bajo Electrico 4 Cuerdas Squier By Fender Affinity BSB",
  "img": "https://http2.mlstatic.com/D_NQ_NP_901941-MLA53384590012_012023-O.webp",
  "price": "$ 664.297",
  "stock":"Stock: 7",
  "category": "bajos"
}];

function cards () {

let cards = data.map((producto) => `<div class="card" style="width: 20rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
  </div>
</div>`);
document.querySelector(".container").innerHTML = cards.join("");
}

document.querySelector(".container").innerHTML = "Cargando...";
const loadingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cards())
  }, 3000)
}) 

function buscadorf() {
  let inputBuscador = document.querySelector(".input");

  
  let filterData = data.filter((producto) => producto.title == inputBuscador.value);
  let cards = filterData.map((producto) => `<div class="card" style="width: 18rem;">
  <img src="${producto.img}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.Detail}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
    <p class="card-text">${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
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

