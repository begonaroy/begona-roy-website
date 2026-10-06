# Publicación en Firebase Hosting

## Configuración preparada

- Proyecto Firebase: `begona-roy-website` (alias `default` en `.firebaserc`).
- Dominio principal: `https://begoñaroypsicologa.es`.
- Dominio en ASCII para URLs y DNS: `xn--begoaroypsicologa-ixb.es`.
- Firebase publica únicamente `dist/`; los cinco HTML mantienen sus metadatos propios.
- Las rutas usan barra final. Las direcciones desconocidas devuelven 404; no hay un rewrite general a la portada.

## Primera publicación desde PowerShell

En la carpeta del repositorio, con la CLI oficial instalada:

```powershell
& "$env:APPDATA\npm\firebase.cmd" login
npm.cmd ci
& "$env:APPDATA\npm\firebase.cmd" deploy --only hosting --project begona-roy-website
```

El despliegue ejecuta el typecheck y el build mediante los hooks de `firebase.json`.
No es necesario ejecutar `firebase init hosting`: la configuración ya está creada.

Comprueba la URL `web.app` que devuelva Firebase y abre directamente estas rutas:

- `/`
- `/psicologia-zaragoza/`
- `/liberacion-del-pericardio-zaragoza/`
- `/apoyo-psicologico-profesionales-ongs/`
- `/contacto-psicologa-zaragoza/`

Recarga cada página y verifica que se mantienen la vista y sus metadatos.

## Dominio y DNS

En [Firebase Hosting](https://console.firebase.google.com/project/begona-roy-website/hosting),
añade `xn--begoaroypsicologa-ixb.es` como dominio personalizado.

En el panel DNS de tu proveedor, conserva `byte.dns-parking.com` y
`pixel.dns-parking.com` como servidores de nombres. Copia exactamente los tipos,
nombres y valores de los registros que muestre Firebase; no uses una IP deducida.
Mantén el TXT de verificación y los registros de correo (MX, SPF y DKIM).
Retira solo los registros de otro hosting o aparcamiento que entren en conflicto
en el nombre que estás conectando, siguiendo el asistente de Firebase.

Añade también `www.xn--begoaroypsicologa-ixb.es` en Firebase, con redirección al
dominio principal, y configura sus registros DNS según el asistente. Espera al
estado **Connected/Conectado** y al certificado HTTPS antes de darlo por publicado.
La propagación y el certificado pueden tardar hasta 24 horas.

Referencia: [conectar un dominio a Firebase Hosting](https://firebase.google.com/docs/hosting/custom-domain).

## GitHub Actions

Repositorio: `begonaroy/begona-roy-website`.

Los workflows están preparados para publicar cada actualización de `main` y
crear vistas previas de siete días para pull requests del mismo repositorio.
Las pull requests de forks no reciben el secreto de despliegue.

Falta provisionar el secreto de GitHub:
`FIREBASE_SERVICE_ACCOUNT_BEGONA_ROY_WEBSITE`.
Para que el asistente oficial cree la cuenta de servicio y cargue su clave
directamente en los secretos del repositorio:

```powershell
& "$env:APPDATA\npm\firebase.cmd" init hosting:github --project begona-roy-website
```

Selecciona `begonaroy/begona-roy-website`. Si pregunta por sobrescribir los
workflows existentes, responde **No**. Para las publicaciones automáticas,
selecciona **Sí** y la rama `main`; conserva el workflow de producción existente.
Si solicita un comando de build, usa `npm ci && npm run lint && npm run build`.
No pegues claves o códigos de autorización en el chat ni los guardes en Git.

Guarda y sube los cambios de configuración y los workflows después de crear el
secreto. Comprueba en la pestaña **Actions** que el despliegue termina correctamente.
No subas `dist/`, `.firebase/`, logs ni credenciales.

Referencia: [integración oficial de Firebase con GitHub](https://firebase.google.com/docs/hosting/github-integration).

## Comprobación final

- HTTPS en el dominio principal y redirección desde `www`.
- Las cinco rutas abren y se recargan sin errores; las rutas inexistentes dan 404.
- Canonical, Open Graph, datos estructurados, `robots.txt` y `sitemap.xml` usan el dominio nuevo.
- Imágenes, móvil/escritorio, temas claro/oscuro, teclado, movimiento reducido, modales y navegación atrás/adelante.
- El contacto abre Gmail con el mensaje preparado; el usuario debe enviarlo allí. Comprueba también correo y WhatsApp.
- Añade una propiedad de dominio en Google Search Console, verifica el TXT solicitado y envía `https://xn--begoaroypsicologa-ixb.es/sitemap.xml`.

El hosting sirve la aplicación React; no añade un backend de envío de formularios.

## Validación local realizada

- `npm.cmd run lint` y `npm.cmd run build`: correctos.
- Revisados los cinco HTML generados, canonical, Open Graph, Twitter, JSON-LD de la portada, rutas de assets, robots y sitemap.
- Configuración JSON y ambos workflows YAML: válidos.
- Emulador real de Firebase Hosting: cinco rutas con respuesta 200 y canonical propio, redirecciones 301 a barra final, assets/robots/sitemap con 200 y ruta inexistente con 404.
- Publicación remota completada en `https://begona-roy-website.web.app` el 2 de octubre de 2026. Firebase ha confirmado los permisos de la cuenta colaboradora y la publicación en el canal `live`.
- Comprobadas en producción las cinco rutas y sus canonical, redirecciones a barra final, assets, robots, sitemap y respuesta 404 para una ruta inexistente.
- Pendientes de acceso a las cuentas: secreto de GitHub, DNS, HTTPS del dominio personalizado y Search Console.
- No se ha podido comprobar la interfaz en navegador (móvil/escritorio, temas, teclado, movimiento reducido, modales y contacto): este entorno no expone sesiones de navegador.
