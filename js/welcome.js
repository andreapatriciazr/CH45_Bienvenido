const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");

window.addEventListener("load", function (event){
            let nombre = "";

             if (localStorage.getItem("nombre")) {
                 nombre = localStorage.getItem("nombre");
                }

            const alertText = `Hola ${nombre}, ¡bienvenido de nuevo! <br>
                        Por favor ve al index e ingresa tu nombre.`;

            alertMensaje.style.display = "block";
            alertMensaje.innerHTML = alertText;
});
