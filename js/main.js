const btnGuardar = document.getElementById("btnGuardar");
const nombre = document.getElementById("Name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault(); 

    nombre.style.border = ""; 
    alertValidacionesTexto.innerText = "";
    alertValidaciones.style.display = "none";


    if (nombre.value.length <3) { 
        nombre.style.border = "2px solid red"; 
        alertValidacionesTexto.innerText = "El nombre no es correcto."; 
        alertValidaciones.style.display = "block"; 
        return false;
    }

    nombre.style.border = "2px solid blue"; 
    alertValidacionesTexto.innerText = "Nombre guardado correctamente.";
    alertValidaciones.style.display = "block";

    localStorage.setItem("nombre", nombre.value);

    nombre.value = ""; 
    nombre.focus();

});