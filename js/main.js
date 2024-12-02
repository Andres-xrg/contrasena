function generarContraseña(longitud, usarNumeros, usarLetras, usarSimbolos) {
    let caracteresPosibles = obtenerCaracteresDisponibles(usarNumeros, usarLetras, usarSimbolos);
    
    if (!caracteresPosibles) {
        alert("Debes seleccionar al menos una categoría de caracteres.");
        return "";
    }

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        contraseña += obtenerCaracterAleatorio(caracteresPosibles);
    }
    return contraseña;
}

function obtenerCaracteresDisponibles(usarNumeros, usarLetras, usarSimbolos) {
    let caracteres = "";

    if (usarLetras) {
        caracteres += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (usarNumeros) {
        caracteres += "0123456789";
    }

    if (usarSimbolos) {
        caracteres += "!@#$%^&*()_-+=<>?/:;,.";
    }

    return caracteres || null;  
}

function obtenerCaracterAleatorio(caracteresPosibles) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresPosibles.length);
    return caracteresPosibles.charAt(indiceAleatorio);
}

function copiarAlPortapapeles() {
    const campoContraseña = document.getElementById("password");
    campoContraseña.select();
    document.execCommand("copy");
    alert("La Contraseña ha sido copiada en el portapapeles.");
}

function manejarGenerarContraseña() {
    const longitud = parseInt(document.getElementById("length").value);
    const usarNumeros = document.getElementById("numbers").checked;
    const usarLetras = document.getElementById("letters").checked;
    const usarSimbolos = document.getElementById("symbols").checked;
    
    const contraseñaGenerada = generarContraseña(longitud, usarNumeros, usarLetras, usarSimbolos);
    document.getElementById("password").value = contraseñaGenerada;
}

function manejarCopiarContraseña() {
    copiarAlPortapapeles();
}

document.getElementById("generateBtn").addEventListener("click", manejarGenerarContraseña);
document.getElementById("copyBtn").addEventListener("click", manejarCopiarContraseña);
