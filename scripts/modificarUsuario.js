function modificarUser() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    var userDataJson = JSON.parse(localStorage.getItem("userData")) || {};

    // Averigua cual es el usuario con la sesion iniciada
    var sesionUsuario = localStorage.getItem("sesionUsuario");
    var usuarioRegistrado = userDataJson[sesionUsuario];

    // Modificar la información del usuario encontrado con la informacion digitada en el formulario
    usuarioRegistrado.nombre = nombre;
    usuarioRegistrado.email = email;

    // Actualizar los datos del usuario en localStorage
    userDataJson[sesionUsuario] = usuarioRegistrado;
    localStorage.setItem("userData", JSON.stringify(userDataJson));

    alert("La información del usuario ha sido modificada correctamente.");
    window.location.href = "modificarInformacion.html";
}