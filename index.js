Usuarios=JSON.parse(localStorage.getItem("lista"))
if (Usuarios != null) {
    let user = Usuarios[5].usuario;

    const button = document.getElementById("Bsecion");
    button.textContent = "🔓"+user
}