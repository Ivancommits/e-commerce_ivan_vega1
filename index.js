let h1 = document.querySelector("h1").innerText = "Productos";


function cards () {
  let array = [];
for (let i = 1; i < 10; i++) {
    const card = `<div class="card" style="width: 18rem;">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="imagen ${i}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="producto.html" class="btn btn-primary">Ver más</a>
  </div>
</div>`;
array.push(card);
} 
document.querySelector('.container').innerHTML = array.join("");
}
cards();