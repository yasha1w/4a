function logar() {
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "1234") {
         window.location.href="..//principal/pagina.html"
    } else {
        alert("usuario ou senha incorretos.")
    }
}