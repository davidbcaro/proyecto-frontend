function modificarUser() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Averigua las variables almacenadas usando el localStorage, en este caso se quiere obtener de localStorage la variable UserData
    var userDataJson = JSON.parse(localStorage.getItem("userData")) || {};

    // Averigua cual es el usuario con la sesion iniciada
    var sesionUsuario = localStorage.getItem("sesionUsuario");
    // Segun el usuario encontrado en la variable de sesionUsuario, este mismo se busca en la variable de userDataJson
    var usuarioRegistrado = userDataJson[sesionUsuario];

    // Modificar la información del usuario encontrado con la informacion digitada en el formulario
    usuarioRegistrado.nombre = nombre;
    usuarioRegistrado.email = email;

    // Actualizar los datos del usuario en localStorage
    userDataJson[sesionUsuario] = usuarioRegistrado;
    localStorage.setItem("userData", JSON.stringify(userDataJson));

    alert("La información del usuario ha sido modificada correctamente.");
    // Se vuelve a cargar la pagina para que se pueda ver la nueva informacion refrescada
    window.location.href = "modificarInformacion.html";
}