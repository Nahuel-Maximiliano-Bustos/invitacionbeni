PROYECTO: INVITACIÓN DIGITAL WEB PREMIUM — TEMÁTICA GALÁCTICA / SCI-FI

Quiero desarrollar una invitación digital web ultra premium para un cumpleaños infantil, utilizando React + Vite + JavaScript y componentes/efectos de ReactBits.

La temática solicitada por el cliente está inspirada visualmente en una estética de aventura espacial, ciencia ficción, galaxias, tecnología futurista y guerreros espaciales, con un claro guiño cinematográfico al universo de Star Wars/Mandalorian, pero el diseño visual debe ser original, sin depender de material gráfico oficial.

El resultado debe sentirse como una experiencia interactiva cinematográfica, no como una página web convencional.

⸻

1. OBJETIVO GENERAL

Crear una invitación web que al abrirse produzca un efecto WOW inmediato.

Debe transmitir:

* Espacio profundo.
* Galaxias.
* Tecnología futurista.
* Aventuras espaciales.
* Metal futurista.
* Interfaces holográficas.
* Estética cinematográfica.
* Luces y partículas.
* Animaciones suaves.
* Sensación de producto premium.
* Diseño infantil sofisticado, evitando que parezca una página genérica para niños.

La experiencia debe estar optimizada principalmente para celulares, pero ser completamente responsive para tablets y desktop.

⸻

2. STACK

Utilizar:

* React
* Vite
* JavaScript
* ReactBits
* CSS moderno
* Framer Motion si resulta necesario
* Web Audio API para efectos de sonido
* LocalStorage para funcionalidades que puedan funcionar sin backend
* SVG/CSS para elementos gráficos propios

NO utilizar frameworks innecesarios.

El proyecto debe ser limpio, modular y fácilmente editable.

⸻

3. ESTRUCTURA DEL PROYECTO

Crear una estructura similar a:

/src
/components
Hero.jsx
Countdown.jsx
EventDetails.jsx
MusicPlayer.jsx
Gallery.jsx
RSVP.jsx
Location.jsx
SoundEffects.jsx
ParticleBackground.jsx
LoadingScreen.jsx

/admin
AdminLogin.jsx
Dashboard.jsx
GuestsTable.jsx
GuestStats.jsx

/data
invitation.js

/assets
/images
/audio
/sounds

App.jsx
main.jsx
index.css

La información editable de la invitación debe estar centralizada en un archivo de configuración para poder reutilizar posteriormente el sistema para otros clientes.

⸻

4. PANTALLA DE APERTURA

Crear una pantalla inicial cinematográfica.

Al cargar:

* Fondo espacial animado.
* Estrellas en movimiento.
* Partículas.
* Nebulosas.
* Destellos.
* Efectos de luz.
* Elementos holográficos.
* Animaciones de entrada.

Mostrar:

“UNA NUEVA AVENTURA ESTÁ POR COMENZAR”

y posteriormente revelar:

“THIAGO”

“7 AÑOS”

La aparición del nombre debe ser espectacular, con una animación cinematográfica.

Agregar botón:

“ABRIR INVITACIÓN”

El botón debe tener:

* Glow.
* Hover.
* Animación.
* Efecto holográfico.
* Sonido futurista al tocarlo.

Al pulsarlo debe comenzar la experiencia y habilitar la música.

⸻

5. HERO PRINCIPAL

Crear un Hero de impacto.

Debe contener:

THIAGO

7 AÑOS

“PREPÁRATE PARA UNA AVENTURA FUERA DE ESTE MUNDO”

Fondo:

* Espacio.
* Planeta.
* Estrellas.
* Nebulosa.
* Partículas.
* Elementos tecnológicos.
* Siluetas originales de naves o elementos sci-fi.

No utilizar una composición genérica.

El diseño debe parecer una producción cinematográfica.

⸻

6. CUENTA REGRESIVA

Agregar una sección de countdown.

Mostrar:

DÍAS
HORAS
MINUTOS
SEGUNDOS

El contador debe actualizarse en tiempo real.

Diseñarlo como una interfaz futurista/holográfica.

Cada número debe tener:

* Glow.
* Transparencia.
* Bordes luminosos.
* Animaciones suaves.
* Efecto de transición al cambiar.

La fecha del evento debe estar configurada desde un archivo de configuración.

⸻

7. FECHA Y EVENTO

Crear una tarjeta futurista:

MISIÓN: CELEBRACIÓN

25 OCTUBRE
18:00 HS

Agregar una pequeña animación de escaneo/holograma.

⸻

8. UBICACIÓN

Crear una sección:

DESTINO

Nombre del salón.

Dirección.

Botón:

“VER UBICACIÓN”

Al pulsarlo abrir Google Maps mediante un enlace configurable.

Visualmente debe parecer una interfaz de coordenadas galácticas.

Ejemplo:

COORDENADAS DEL EVENTO

[ XXXXX ]
[ XXXXX ]

VER UBICACIÓN →

⸻

9. MÚSICA

La invitación debe tener música.

Crear un reproductor flotante premium.

Debe permitir:

* Play
* Pause
* Indicador de reproducción
* Animación de ondas
* Control de volumen cuando sea posible

La música debe comenzar después de la interacción inicial del usuario debido a las restricciones de autoplay de los navegadores.

Agregar una pequeña etiqueta:

“TRANSMISIÓN DE AUDIO”

El reproductor debe permanecer accesible mientras el usuario navega.

⸻

10. EFECTOS DE SONIDO

Agregar efectos de sonido originales inspirados en tecnología sci-fi.

IMPORTANTE:

NO utilizar directamente sonidos oficiales de Star Wars.

Crear o utilizar sonidos genéricos/originales de ciencia ficción.

Los botones principales deben producir pequeños efectos:

* Click futurista.
* Activación holográfica.
* Confirmación.
* Transición.
* Interfaz tecnológica.

Para botones especiales utilizar un efecto sonoro inspirado en la activación de un sable de luz, pero sin utilizar el sonido oficial de la franquicia.

Ejemplo:

Botón:

“ACTIVAR INVITACIÓN”

→ sonido de activación energética.

Botón:

“CONFIRMAR ASISTENCIA”

→ sonido de confirmación tecnológica.

Los sonidos deben poder desactivarse.

⸻

11. GALERÍA

Crear una sección para fotografías.

Debe permitir posteriormente agregar:

* Fotos.
* Videos.
* Imágenes verticales.
* Imágenes horizontales.

Utilizar una presentación premium:

* Carrusel.
* Parallax.
* Zoom.
* Transiciones cinematográficas.
* Efectos de profundidad.

Utilizar ReactBits cuando exista un componente adecuado.

Las imágenes deben estar preparadas para reemplazarse fácilmente.

⸻

12. CONFIRMACIÓN DE ASISTENCIA

Crear una sección claramente visible:

“¿TE SUMÁS A LA AVENTURA?”

“CONFIRMÁ TU ASISTENCIA”

Formulario:

Nombre y apellido

Cantidad de personas

¿Vas a asistir?

* Sí, ahí estaré
* No podré asistir

Opcional:

Mensaje

Botón:

“CONFIRMAR ASISTENCIA”

Al confirmar:

Mostrar una animación espectacular de éxito.

Mensaje:

“TRANSMISIÓN RECIBIDA”

“¡Tu asistencia fue confirmada!”

Agregar sonido de confirmación.

⸻

13. SISTEMA DE RSVP

La estructura debe estar preparada para almacenar:

* ID
* Nombre
* Apellido
* Teléfono opcional
* Cantidad de acompañantes
* Estado
* Mensaje
* Fecha de confirmación

Estados:

CONFIRMADO
NO ASISTE
PENDIENTE

La arquitectura debe permitir posteriormente conectar una API/backend real.

Para la primera versión, implementar una solución funcional de demostración utilizando LocalStorage si no existe backend.

IMPORTANTE:

No crear una falsa seguridad.

Si se utiliza LocalStorage, dejar claramente estructurado el código para sustituirlo posteriormente por una API.

⸻

14. PANEL ADMINISTRATIVO

Crear una ruta separada:

/admin

Debe existir un panel administrativo premium y responsive.

Crear:

/admin/login

/admin/dashboard

El panel debe permitir visualizar:

TOTAL INVITADOS

CONFIRMADOS

NO ASISTEN

PENDIENTES

TOTAL DE PERSONAS

Crear tarjetas estadísticas.

Ejemplo:

┌──────────────┐
│ CONFIRMADOS  │
│ 24           │
└──────────────┘

┌──────────────┐
│ NO ASISTEN   │
│ 5            │
└──────────────┘

┌──────────────┐
│ PERSONAS     │
│ 31           │
└──────────────┘

⸻

15. TABLA DE INVITADOS

Crear tabla:

Nombre
Acompañantes
Estado
Fecha
Mensaje
Acciones

Agregar:

* Buscar
* Filtrar por estado
* Ordenar
* Ver detalle
* Eliminar registro

En mobile convertir la tabla en cards.

⸻

16. EXPORTACIÓN

Agregar botón:

“EXPORTAR INVITADOS”

Permitir exportar los datos a CSV.

⸻

17. DISEÑO DEL ADMIN

El panel administrativo debe compartir la estética de la invitación:

* Fondo oscuro.
* Hologramas.
* Azul/teal.
* Metal.
* Glassmorphism.
* Glow.
* Microanimaciones.

Pero debe seguir siendo extremadamente usable.

No sacrificar funcionalidad por estética.

⸻

18. REACTBITS

Utilizar ReactBits de manera inteligente.

Buscar componentes apropiados para:

* Backgrounds
* Partículas
* Text animations
* Cards
* Buttons
* Cursor effects
* Scroll animations
* Glows
* Parallax
* Text effects

No utilizar ReactBits simplemente porque sí.

Cada efecto debe mejorar la experiencia.

Evitar saturar la pantalla.

⸻

19. ANIMACIONES

Utilizar animaciones:

* Fade
* Slide
* Scale
* Parallax
* Reveal
* Glow
* Particle movement
* Holographic scan
* Text reveal

Agregar animaciones al hacer scroll.

Cada sección debe aparecer progresivamente.

Evitar animaciones excesivamente rápidas.

La sensación debe ser:

CINEMATOGRÁFICA
PREMIUM
FLUIDA

⸻

20. EFECTOS VISUALES

Agregar:

* Starfield.
* Partículas.
* Nebulosa.
* Glow.
* Hologramas.
* Scanlines muy sutiles.
* Gradientes.
* Reflejos metálicos.
* Vidrio translúcido.
* Sombras profundas.
* Profundidad mediante capas.

Evitar:

* Colores chillones.
* Elementos infantiles genéricos.
* Emojis como decoración principal.
* Plantillas prediseñadas.
* Exceso de texto.
* Efectos baratos.

⸻

21. TIPOGRAFÍA

Utilizar una combinación de:

Tipografía futurista para títulos.

Tipografía elegante y altamente legible para información.

La jerarquía debe ser excelente.

El nombre del niño debe ser el elemento visual principal.

⸻

22. RESPONSIVE

Diseñar primero para:

375px

390px

414px

Luego adaptar a:

768px

1024px

1440px+

La invitación debe verse excelente en un teléfono.

No simplemente reducir el diseño desktop.

⸻

23. PERFORMANCE

Optimizar:

* Imágenes.
* Videos.
* Audio.
* Animaciones.
* Partículas.

Evitar que los efectos produzcan lag en teléfonos de gama media.

Utilizar lazy loading.

Respetar:

prefers-reduced-motion

Si el usuario tiene animaciones reducidas activadas, reducir efectos visuales.

⸻

24. EXPERIENCIA DE USUARIO

El flujo debe sentirse así:

ABRIR INVITACIÓN
↓
INTRO CINEMÁTICA
↓
NOMBRE DEL CUMPLEAÑERO
↓
HERO
↓
CUENTA REGRESIVA
↓
INFORMACIÓN DEL EVENTO
↓
GALERÍA
↓
UBICACIÓN
↓
CONFIRMACIÓN
↓
CIERRE

No hacer que el usuario tenga que buscar la información importante.

⸻

25. CONFIGURACIÓN DEL CLIENTE

Crear un único archivo:

invitation.js

con estructura similar a:

eventName
childName
age
eventDate
eventTime
locationName
locationAddress
mapsUrl
musicUrl
heroImage
galleryImages
videos
primaryColor
secondaryColor
message

De esta forma, posteriormente DN Invitaciones Digitales podrá reutilizar el mismo sistema para diferentes clientes.

⸻

26. IDENTIDAD DE DN INVITACIONES DIGITALES

No colocar la marca de manera invasiva.

Al final de la invitación agregar discretamente:

“Una invitación creada por DN Invitaciones Digitales”

con un pequeño enlace.

La experiencia del cliente debe ser el centro.

⸻

27. RESULTADO FINAL ESPERADO

Quiero que Antigravity NO cree una plantilla básica.

Quiero una experiencia que visualmente parezca un producto desarrollado por una agencia especializada en experiencias digitales premium.

Al abrirla, el usuario debe pensar:

“Esto no parece una invitación común.”

Debe sentirse:

★★★★★
CINEMATOGRÁFICA
INTERACTIVA
FUTURISTA
PREMIUM
INFANTIL SIN SER INFANTILIZADA

La temática debe sentirse claramente como una aventura galáctica inspirada en la estética de grandes producciones de ciencia ficción, pero utilizando recursos gráficos originales.

⸻

28. ENTREGABLE

Entregar el proyecto completamente funcional.

Debe incluir:

* Frontend de invitación.
* Countdown funcional.
* Música.
* Efectos de sonido.
* Animaciones.
* Galería.
* Ubicación.
* RSVP.
* Persistencia de demostración.
* Panel administrativo.
* Estadísticas.
* Tabla de invitados.
* Filtros.
* Exportación CSV.
* Responsive.
* Código organizado.
* Componentes reutilizables.
* Configuración centralizada del evento.
* README con instrucciones para personalizar otra invitación.

Antes de finalizar, ejecutar el proyecto, comprobar que no existan errores de consola y verificar específicamente:

1. Countdown.
2. Reproductor musical.
3. Sonidos.
4. Formulario RSVP.
5. Persistencia.
6. Panel admin.
7. Exportación.
8. Responsive mobile.
9. Animaciones.
10. Navegación completa.

NO entregar solamente una maqueta.

Quiero una web funcional, visualmente premium y preparada para convertirse en el producto comercial de DN Invitaciones Digitales.