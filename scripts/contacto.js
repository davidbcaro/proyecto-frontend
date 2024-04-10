function enviarInfo() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    if (nombre && email && telefono) {
        alert("Envio exitoso. ¡Te contactaremos pronto!");
    } else {
        alert("Por favor completa todos los campos.");
    }
}