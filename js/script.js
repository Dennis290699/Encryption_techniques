function toggleOptions() {
  const cipherSelect = document.getElementById("cipher");
  const cesarOptions = document.getElementById("cesar-options");
  const afinOptions = document.getElementById("afin-options");

  cesarOptions.classList.add("hidden");
  afinOptions.classList.add("hidden");

  if (cipherSelect.value === "cesar") {
    cesarOptions.classList.remove("hidden");
  } else if (cipherSelect.value === "afin") {
    afinOptions.classList.remove("hidden");
  }
}

// Llamar a la función toggleOptions() al cargar la página para ocultar las opciones por defecto
window.addEventListener("load", toggleOptions);

function encrypt() {
  var message = document.getElementById("message").value.toUpperCase();
  var cipherType = document.getElementById("cipher").value;

  var encryptedMessage = "";

  if (cipherType === "cesar") {
    var shift = parseInt(document.getElementById("shift").value);

    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        encryptedMessage += message.charAt(i); // Non-alphabetic characters
      }
    }
  } else if (cipherType === "afin") {
    var keyA = parseInt(document.getElementById("keyA").value);
    var keyB = parseInt(document.getElementById("keyB").value);

    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        encryptedMessage += String.fromCharCode(((keyA * (charCode - 65) + keyB) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        encryptedMessage += String.fromCharCode(((keyA * (charCode - 97) + keyB) % 26) + 97);
      } else {
        encryptedMessage += message.charAt(i); // Non-alphabetic characters
      }
    }
  }

  document.getElementById("result").value = encryptedMessage;
}

function decrypt() {
  var message = document.getElementById("message").value.toUpperCase();
  var cipherType = document.getElementById("cipher").value;

  var decryptedMessage = "";

  if (cipherType === "cesar") {
    var shift = parseInt(document.getElementById("shift").value);

    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        decryptedMessage += message.charAt(i); // Non-alphabetic characters
      }
    }
  } else if (cipherType === "afin") {
    var keyA = parseInt(document.getElementById("keyA").value);
    var keyB = parseInt(document.getElementById("keyB").value);

    // Calculate modular multiplicative inverse of keyA
    var modInverse = 0;
    for (var i = 0; i < 26; i++) {
      if ((keyA * i) % 26 === 1) {
        modInverse = i;
        break;
      }
    }

    for (var i = 0; i < message.length; i++) {
      var charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        var decodedCharCode = ((modInverse * (charCode - 65 - keyB + 26)) % 26) + 65;
        decryptedMessage += String.fromCharCode(decodedCharCode);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        var decodedCharCode = ((modInverse * (charCode - 97 - keyB + 26)) % 26) + 97;
        decryptedMessage += String.fromCharCode(decodedCharCode);
      } else {
        decryptedMessage += message.charAt(i); // Non-alphabetic characters
      }
    }
  }

  document.getElementById("result").value = decryptedMessage;
}

// Mostrar u ocultar opciones según el tipo de cifrado seleccionado
document.getElementById("cipher").addEventListener("change", toggleOptions);

function clearFields() {
  document.getElementById("message").value = ""; // Limpiar campo de mensaje
  document.getElementById("shift").value = ""; // Limpiar campo de desplazamiento
  document.getElementById("keyA").value = ""; // Limpiar campo de clave A
  document.getElementById("keyB").value = ""; // Limpiar campo de clave B
  document.getElementById("result").value = ""; // Limpiar campo de resultado

  document.getElementById("cipher").selectedIndex = 0; // Restablecer selección del tipo de cifrado
  toggleOptions(); // Ocultar las opciones de cifrado
}

// Obtén una referencia al icono y al campo de entrada de texto cifrado
const copyIcon = document.getElementById("copy-icon");
const resultInput = document.getElementById("result");
const clearIcon = document.querySelector('.clear-icon');
const messageInput = document.querySelector('#message');

// Agrega el evento click al icono
copyIcon.addEventListener("click", function () {
  // Selecciona y copia el texto cifrado al portapapeles
  resultInput.select();
  document.execCommand("copy");
});

clearIcon.addEventListener('click', function() {
  messageInput.value = '';
});



// Agrega el evento click al icono de copiar
copyIcon.addEventListener("click", function () {
  // Selecciona y copia el texto cifrado al portapapeles
  resultInput.select();
  document.execCommand("copy");

  // Cambiar la imagen del icono a la versión "clickeada" con transición suave
  copyIcon.src = "../assets/icon-check.png";
  copyIcon.classList.add("clicked");

  // Restaurar la imagen original del icono después de 2 segundos
  setTimeout(function () {
    copyIcon.src = "../assets/btn-copy.png";
    copyIcon.classList.remove("clicked");
  }, 2000);
});

// Agrega el evento click al icono de limpiar
clearIcon.addEventListener("click", function () {
  // Limpiar el campo de entrada de texto
  document.getElementById("message").value = "";

  // Cambiar la imagen del icono a la versión "clickeada" con transición suave
  clearIcon.src = "../assets/icon-check.png";
  clearIcon.classList.add("clicked");

  // Restaurar la imagen original del icono después de 2 segundos
  setTimeout(function () {
    clearIcon.src = "../assets/btn-trash.png";
    clearIcon.classList.remove("clicked");
  }, 2000);
});










function toggleTheme() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-theme");
}
