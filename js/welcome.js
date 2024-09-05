const alertMensaje = document.getElementById("alert");
const btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function (event){
            let nombre = "";

             if (localStorage.getItem("nombre")!=null) {
                 nombre = localStorage.getItem("nombre");
                }

            const alertText1 = `Hola <strong>${nombre}</strong>, ¡Bienvenido/a de nuevo!`;

            alertMensaje.innerHTML = alertText1;
            alertMensaje.style.display = "block";
});

btnEliminar.addEventListener("click", function (event){
            event.preventDefault();
            localStorage.removeItem("nombre");
            // location.href="index.html";

            const alertText2 = `Por favor ve a inicio e ingresa tu nombre.`;

            alertMensaje.innerHTML = alertText2;
            alertMensaje.style.display = "block";
})