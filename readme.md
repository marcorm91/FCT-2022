Ejecución proyecto
------------------

    1. Clonar repositorio
    2. Instalación de dependencias -> npm i
    3. Arrancar proyecto -> gulp

Generación de dist
------------------

    1. Ejecutamos en consola -> gulp dist
    2. Eliminamos el directorio 'Componentes', no nos hará falta.
    3. Páginas
        > Replace de link y scripts
            - Buscamos en todo el proyecto: ../../../assets/css/style.css
              Reemplazamos por ../../assets/css/style.css
              (Así con todos [main, owlcarousel, ...])

            - Buscamos en todo el proyecto: ../../../assets/js/main.js
              Reemplazamos por ../../assets/js/main.js
              (Así con todos [choosen, sortable, ...])

    3. CSS (Recursos como imágenes)
        > Nos vamos a style.css y buscamos ../../../../dev/assets/
            - Hacemos replace por ../

    3. Recursos en HTML (imágenes svg, png, ...)
        > Buscamos .png, .jpg, .mp4 -> ../../../assets/img
          Lo reemplazamos por ../../assets/img
        > Buscamos /dev/assets/img/
          Lo reemplazamos por ../../assets/img/