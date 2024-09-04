const btnGuardar = document.getElementById("btnGuardar");
const nombre = document.getElementById("Name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let isValid = true; 

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault(); 

    nombre.style.border = ""; 
    alertValidacionesTexto.textContent = "";
    alertValidaciones.style.display = "none";
    isValid = true;


    if (nombre.value.length <3) { 
        nombre.style.border = "2px solid red"; 
        alertValidacionesTexto.textContent = "El nombre no es correcto."; 
        alertValidaciones.style.display = "block"; 
        return false;
    }
    localStorage.setItem("nombre", nombre.value);
    nombre.style.border = "2px solid blue"; 
    alertValidacionesTexto.textContent = "Nombre guardado correctamente.";
    alertValidaciones.style.display = "block";

    nombre.value = ""; 
    nombre.focus();

});