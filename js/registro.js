const validarFormularioReg = () => {
    formRegistro.addEventListener("submit", (event) => {
        event.preventDefault();

        if(nombreReg.value === "" || emailReg.value === "" || passReg.value === "") {
            mensajeError.innerHTML = `<p class="text-danger text-center">Todos los campos son obligatorios</p>`;
            nombreReg.classList.add("border-danger-subtle", "border-2");
            emailReg.classList.add("border-danger-subtle", "border-2");
            passReg.classList.add("border-danger-subtle", "border-2");
        } else if(passReg.value.length < 6) {
            mensajeError.innerHTML = `<p class="text-danger text-center">La contraseña debe contener hasta 6 caracteres.</p>`;
        } else {
            nombreReg.classList.remove("border-danger-subtle", "border-2");
            emailReg.classList.remove("border-danger-subtle", "border-2");
            passReg.classList.remove("border-danger-subtle", "border-2");
            mensajeError.innerHTML = "";
            
            const usuario = {
                nombre: nombreReg.value,
                email: emailReg.value,
                pass: passReg.value
            };
            
            localStorage.setItem("usuario", JSON.stringify(usuario));
         // redireccionamiento tras unos segundos
         setTimeout(() => {
             window.location.href="../login.html"
         }, 1000);
    }
    });
}

validarFormularioReg();
