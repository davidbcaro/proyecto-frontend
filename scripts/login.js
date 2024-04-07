
function loginUser(event) {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    var userDataJson = JSON.parse(localStorage.getItem("userData")) || {}; // Inicializar userDataJson con un objeto vacío si no hay datos en localStorage

    // Verificar si el usuario ya está existe
    if (userDataJson.hasOwnProperty(usuario)) {
        // Obtener la información del usuario, incluida la contraseña
        var usuarioRegistrado = userDataJson[usuario];
        var contraseñaRegistrada = usuarioRegistrado.contraseña;

        // Compara la contraseña almacenada con la contraseña ingresada en el formulario de logueo
        if (contraseña === contraseñaRegistrada) {
            alert("Inicio de sesión exitoso.");
            // Crea una sesion, si no hay una sesion iniciada no podra ver las demas paginas
            localStorage.setItem('sesionUsuario', usuario);
        } else {
            // La contraseña es incorrecta, por lo que no podra pasar del formulariko
            event.preventDefault();
            alert("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
            return;
        }
    } else {
        // El logueo sera invalido si no existe el usuario
        event.preventDefault();
        alert("El usuario no existe.");
        return;
    }
}