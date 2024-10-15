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
  "Guitar": "Amy's O (a.k.a. Amy's Orgasm)",
  "Detail": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "img": "http://dummyimage.com/173x100.png/ff4444/ffffff",
  "price": 31,
  "stock": 31
}, {
  "id": 2,
  "Guitar": "My Name Is Julia Ross",
  "Detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
  "price": 52,
  "stock": 66
}, {
  "id": 3,
  "Guitar": "Watch, The",
  "Detail": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/243x100.png/cc0000/ffffff",
  "price": 49,
  "stock": 62
}, {
  "id": 4,
  "Guitar": "Crippled Masters (Tian can di que)",
  "Detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "img": "http://dummyimage.com/150x100.png/cc0000/ffffff",
  "price": 50,
  "stock": 8
}, {
  "id": 5,
  "Guitar": "Company of Wolves, The",
  "Detail": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "img": "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
  "price": 69,
  "stock": 83
}, {
  "id": 6,
  "Guitar": "Beach Girls and the Monster, The",
  "Detail": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "img": "http://dummyimage.com/137x100.png/dddddd/000000",
  "price": 82,
  "stock": 9
}, {
  "id": 7,
  "Guitar": "Junior Prom",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/205x100.png/dddddd/000000",
  "price": 88,
  "stock": 13
}, {
  "id": 8,
  "Guitar": "At First Sight",
  "Detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
  "price": 76,
  "stock": 55
}, {
  "id": 9,
  "Guitar": "I Love, You Love (Ja milujem, ty milujes)",
  "Detail": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "img": "http://dummyimage.com/173x100.png/cc0000/ffffff",
  "price": 18,
  "stock": 76
}, {
  "id": 10,
  "Guitar": "Island of Dr. Moreau, The",
  "Detail": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "img": "http://dummyimage.com/240x100.png/ff4444/ffffff",
  "price": 83,
  "stock": 54
}, {
  "id": 11,
  "Guitar": "Exit to Eden",
  "Detail": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "img": "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
  "price": 88,
  "stock": 58
}, {
  "id": 12,
  "Guitar": "Robin Hood",
  "Detail": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "img": "http://dummyimage.com/237x100.png/ff4444/ffffff",
  "price": 67,
  "stock": 17
}, {
  "id": 13,
  "Guitar": "Bugmaster (Mushishi)",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "img": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
  "price": 59,
  "stock": 22
}, {
  "id": 14,
  "Guitar": "Carey Treatment, The",
  "Detail": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/146x100.png/cc0000/ffffff",
  "price": 66,
  "stock": 21
}, {
  "id": 15,
  "Guitar": "Song of the South",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/134x100.png/dddddd/000000",
  "price": 55,
  "stock": 76
}, {
  "id": 16,
  "Guitar": "I Capture the Castle",
  "Detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/106x100.png/ff4444/ffffff",
  "price": 19,
  "stock": 98
}, {
  "id": 17,
  "Guitar": "Hero (Ying xiong)",
  "Detail": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "img": "http://dummyimage.com/154x100.png/cc0000/ffffff",
  "price": 24,
  "stock": 2
}, {
  "id": 18,
  "Guitar": "Around the World",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/179x100.png/cc0000/ffffff",
  "price": 76,
  "stock": 43
}, {
  "id": 19,
  "Guitar": "Tales from Earthsea (Gedo Senki)",
  "Detail": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "img": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
  "price": 62,
  "stock": 79
}, {
  "id": 20,
  "Guitar": "Eureka (Yurîka)",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "img": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "price": 43,
  "stock": 75
}, {
  "id": 21,
  "Guitar": "Kiki",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "img": "http://dummyimage.com/177x100.png/dddddd/000000",
  "price": 70,
  "stock": 69
}, {
  "id": 22,
  "Guitar": "Memento Mori (Yeogo goedam II)",
  "Detail": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "img": "http://dummyimage.com/126x100.png/dddddd/000000",
  "price": 27,
  "stock": 11
}, {
  "id": 23,
  "Guitar": "Coronado",
  "Detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
  "price": 18,
  "stock": 92
}, {
  "id": 24,
  "Guitar": "Red Salute",
  "Detail": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/142x100.png/dddddd/000000",
  "price": 91,
  "stock": 31
}, {
  "id": 25,
  "Guitar": "Babar The Movie",
  "Detail": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "img": "http://dummyimage.com/120x100.png/ff4444/ffffff",
  "price": 85,
  "stock": 45
}, {
  "id": 26,
  "Guitar": "21 Grams",
  "Detail": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "img": "http://dummyimage.com/222x100.png/dddddd/000000",
  "price": 91,
  "stock": 68
}, {
  "id": 27,
  "Guitar": "Boogie-Doodle",
  "Detail": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "img": "http://dummyimage.com/154x100.png/ff4444/ffffff",
  "price": 63,
  "stock": 40
}, {
  "id": 28,
  "Guitar": "Bandits (Bandidos)",
  "Detail": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/241x100.png/dddddd/000000",
  "price": 99,
  "stock": 61
}, {
  "id": 29,
  "Guitar": "Triple Agent",
  "Detail": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "img": "http://dummyimage.com/201x100.png/cc0000/ffffff",
  "price": 47,
  "stock": 52
}, {
  "id": 30,
  "Guitar": "Sleep Dealer",
  "Detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "img": "http://dummyimage.com/234x100.png/5fa2dd/ffffff",
  "price": 84,
  "stock": 95
}, {
  "id": 31,
  "Guitar": "Flight of the Phoenix",
  "Detail": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "img": "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
  "price": 17,
  "stock": 85
}, {
  "id": 32,
  "Guitar": "Verdict, The",
  "Detail": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "img": "http://dummyimage.com/141x100.png/dddddd/000000",
  "price": 59,
  "stock": 93
}, {
  "id": 33,
  "Guitar": "Ironclad 2: Battle for Blood",
  "Detail": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "img": "http://dummyimage.com/106x100.png/dddddd/000000",
  "price": 34,
  "stock": 2
}, {
  "id": 34,
  "Guitar": "Miracles - Mr. Canton and Lady Rose",
  "Detail": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "img": "http://dummyimage.com/194x100.png/ff4444/ffffff",
  "price": 58,
  "stock": 38
}, {
  "id": 35,
  "Guitar": "Lemony Snicket's A Series of Unfortunate Events",
  "Detail": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "img": "http://dummyimage.com/180x100.png/cc0000/ffffff",
  "price": 55,
  "stock": 63
}, {
  "id": 36,
  "Guitar": "Lay the Favorite",
  "Detail": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "img": "http://dummyimage.com/226x100.png/dddddd/000000",
  "price": 7,
  "stock": 48
}, {
  "id": 37,
  "Guitar": "Rabbit Test",
  "Detail": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "img": "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
  "price": 71,
  "stock": 43
}, {
  "id": 38,
  "Guitar": "Pretty/Handsome",
  "Detail": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "img": "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
  "price": 9,
  "stock": 86
}, {
  "id": 39,
  "Guitar": "Canvas",
  "Detail": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "img": "http://dummyimage.com/185x100.png/cc0000/ffffff",
  "price": 2,
  "stock": 12
}, {
  "id": 40,
  "Guitar": "Yeti: The Giant of the 20th Century",
  "Detail": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "img": "http://dummyimage.com/157x100.png/ff4444/ffffff",
  "price": 38,
  "stock": 26
}, {
  "id": 41,
  "Guitar": "Bye-Bye",
  "Detail": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "img": "http://dummyimage.com/246x100.png/cc0000/ffffff",
  "price": 22,
  "stock": 90
}, {
  "id": 42,
  "Guitar": "Grace of Monaco",
  "Detail": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "img": "http://dummyimage.com/227x100.png/ff4444/ffffff",
  "price": 61,
  "stock": 96
}, {
  "id": 43,
  "Guitar": "Pittsburgh",
  "Detail": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "img": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  "price": 35,
  "stock": 33
}, {
  "id": 44,
  "Guitar": "Pokémon the Movie 2000",
  "Detail": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "img": "http://dummyimage.com/100x100.png/dddddd/000000",
  "price": 30,
  "stock": 29
}, {
  "id": 45,
  "Guitar": "Roadkill (a.k.a. Roadkill: Move or Die)",
  "Detail": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "img": "http://dummyimage.com/158x100.png/dddddd/000000",
  "price": 56,
  "stock": 51
}, {
  "id": 46,
  "Guitar": "Joshua",
  "Detail": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "img": "http://dummyimage.com/191x100.png/cc0000/ffffff",
  "price": 65,
  "stock": 78
}, {
  "id": 47,
  "Guitar": "King David",
  "Detail": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "img": "http://dummyimage.com/109x100.png/cc0000/ffffff",
  "price": 86,
  "stock": 27
}, {
  "id": 48,
  "Guitar": "Anotherworld",
  "Detail": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/112x100.png/cc0000/ffffff",
  "price": 100,
  "stock": 28
}, {
  "id": 49,
  "Guitar": "To Mars by A-Bomb: The Secret History of Project Orion",
  "Detail": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "img": "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
  "price": 53,
  "stock": 71
}, {
  "id": 50,
  "Guitar": "Speed Of Thought, The",
  "Detail": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "img": "http://dummyimage.com/183x100.png/ff4444/ffffff",
  "price": 4,
  "stock": 58
}]
;

let prodEncontrado = data.find((producto) => producto.id === id); 

const card1 = `<div class="card" style="width: 18rem;">
  <img src="${prodEncontrado.img}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${prodEncontrado.Guitar}</h5>
    <p class="card-text">${prodEncontrado.Detail}</p>
    <p class="card-text">${prodEncontrado.price}</p>
    <p class="card-text">${prodEncontrado.stock}</p>
    <a href="./producto.html?prod=${prodEncontrado.id}" class="."><button></button></a>
  </div>
</div>`;

document.querySelector(".container").innerHTML = card1;

