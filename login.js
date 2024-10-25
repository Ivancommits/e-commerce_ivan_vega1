let uForm = document.querySelector("form");
const cEmail = "pepe@gmail.com";
const cPassword = "pepe321";
uForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    let formData = new FormData(uForm);  
    let uEmail = formData.get("email");
    let uPassword = formData.get("password");
    console.log(uPassword, uEmail)
    if (cEmail === uEmail && cPassword === uPassword) {
        localStorage.setItem("session", uEmail);
        window.location.href = "./index.html";
    } else {
        alert("Las credenciales son incorrectas!");
    }
});
