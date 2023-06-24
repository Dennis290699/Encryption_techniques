<div align="center">
  <h1 id="style_css">style.css</h1>
</div>

<p>

El CSS contiene estilos para diferentes elementos en la página HTML. Aquí está el desglose de los estilos y su funcionalidad:

1. `body`: Estilos aplicados al elemento body de la página HTML.
   - `font-family`: Establece la fuente de texto como 'Roboto', Arial, sans-serif.
   - `background-color`: Establece el color de fondo como #f5f5f5.
   - `color`: Establece el color de texto como #333.
   - `transition`: Establece una transición suave para los cambios de color de fondo y color de texto con una duración de 0.3 segundos.
   - `display`: Establece el valor de visualización como flex.
   - `justify-content`: Centra los elementos horizontalmente.
   - `align-items`: Centra los elementos verticalmente.
   - `height`: Establece la altura como 100vh (100% de la altura de la ventana).
   - `margin`: Establece los márgenes como 0.
   - `padding`: Establece el padding como 0.
   - `box-sizing`: Establece el modelo de caja como border-box.

2. `.dark-theme`: Estilos específicos para el tema oscuro.
   - `background-color`: Establece el color de fondo como #333.
   - `color`: Establece el color de texto como #f5f5f5.

3. `.container`: Estilos aplicados al contenedor principal con la clase "container".
   - `background-color`: Establece el color de fondo como #fff.
   - `transition`: Establece una transición suave para los cambios de color de fondo con una duración de 0.3 segundos.
   - `color`: Establece el color de texto como #333.
   - `padding`: Establece el padding como 20px.
   - `border-radius`: Establece el radio de borde como 5px.
   - `box-shadow`: Establece una sombra al contenedor.
   - `text-align`: Centra el texto en el contenedor.
   - `max-width`: Establece el ancho máximo como 500px.
   - `width`: Establece el ancho como 100%.
   - `margin`: Establece los márgenes superior e inferior como 0 y los laterales como "auto".
   - `box-sizing`: Establece el modelo de caja como border-box.

4. `.result-container` y `.input-container`: Estilos aplicados a los contenedores de entrada y resultado.
   - `position`: Establece la posición como relativa.
  
5. `.input-container input[type="text"]` y `.result-container input[type="text"]`: Estilos aplicados a los campos de entrada de texto en los contenedores de entrada y resultado.
   - `padding-right`: Establece el padding derecho como 35px.
   - `max-width`: Establece el ancho máximo como 100%.
   - `box-sizing`: Establece el modelo de caja como border-box.

6. `.clear-icon` y `.copy-icon`: Estilos aplicados a los íconos de borrado y copiado.
   - `position`: Establece la posición como absoluta.
   - `top`: Establece la posición superior como 15%.
   - `right`: Establece la posición derecha como 10px.
   - `width`: Establece el ancho como 20px.
   - `height`: Establece la altura como 20px.
   - `cursor`: Establece el cursor como puntero.
   - `background-color`: Establece el color de fondo como #fff.
   - `display`: Establece la visualización como flex.
   - `align-items`: Centra verticalmente los elementos dentro del ícono.
   - `justify-content`: Centra horizontalmente los elementos dentro del ícono.

7. `h1`: Estilos aplicados a los encabezados de nivel 1 (h1).
   - `font-size`: Establece el tamaño de fuente como 24px.
   - `margin-bottom`: Establece el margen inferior como 20px.

8. `.form-group`: Estilos aplicados a los grupos de formularios.
   - `margin-bottom`: Establece el margen inferior como 15px.

9. `label`: Estilos aplicados a las etiquetas de los campos de entrada.
   - `display`: Establece la visualización como bloque.
   - `font-weight`: Establece el peso de fuente como negrita.
   - `margin-bottom`: Establece el margen inferior como 5px.

10. `input[type="text"], input[type="number"], select`: Estilos aplicados a los campos de entrada de texto y selección.
    - `width`: Establece el ancho como 100%.
    - `padding`: Establece el padding como 8px.
    - `border`: Establece el borde como 1px sólido #ccc.
    - `border-radius`: Establece el radio de borde como 4px.
    - `font-size`: Establece el tamaño de fuente como 16px.
    - `box-sizing`: Establece el modelo de caja como border-box.

11. `.button-group`: Estilos aplicados a los grupos de botones.
    - `margin-top`: Establece el margen superior como 20px.
    - `margin-bottom`: Establece el margen inferior como 20px.
    - `display`: Establece la visualización como flex.
    - `justify-content`: Centra horizontalmente los elementos dentro del grupo.

12. `.btn`: Estilos aplicados a los botones.
    - `display`: Establece la visualización como inline-block.
    - `padding`: Establece el padding como 10px 20px.
    - `font-size`: Establece el tamaño de fuente como 16px.
    - `font-weight`: Establece el peso de fuente como negrita.
    - `text-align`: Establece la alineación de texto como centro.
    - `text-decoration`: Establece la decoración de texto como ninguna.
    - `cursor`: Establece el cursor como puntero.
    - `background-color`: Establece el color de fondo como #4caf50.
    - `color`: Establece el color de texto como #fff.
    - `border`: Establece el borde como ninguno.
    - `border-radius`: Establece el radio de borde como 4px.
    - `transition`: Establece una transición suave para los cambios de color de fondo con una duración de 0.3 segundos.
  
13. `.btn:hover`: Estilos aplicados al botón cuando se pasa el cursor sobre él.
    - `background-color`: Establece el color de fondo como #45a049.

14. `.form-group label, .button-group button`: Estilos aplicados a las etiquetas de los grupos de formularios y botones.
    - `margin-right`: Establece el margen derecho como 10px.

15. `.form-group:last-child`: Estilos aplicados al último elemento `.form-group` para eliminar el margen inferior.
    - `margin-bottom`: Establece el margen inferior como 0.

16. `#result`: Estilos aplicados al campo de resultado.
    - `font-weight`: Establece el peso de fuente como negrita.
    - `overflow`: Establece el desbordamiento como automático.
    - `position`: Establece la posición como relativa.

17. `.theme-toggle`: Estilos aplicados al interruptor de tema.
    - `margin-top`: Establece el margen superior como 20px.
    - `text-align`: Establece la alineación de texto como centro.

18. `.hidden`: Estilos aplicados para ocultar elementos.
    - `display`: Establece la visualización como none.

19. Estilos específicos para el tema oscuro (`.dark-theme` y sus selectores correspondientes):
    - Los estilos dentro de `.dark-theme` anulan los estilos anteriores y aplican un tema oscuro.
    - Cambian los colores de fondo, colores de texto y colores de borde para adaptarse al tema oscuro.

20. `.footer`: Estilos aplicados al pie de página.
    - `position`: Establece la posición como fija.
    - `bottom`: Establece la posición inferior como 0.
    - `left`: Establece la posición izquierda como 0.
    - `width`: Establece el ancho como 100%.
    - `background-color`: Establece el color de fondo como #f5f5f5.
    - `padding`: Establece el padding como 10px 0.
    - `text-align`: Establece la alineación de texto como centro.
    - `font-size`: Establece el tamaño de fuente como 14px.
    - `color`: Establece el color de texto como #333.
    - `transition`: Establece una transición suave para los cambios de color de fondo y color de texto con una duración de 0.3 segundos.

21. `.dark-theme .footer`: Estilos específicos para el pie de página en el tema oscuro.
    - Cambian los colores de fondo y colores de texto para adaptarse al tema oscuro.

</p>