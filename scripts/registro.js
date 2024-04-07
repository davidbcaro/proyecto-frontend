
function registerUser(event) {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var contraseña = document.getElementById("contraseña").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var userDataJson = JSON.parse(localStorage.getItem("userData")) || {}; // Inicializar userDataJson con un objeto vacío si no hay datos en localStorage

    // Verificar si el usuario ya está registrado
    if (userDataJson.hasOwnProperty(usuario)) {
        event.preventDefault(); // Detener el comportamiento predeterminado del botón de envío
        alert("El usuario ya existe.");
        return;
    }

    // Verificar si algún campo obligatorio está vacío
    if (usuario === "" || email === "" || nombre === "" || edad === "" || telefono === "" || direccion === "" || contraseña === "" || confirmPassword === "") {
        event.preventDefault(); // Detener el comportamiento predeterminado del botón de envío
        alert("Por favor, llene todos los campos obligatorios.");
        return;
    }

    // Verificar si las contraseñas coinciden
    if (contraseña !== confirmPassword) {
        event.preventDefault(); // Detener el comportamiento predeterminado del botón de envío
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear un objeto con los datos del usuario
    var user = {
        email: email,
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        direccion: direccion,
        contraseña: contraseña
    };

    // Fusionar los datos del nuevo usuario con los datos existentes (si los hay)
    userDataJson[usuario] = Object.assign({}, userDataJson[usuario], user);

    // Guardar los datos del usuario en el localStorage
    localStorage.setItem("userData", JSON.stringify(userDataJson));

    alert("Registro exitoso.");
}