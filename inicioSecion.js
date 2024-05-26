const iniciar=()=>{
    listaUsuarios=JSON.parse(localStorage.getItem("lista"))//obtiene lista
    let ValorUsuario = document.getElementById("RUser").value;
    let ValorPassword = document.getElementById("RPass").value;
    let mensaje = ""

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].usuario == ValorUsuario.trim() && listaUsuarios[i].pass == ValorPassword.trim()) {
        mensaje = "OK";
        i = listaUsuarios.length+1;            
        }
        else{
            mensaje = "Usuario o Contraseña incorrecto";
        }
    }
    alert(mensaje);
}