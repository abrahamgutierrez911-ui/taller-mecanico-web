# GF Mechanic & Aesthetic - Sitio web

Pagina web estatica para un taller mecanico automotriz. Esta hecha con HTML, CSS y JavaScript puro, sin frameworks, para que sea facil de editar, respaldar y publicar.

## Estructura del proyecto

```text
Pagina web Taller Automotriz/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── logo-gf-mechanic-aesthetic.png
│   └── hero-taller-automotriz.png
├── README.md
└── .gitignore
```

## Como abrir el sitio localmente

1. Abre VS Code.
2. Selecciona `File > Open Folder`.
3. Abre la carpeta del proyecto.
4. Abre `index.html`.
5. Clic derecho sobre `index.html` y selecciona `Open with Live Server`, si tienes instalada la extension Live Server.

Tambien puedes abrir `index.html` directamente en el navegador, pero Live Server es mejor para revisar cambios.

## Donde editar informacion del taller

Los datos principales estan en `script.js`, dentro del objeto `business`:

- Nombre del taller: `name`
- Telefono: `phone`
- WhatsApp visible: `whatsappLabel`
- Numero real de WhatsApp: `whatsappNumber`
- Direccion: `address`
- Horarios: `hours`
- Correo: `email`
- Mapa: `mapsEmbedUrl`
- Facebook e Instagram: `facebook`, `instagram`

Servicios, secciones, testimonios y galeria se editan en `index.html`.

Colores, tamanos, espacios, responsive y estilos se editan en `style.css`.

Imagenes y logo se guardan en `assets/`.

## Reglas para no romper rutas

- Conserva `index.html`, `style.css` y `script.js` en la raiz del proyecto.
- Guarda imagenes dentro de `assets/`.
- Usa rutas relativas, por ejemplo: `assets/nombre-imagen.jpg`.
- Evita nombres de archivos con acentos, espacios o caracteres especiales.
- Si cambias el nombre de una imagen, actualiza tambien la ruta en `index.html` o `style.css`.
- Respeta mayusculas y minusculas en nombres de archivos.

## Flujo recomendado para actualizar

1. Haz una copia de seguridad de la carpeta antes de cambios grandes.
2. Edita archivos en VS Code.
3. Prueba localmente con Live Server.
4. Revisa que funcionen menu, botones, imagenes, WhatsApp, formulario y mapa.
5. Guarda cambios con Git.
6. Sube cambios a GitHub.
7. Revisa la pagina publicada.

## Comandos basicos de Git

Ejecuta estos comandos en la terminal de VS Code, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primera version del sitio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git
git push -u origin main
```

Para cambios posteriores:

```bash
git status
git add .
git commit -m "Actualiza datos del taller"
git push
```

## Si aparece "git no se reconoce"

Ese error significa que Git no esta instalado en Windows o no esta agregado al PATH.

Solucion recomendada:

1. Descarga Git para Windows desde https://git-scm.com/download/win
2. Instala con las opciones predeterminadas.
3. Cuando el instalador pregunte por el uso desde la terminal, conserva la opcion que permite usar Git desde la linea de comandos.
4. Cierra VS Code y vuelve a abrirlo.
5. En la terminal ejecuta:

```bash
git --version
```

Si aparece una version de Git, ya puedes ejecutar los comandos de publicacion.

## Publicacion recomendada

Para este proyecto se recomienda publicar con Netlify conectado a GitHub.

Ventajas:

- Funciona muy bien para HTML, CSS y JavaScript.
- Tiene plan gratis suficiente para una pagina de negocio local.
- Permite dominio personalizado.
- Incluye HTTPS/SSL.
- Publica automaticamente cada vez que haces `git push`.
- Permite volver a versiones anteriores si algo sale mal.

## Checklist antes de publicar

- `index.html` existe en la raiz.
- `style.css` y `script.js` cargan correctamente.
- Las imagenes estan dentro de `assets/`.
- WhatsApp tiene el numero correcto en `script.js`.
- Telefono, direccion, correo y horarios son correctos.
- El formulario abre WhatsApp con el mensaje.
- El mapa muestra la ubicacion correcta.
- La pagina se reviso en celular y computadora.
- No hay archivos privados, claves, contrasenas o documentos personales.

## Checklist despues de actualizar

- Probar localmente antes de subir.
- Confirmar que Git muestra solo los cambios esperados.
- Hacer commit con mensaje claro.
- Hacer push a GitHub.
- Esperar el despliegue en Netlify.
- Abrir la pagina publicada en una ventana privada.
- Revisar imagenes, enlaces, WhatsApp, telefono y formulario.
- Si no ves cambios, refrescar con `Ctrl + F5` o borrar cache.
