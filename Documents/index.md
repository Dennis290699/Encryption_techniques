<div align="center">
  <h1 id="index_html">index.html</h1>
</div>

<p>

Este es el desglose de los elementos y su funcionalidad en el HTML:

1. `<!DOCTYPE html>`: Esta declaración define el tipo de documento como HTML.

2. `<html>`: Es el elemento raíz del documento HTML.

3. `<html lang="en">`: Atributo lang utilizado para especificar el idioma principal del documento, en este caso, inglés.

4. `<head>`: Es la sección que contiene metadatos y enlaces a archivos externos, como hojas de estilo CSS y scripts JavaScript.

5. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Este meta elemento configura la visualización del sitio web en dispositivos móviles ajustando el ancho a la pantalla del dispositivo.

6. `<title>Cifrado</title>`: Define el título de la página, que se mostrará en la pestaña del navegador o en los resultados de búsqueda.

7. `<link rel="icon" type="image/png" href="./assets/cifrado.png">`: Especifica el ícono que se mostrará en la pestaña del navegador.

8. `<link rel="stylesheet" type="text/css" href="./css/mobile.css">`: Enlaza una hoja de estilo CSS externa llamada "mobile.css" para estilos específicos de dispositivos móviles.

9. `<link rel="stylesheet" type="text/css" href="./css/style.css">`: Enlaza otra hoja de estilo CSS externa llamada "style.css" para estilos generales.

10. `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`: Enlaza una fuente de Google Fonts llamada "Roboto" con los pesos de fuente 400 y 700.

11. `<body>`: Es la sección del cuerpo del documento HTML que contiene todo el contenido visible del sitio web.

12. `<div class="container">`: Un contenedor principal que envuelve todo el contenido de la página.

13. `<h1>Cifrado</h1>`: Un encabezado de nivel 1 que muestra el título principal de la página.

14. `<div class="form-group">`: Un contenedor para agrupar elementos relacionados dentro de un formulario.

15. `<label for="message">Mensaje:</label>`: Etiqueta que describe un campo de entrada de texto con el atributo "message". Muestra el texto "Mensaje:".

16. `<div class="input-container">`: Un contenedor para el campo de entrada de texto y el ícono de limpiar.

17. `<input type="text" id="message" name="message" placeholder="Escriba aqui su mensaje">`: Un campo de entrada de texto donde los usuarios pueden escribir su mensaje. El atributo "id" y "name" están establecidos como "message", y muestra un texto de marcador de posición "Escriba aquí su mensaje".

18. `<img src="./assets/btn-trash.png" alt="Limpiar" class="clear-icon" id="clear-icon">`: Una imagen de un ícono de limpiar representado por un archivo de imagen "btn-trash.png". Tiene un texto alternativo "Limpiar" y las clases CSS "clear-icon" e "id" para estilización y manipulación en JavaScript.

19. `<select id="cipher" onchange="toggleOptions()">`: Un elemento de selección (lista desplegable) donde los usuarios pueden elegir el tipo de cifrado. Tiene un atributo "id" establecido como "cipher" y un atributo "onchange" que llama a la función "toggleOptions()" cuando cambia la selección.

20. `<option value="" selected disabled>Seleccionar</option>`: Una opción de selección inicial deshabilitada que muestra el texto "Seleccionar". Tiene un atributo "value" vacío y está seleccionada por defecto.

21. `<option value="cesar">Cifrado César</option>`: Una opción de selección que muestra el texto "Cifrado César" y tiene un valor "cesar".

22. `<option value="afin">Cifrado Afín</option>`: Una opción de selección que muestra el texto "Cifrado Afín" y tiene un valor "afin".

23. `<div id="cesar-options" class="form-group hidden">`: Un contenedor que agrupa las opciones específicas del cifrado César. Tiene un atributo "id" establecido como "cesar-options" y las clases CSS "form-group" y "hidden" para estilización y ocultar por defecto.

24. `<label for="shift">Desplazamiento:</label>`: Etiqueta que describe un campo de entrada numérica con el atributo "shift". Muestra el texto "Desplazamiento:".

25. `<input type="number" id="shift" placeholder="Desplazamiento" min="1" required>`: Un campo de entrada numérica donde los usuarios pueden ingresar el valor de desplazamiento para el cifrado César. Tiene un atributo "id" establecido como "shift", un marcador de posición "Desplazamiento", un valor mínimo "1" y se requiere completar el campo.

26. `<div id="afin-options" class="form-group hidden">`: Un contenedor que agrupa las opciones específicas del cifrado Afín. Tiene un atributo "id" establecido como "afin-options" y las clases CSS "form-group" y "hidden" para estilización y ocultar por defecto.

27. `<label for="keyA">Clave A:</label>`: Etiqueta que describe un campo de entrada numérica con el atributo "keyA". Muestra el texto "Clave A:".

28. `<input type="number" id="keyA" placeholder="Clave A" required>`: Un campo de entrada numérica donde los usuarios pueden ingresar el valor de la clave A para el cifrado Afín. Tiene un atributo "id" establecido como "keyA", un marcador de posición "Clave A" y se requiere completar el campo.

29. `<label for="keyB">Clave B:</label>`: Etiqueta que describe un campo de entrada numérica con el atributo "keyB". Muestra el texto "Clave B:".

30. `<input type="number" id="keyB" placeholder="Clave B" required>`: Un campo de entrada numérica donde los usuarios pueden ingresar el valor de la clave B para el cifrado Afín. Tiene un atributo "id" establecido como "keyB", un marcador de posición "Clave B" y se requiere completar el campo.

31. `<div class="button-group">`: Un contenedor para agrupar los botones relacionados.

32. `<button onclick="encrypt()" class="btn">Cifrar</button>`: Un botón que llama a la función "encrypt()" cuando se hace clic en él. Tiene la clase CSS "btn" para estilización.

33. `<button onclick="decrypt()" class="btn">Descifrar</button>`: Un botón que llama a la función "decrypt()" cuando se hace clic en él. Tiene la clase CSS "btn" para estilización.

34. `<button onclick="clearFields()" class="btn">Limpiar</button>`: Un botón que llama a la función "clearFields()" cuando se hace clic en él. Tiene la clase CSS "btn" para estilización.

35. `<div class="form-group">`: Un contenedor para agrupar elementos relacionados dentro de un formulario.

36. `<label for="result">Resultado:</label>`: Etiqueta que describe un campo de entrada de texto de solo lectura con el atributo "result". Muestra el texto "Resultado:".

37. `<div class="result-container">`: Un contenedor para el campo de entrada de texto de resultado y el ícono de copiar.

38. `<input type="text" id="result" class="form-control" readonly>`: Un campo de entrada de texto de solo lectura que muestra el resultado del cifrado o descifrado. Tiene un atributo "id" establecido como "result" y la clase CSS "form-control".

39. `<img src="./assets/btn-copy.png" alt="Icono de copiar" class="copy-icon" id="copy-icon">`: Una imagen de un ícono de copiar representado por un archivo de imagen "btn-copy.png". Tiene un texto alternativo "Icono de copiar" y las clases CSS "copy-icon" e "id" para estilización y manipulación en JavaScript.

40. `<div class="theme-toggle">`: Un contenedor para el botón de cambio de tema.

41. `<button onclick="toggleTheme()" class="btn">Cambiar tema</button>`: Un botón que llama a la función "toggleTheme()" cuando se hace clic en él. Tiene la clase CSS "btn" para estilización.

42. `<footer class="footer">`: El elemento de pie de página que contiene información sobre el desarrollador.

43. `Desarrollado por: Dennis290699`: El texto que indica el nombre del desarrollador.

44. `<script src="./js/script.js"></script>`: Enlaza un archivo JavaScript externo llamado "script.js" para agregar interactividad y funcionalidad al sitio web.

</p>