const Guardar=()=>{
    listaUsuarios = JSON.parse(localStorage.getItem("lista"));
    let Vuser = document.getElementById("User").value;
    let Vpass = document.getElementById("Pass").value;
    let Cpass = document.getElementById("PassC").value;
    let mensaje = ""
    
    if (Vpass.trim() == Cpass.trim()) {
        let Usuario = {usuario:Vuser,pass:Vpass}
        mensaje = "Usuario se agrego con exito";
        listaUsuarios.push(Usuario);
    }
    else{
        mensaje = "No se pudo agregar el usuario";
    }
    alert(mensaje);
    localStorage.setItem("lista",JSON.stringify(listaUsuarios));
    window.location.assign("inicioSecion.html")
}