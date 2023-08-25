// const validarFormularioLog = () => {
//     formLogin.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if(emailLogin.value === "" || passLogin.value === "") {
//        emailLogin.classList.add("border-danger-subtle", "border-2");
//        passLogin.classList.add("border-danger-subtle", "border-2");
//     }
//     })
// }

// validarFormularioLog();
const validarFormularioLog = () => {
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        mensajeErrorForm.innerHTML = `<p class="text-danger text-center">Todos los campos son obligatorios</p>`;
            if(emailLogin.value === "" || passLogin.value === "") {
            emailLogin.classList.add("border-danger-subtle", "border-2");
            passLogin.classList.add("border-danger-subtle", "border-2");
        } else if(emailLogin !== emailReg || passLogin !== passReg) {
            mensajeErrorForm.innerHTML = `<p class="text-danger text-center">El email no coincide</p>`;
        }else {
            emailLogin.classList.remove("border-danger-subtle", "border-2");
            passLogin.classList.remove("border-danger-subtle", "border-2");
            mensajeErrorForm.innerHTML = "";
            
            const usuarioLogueado = {
                email: emailLogin.value,
                pass: passLogin.value
            };
            
            localStorage.setItem("usuario logueado", JSON.stringify(usuarioLogueado));
         // redireccionamiento tras unos segundos
         setTimeout(() => {
             window.location.href="../index.html"
         }, 1000);
    }
    });
}
validarFormularioLog();