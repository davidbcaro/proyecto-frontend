//Obtiene el usuario que actualmente se encuentra en la sesion
var sesionUsuario = localStorage.getItem("sesionUsuario");

//Si hay una sesion de usuario, para los diferentes innerText/value para mostrar la informacion de la sesion donde se requiera
if (sesionUsuario) {
    var userDataJson = JSON.parse(localStorage.getItem("userData")) || {};
    // Obtiene info del usuario que esta presente en la sesion
    var usuarioRegistrado = userDataJson[sesionUsuario];

    document.getElementById("nombre").innerText = usuarioRegistrado.nombre;
    document.getElementById("nombre").value = usuarioRegistrado.nombre;
    document.getElementById("email").value = usuarioRegistrado.email;
} else {
    //Si no hay una sesion, no se pueden ver las diferentes paginas pasando pasando el logueo
    window.location.href = "../registro/login.html";
    alert("Debe iniciar sesion para acceder")
}

// Cierra la sesion actual, el usuario tendra que volver a loguearse si quiere por ejemplo modificar su informacion
function cerrarSesion() {
    //Eliminar el objeto sesionUsuario, de esta forma tendria que volver a loguearse para volver a crear el objeto sesionUsuario
    localStorage.removeItem('sesionUsuario');
    alert("Sesion cerrada")
}

