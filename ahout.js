let uSession = localStorage.getItem("session");
if (uSession && location.pathname === "/login.html") {
    window.location.href = "./home.html";
}

if (!uSession && location.pathname === "/cart.html") {
    window.location.href = "./login.html";
}