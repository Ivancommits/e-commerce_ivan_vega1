const cardsSection = document.querySelector("#cart #cards");
const btnClearCart = document.querySelector("#btn-clear-cart");

function getCart(carrito) {
    const list = carrito.map(
        card => `
            <div class="card border-shadow-none">
                <div class="card-body">
                    <div class="d-flex align-items-start border-bottom">
                        <div class="me-4">
                            <img  src="${card.prod.img}" alt="${card.prod.title}"
                                class="avatar-lg rounded" />
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-18">${card.prod.title}</h5>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Price</p>
                                        <h5 class="mb-0 mt-2">$${card.prod.price}</h5>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Quantity</p>
                                        <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mt-3">
                                        <p class="text-muted mb-2">Total</p>
                                        <h5>${card.prod.price * card.quantity}</h5>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="mt-3">
                                        <a class="btn btn-primary rounded-pill mb-2" onclick="removeItem(${card.prod.id})">Eliminar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ).join("");
    cardsSection.innerHTML = list;
}

function subTotal(card1) {
    let cartTotal = document.getElementById("card-total")
    let total = data.length > 0
        ? data.reduce((actual) => actual.prod.price * actual.quantity)
        : 0;

    cartTotal.innerText = "$" + total;
}

function total() {
    let carrito = (JSON.parse(localStorage.getItem("cart")) || []);
    let costoTotal = 0;
    for (let index = 0; index < carrito.length; index++) {
        const element = carrito[index];
        costoTotal += carrito[index].prod.price * carrito[index].quantity 
    }  
    document.querySelector("#card-total").innerHTML = costoTotal;
}


function removeItem(id) {
    
    let cards = JSON.parse(localStorage.getItem("cart")) || [];
    let newCards = cards.filter(card => card.prod.id !== id); 
    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce((actual) =>  + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
}

function finishOrder(){
    if(localStorage.getItem("quantity") == 0){

        Toastify({
            text: "Error! No tienes instrumentos...",
            style: {
              background: "red",
            },
            offset: {
              y: 70 
            },
        }).showToast();

    } else {
        Swal.fire({
            text: "Are you sure?",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red"
          }).then(result => {
            if (result.isConfirmed){
              
            const datos = {
                user: localStorage.getItem("email").split("@")[0],
                items: JSON.parse(localStorage.getItem("cart"))
            }
    
            fetch(
                "https://6736a17baafa2ef222310933.mockapi.io/orders", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos),
                } 
            )
                .then(respuesta => respuesta.json())
                .then(datas =>
                    Toastify({
                        text: `Gracias por tu compra ${datas.user}, tu número de orden es: ${datas.id}`,
                        style: {
                            background: "#000",
                        },
                        offset: {
                            y: 250,
                        },
                    }).showToast())
                    cleanCart()

                .catch(() => {
                    Swal.fire({
                        text: "Error, intentá de nuevo.",
                        confirmButtonColor: "#000",
                        confirmButtonText: "Ok"
                    })
                })
            }
        })
    }
}

function cleanCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");

    getCart([]);
    total([]);
    
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
}

getCart(JSON.parse(localStorage.getItem("cart")) || []);
total(JSON.parse(localStorage.getItem("cart")) || []);

