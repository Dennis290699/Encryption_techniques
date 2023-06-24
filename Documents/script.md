<div align="center">
  <h1 id="script_js">script.js</h1>
</div>

<p>

Aquí tienes un desglose de los elementos y su funcionalidad en el código JavaScript:

1. Variables y constantes:
   - `cipherSelect`: Almacena la referencia al elemento select del tipo de cifrado.
   - `cesarOptions`: Almacena la referencia al elemento div que contiene las opciones para el cifrado César.
   - `afinOptions`: Almacena la referencia al elemento div que contiene las opciones para el cifrado Afín.
   - `message`: Almacena el valor del campo de entrada de mensaje.
   - `cipherType`: Almacena el valor del tipo de cifrado seleccionado.
   - `encryptedMessage`: Almacena el mensaje encriptado.
   - `shift`: Almacena el valor del campo de desplazamiento para el cifrado César.
   - `keyA`: Almacena el valor del campo de clave A para el cifrado Afín.
   - `keyB`: Almacena el valor del campo de clave B para el cifrado Afín.
   - `decryptedMessage`: Almacena el mensaje desencriptado.
   - `modInverse`: Almacena el valor del inverso multiplicativo modular de keyA para el cifrado Afín.
   - `copyIcon`: Almacena la referencia al elemento de icono de copiar.
   - `resultInput`: Almacena la referencia al elemento de entrada de texto de resultado.
   - `clearIcon`: Almacena la referencia al elemento de icono de limpiar.
   - `messageInput`: Almacena la referencia al elemento de entrada de texto de mensaje.

2. Funciones:
   - `toggleOptions()`: Controla la visibilidad de las opciones de cifrado en función del tipo de cifrado seleccionado.
   - `encrypt()`: Realiza la encriptación del mensaje según el tipo de cifrado seleccionado (César o Afín).
   - `decrypt()`: Realiza la desencriptación del mensaje según el tipo de cifrado seleccionado (César o Afín).
   - `clearFields()`: Limpia los campos de entrada y restablece las selecciones a sus valores iniciales.
   - `toggleTheme()`: Cambia el tema de la página entre claro y oscuro.

3. Eventos:
   - `"load"`: Se dispara cuando la página se carga y llama a la función `toggleOptions()` para ocultar las opciones por defecto.
   - `"change"`: Se dispara cuando se cambia la selección del tipo de cifrado y llama a la función `toggleOptions()` para mostrar u ocultar las opciones correspondientes.
   - `"click"`:
     - En el icono de copiar (`copyIcon`): Selecciona y copia el texto encriptado al portapapeles, cambia la imagen del icono a la versión "clickeada" y luego la restaura después de 2 segundos.
     - En el icono de limpiar (`clearIcon`): Limpia el campo de entrada de mensaje, cambia la imagen del icono a la versión "clickeada" y luego la restaura después de 2 segundos.

4. Manipulación del DOM:
   - Se obtienen referencias a elementos del DOM utilizando métodos como `getElementById`, `querySelector`, `getElementsByTagName`, etc.
   - Se actualizan los valores de los campos de entrada y resultado mediante la asignación de valores a las propiedades `value` de los elementos correspondientes.
   - Se agregan y eliminan clases CSS para mostrar u ocultar elementos o aplicar estilos específicos.

# Explicacion detallada de las funciones

## Función toggleOptions():



La función `toggleOptions()` se encarga de mostrar u ocultar las opciones adicionales correspondientes a los diferentes tipos de cifrado en una página web. A continuación se explica su funcionamiento:

1. Se obtiene el elemento select con el id "cipher" y se asigna a la variable `cipherSelect`.
2. Se obtienen los elementos con los ids "cesar-options" y "afin-options" y se asignan a las variables `cesarOptions` y `afinOptions`, respectivamente.
3. Se agrega la clase "hidden" a los elementos `cesarOptions` y `afinOptions` para ocultar las opciones por defecto.
4. Se realiza una comprobación del valor seleccionado en el elemento select `cipherSelect`.
5. Si el valor seleccionado es "cesar", se remueve la clase "hidden" del elemento `cesarOptions` para mostrar las opciones adicionales correspondientes al cifrado César.
6. Si el valor seleccionado es "afin", se remueve la clase "hidden" del elemento `afinOptions` para mostrar las opciones adicionales correspondientes al cifrado Afín.
7. La función `toggleOptions()` se utiliza en el evento "load" del objeto `window`, lo que significa que se llamará automáticamente cuando se cargue la página para ocultar las opciones por defecto según el tipo de cifrado seleccionado.

En resumen, esta función se encarga de controlar la visibilidad de las opciones adicionales en función del tipo de cifrado seleccionado en un formulario. Al cargar la página, se ocultan las opciones por defecto y se muestra el conjunto de opciones correspondiente al tipo de cifrado seleccionado inicialmente.

## Función encrypt():

La función `encrypt()` se encarga de encriptar un mensaje de acuerdo al tipo de cifrado seleccionado (César o Afín). A continuación se explica su funcionamiento:

1. Se obtiene el valor del mensaje ingresado por el usuario a través del campo de entrada con el id "message". El mensaje se convierte a mayúsculas utilizando el método `toUpperCase()` para asegurar consistencia en el cifrado.

2. Se obtiene el tipo de cifrado seleccionado a través del elemento select con el id "cipher".

3. Se crea una variable `encryptedMessage` que almacenará el mensaje encriptado.

4. Si el tipo de cifrado es "cesar":
   - Se obtiene el valor del desplazamiento ingresado por el usuario a través del campo de entrada con el id "shift" y se convierte a un número entero utilizando `parseInt()`.
   - Se realiza un bucle `for` que itera sobre cada caracter del mensaje.
   - Se obtiene el código Unicode del caracter actual utilizando `charCodeAt()`.
   - Si el código Unicode corresponde a una letra mayúscula (valores entre 65 y 90), se realiza el cifrado César sumando el desplazamiento y utilizando la fórmula `((charCode - 65 + shift) % 26) + 65` para obtener el nuevo código Unicode encriptado.
   - Si el código Unicode corresponde a una letra minúscula (valores entre 97 y 122), se realiza el cifrado César de manera similar pero considerando los valores correspondientes a las letras minúsculas.
   - En caso contrario, si el caracter no es alfabético, se añade directamente al mensaje encriptado sin modificar.
   - El caracter encriptado se agrega a la variable `encryptedMessage`.

5. Si el tipo de cifrado es "afin":
   - Se obtienen los valores de las claves A y B ingresadas por el usuario a través de los campos de entrada con los ids "keyA" y "keyB", respectivamente.
   - Se realiza un bucle `for` que itera sobre cada caracter del mensaje de manera similar al caso anterior.
   - Si el código Unicode corresponde a una letra mayúscula, se realiza el cifrado Afín utilizando la fórmula `((keyA * (charCode - 65) + keyB) % 26) + 65` para obtener el nuevo código Unicode encriptado.
   - Si el código Unicode corresponde a una letra minúscula, se realiza el cifrado Afín de manera similar pero considerando los valores correspondientes a las letras minúsculas.
   - En caso contrario, si el caracter no es alfabético, se añade directamente al mensaje encriptado sin modificar.
   - El caracter encriptado se agrega a la variable `encryptedMessage`.

6. Por último, se actualiza el valor del campo de entrada de resultado con el mensaje encriptado obtenido, utilizando el método `getElementById()` para seleccionar el elemento con el id "result".

En resumen, la función `encrypt()` toma el mensaje ingresado por el usuario, determina el tipo de cifrado seleccionado y aplica el cifrado correspondiente para obtener el mensaje encriptado. Luego, actualiza el campo de entrada de resultado con el mensaje encriptado.

## Función decrypt():

La función `decrypt()` se encarga de desencriptar un mensaje de acuerdo al tipo de cifrado seleccionado (César o Afín). A continuación se explica su funcionamiento:

1. Se obtiene el valor del mensaje encriptado ingresado por el usuario a través del campo de entrada con el id "message". El mensaje encriptado se convierte a mayúsculas utilizando el método `toUpperCase()` para asegurar consistencia en el descifrado.

2. Se obtiene el tipo de cifrado seleccionado a través del elemento select con el id "cipher".

3. Se crea una variable `decryptedMessage` que almacenará el mensaje descifrado.

4. Si el tipo de cifrado es "cesar":
   - Se obtiene el valor del desplazamiento ingresado por el usuario a través del campo de entrada con el id "shift" y se convierte a un número entero utilizando `parseInt()`.
   - Se realiza un bucle `for` que itera sobre cada caracter del mensaje encriptado.
   - Se obtiene el código Unicode del caracter actual utilizando `charCodeAt()`.
   - Si el código Unicode corresponde a una letra mayúscula (valores entre 65 y 90), se realiza el descifrado César restando el desplazamiento y utilizando la fórmula `((charCode - 65 - shift + 26) % 26) + 65` para obtener el nuevo código Unicode descifrado.
   - Si el código Unicode corresponde a una letra minúscula (valores entre 97 y 122), se realiza el descifrado César de manera similar pero considerando los valores correspondientes a las letras minúsculas.
   - En caso contrario, si el caracter no es alfabético, se añade directamente al mensaje descifrado sin modificar.
   - El caracter descifrado se agrega a la variable `decryptedMessage`.

5. Si el tipo de cifrado es "afin":
   - Se obtienen los valores de las claves A y B ingresadas por el usuario a través de los campos de entrada con los ids "keyA" y "keyB", respectivamente.
   - Se calcula el inverso multiplicativo modular de keyA utilizando un bucle `for`. El inverso multiplicativo modular es aquel número x tal que ((keyA * x) % 26 === 1). Este valor se almacena en la variable `modInverse`.
   - Se realiza un bucle `for` que itera sobre cada caracter del mensaje encriptado de manera similar al caso anterior.
   - Si el código Unicode corresponde a una letra mayúscula, se realiza el descifrado Afín utilizando la fórmula `((modInverse * (charCode - 65 - keyB + 26)) % 26) + 65` para obtener el nuevo código Unicode descifrado.
   - Si el código Unicode corresponde a una letra minúscula, se realiza el descifrado Afín de manera similar pero considerando los valores correspondientes a las letras minúsculas.
   - En caso contrario, si el caracter no es alfabético, se añade directamente al mensaje descifrado sin modificar.
   - El caracter descifrado se agrega a la variable `decryptedMessage`.

6. Por último, se actualiza el valor del campo de entrada de resultado con el mensaje descifrado obtenido, utilizando el método `getElementById()` para seleccionar el elemento con el id "result".

En resumen, la función `decrypt()` toma el mensaje encriptado ingresado por el usuario, determina el tipo de cifrado seleccionado y aplica el descifrado correspondiente para obtener el mensaje original. Luego, actualiza el campo de entrada de resultado con el mensaje descifrado.

## Función clearFields():

La función `clearFields()` se encarga de limpiar los campos de entrada y salida de un formulario de cifrado. A continuación se explica su funcionamiento:

1. Se utiliza `document.getElementById` para obtener los elementos correspondientes a los campos de entrada y salida del formulario utilizando sus respectivos ids.
2. Se asigna una cadena vacía (`""`) a la propiedad `value` de cada campo, lo que borra el contenido actual y lo deja vacío.
3. Se utiliza `document.getElementById` para obtener el elemento del select con el id "cipher" y se establece la propiedad `selectedIndex` en 0 para restablecer la selección del tipo de cifrado a su valor inicial.
4. Se llama a la función `toggleOptions()`, que explicamos anteriormente, para ocultar las opciones de cifrado y mostrar las opciones por defecto.

En resumen, la función `clearFields()` restablece los campos del formulario a su estado inicial, borrando cualquier contenido previo y restableciendo la selección del tipo de cifrado. Esto permite al usuario limpiar los campos y comenzar de nuevo con nuevos valores para el cifrado.

## Función toggleTheme():

La función `toggleTheme()` se encarga de cambiar entre dos temas de la interfaz: el tema claro y el tema oscuro. Aquí está su funcionalidad:

1. Se utiliza `document.getElementsByTagName` para obtener todos los elementos `body` del documento. Esto devuelve una lista de elementos, pero en este caso, se toma el primer elemento de la lista utilizando `[0]` ya que se asume que solo hay un elemento `body` en el documento.
2. Se accede a la propiedad `classList` del elemento `body`. La propiedad `classList` proporciona métodos para agregar, eliminar y alternar clases CSS en el elemento.
3. Se llama al método `toggle("dark-theme")` en la lista de clases del elemento `body`. Esto alternará la presencia de la clase CSS "dark-theme" en el elemento `body`. Si la clase está presente, se eliminará; de lo contrario, se agregará.
4. Como resultado, cada vez que se llama a `toggleTheme()`, se alternará entre aplicar o quitar la clase "dark-theme" en el elemento `body`, cambiando así el tema de la interfaz entre claro y oscuro.

En resumen, la función `toggleTheme()` permite cambiar dinámicamente el tema de la interfaz entre claro y oscuro al alternar la clase CSS "dark-theme" en el elemento `body`. Esto proporciona una forma sencilla de cambiar la apariencia visual del sitio web.

</p>