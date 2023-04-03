
# GULP & SASS pre-configurado

Saludos! Seguramente nos ha pasado que proyecto tras proyecto tenemos que empezar desde 0 y volver a instalar todo denuevo. Si usas **Gulp** para automatizar tareas y **SASS** para tener un codigo de frontend mucho mas legible. Pues te invito a probar mi pantilla para desarrollo frontend web, el cual consta con herramientas muy interesantes que podrían facilitar la escritura y manejo del proyecto. 


# Files

Al descargar el repositorio tendrás en tu ordenador la plantilla que he creado para comenzar cada proyecto. Está en su versión más estable, la cual puedes ver o editar desde el *package.json* para editar o agregar funciones puedes hacerlo libremente desde el *gulpfile.js* donde intenté explicar que hacen sus funciones de la mejor manera.

## Scripts

Recuerda que los scripts se ejecutan con ``npm run <script-name>``.

|Nombre         |Descripción                     
|----------------|-------------------------------
|css |Actualiza y compila tu SCSS a CSS          
|dev          |Actualizará todo tu proyecto y ejecutará todas las tareas asignadas.            

## Funciones gulp

Recuerda que estas funciones se ejecutan con ``npx gulp <function-name>``

|Función         |Descripción                     
|----------------|-------------------------------
|css |Actualiza y compila tu SCSS a CSS    
|js |Optimiza y guarda tus archivos de JavaScript dentro de la carpeta de exportación.           
|imagenes         |Tomará todas las imágenes de tu código fuente y las optimizará. 
|versionWebp         |Va a tomar todos las imágenes y las exportará en .webp optimizado.
|versionAvif         |Va a tomar todos las imágenes y las exportará en .avif optimizado.
|dev          |Actualizará todo tu proyecto y ejecutará todas las tareas asignadas.           

## Dependencias
Para instalar todas las dependencias de un archivo `package.json`, puedes usar el comando `npm install` en la línea de comando.

Los pasos para hacerlo son los siguientes:

1.  Abre una terminal o línea de comando en tu computadora.
2.  Navega hasta el directorio donde se encuentra el archivo `package.json`.
3.  Escribe `npm install` y presiona Enter.

Este comando instalará todas las dependencias listadas en el archivo `package.json` en el directorio `node_modules`. Si también quieres instalar las dependencias de desarrollo, puedes usar el comando `npm install --dev` en su lugar.

Es importante tener en cuenta que necesitas tener Node.js y NPM (Node Package Manager) instalados en tu computadora para poder ejecutar estos comandos. Si no los tienes instalados, puedes descargarlos desde la página oficial de Node.js.

# Publicación

Espero que te sirva está plantilla para tus proyectos. Con el tiempo se irá actualizando y mejorando.


