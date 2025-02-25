# RentEase

## Introducción
Nombre de la aplicación: “RentEase”

## Caso de Estudio
Un cliente presentó una propuesta para crear una aplicación que ayude a los inquilinos a comparar sus opciones de vivienda. Los inquilinos a menudo se enfrentan a la difícil decisión de seleccionar un departamento al cual llamar hogar durante al menos un año. El objetivo principal es desarrollar una aplicación que permita a los inquilinos potenciales comprender las compensaciones entre departamentos que consideren relevantes,
simplificando así su proceso de toma de decisiones.

La aplicación presenta un único tipo de usuario: el buscador de departamento. Este usuario es responsable de administrar todos los datos de los departamentos, incluidas las inserciones, actualizaciones y eliminaciones. La aplicación permitirá a los usuarios navegar a través de listados de departamentos de una manera fácil de usar, permitiéndoles marcar y desmarcar sus departamentos favoritos.

## Objetivos
Se espera que el proyecto haga que el estudiante obtenga confianza en las siguientes habilidades:
- Múltiples páginas
- Vista fácil de usar
- Responsividad
- Interactivo
- Formularios con validación
- Manejo de la “Local Store”

## Marcos de trabajo
- Buscador
- Responsivo: Desktop, Tabletas, y teléfonos inteligentes.

## Tecnologías
El sistema no tiene lado del servidor. únicamente la interfaz del usuario.
- Interfaz del usuario: HTML, CSS, JavaScript
- Base de datos : localStorage

## Soft Skills
El trayecto de este proyecto incluirá practicar y evolucionar las siguientes habilidades:

1. Habilidades de revisión de código y revisión del trabajo de compañeros: practicar la capacidad de revisar el código de otra persona de manera constructiva, enfocándose en identificar áreas de mejora y al mismo tiempo reconocer las fortalezas.
2. Habilidades para levantar banderas: aprender a levantar banderas de manera efectiva, abordando inquietudes sobre problemas técnicos o la integridad del proyecto de manera clara y concisa.
3. Comunicación con los líderes de equipo (tu tutor): desarrollar habilidades para comunicarse con los líderes de equipo, incluida la capacidad de transmitir complejidades técnicas en términos comprensibles y facilitar la alineación y la toma de decisiones.
4. Diplomacia y Retroalimentación: Cultivar diplomacia cuando proveemos
retroalimentación en la revisión de código, fomentando una cultura de crítica constructiva y crecimiento mutuo dentro del equipo.
5. Transparencia y Colaboración: Entender la importancia de la transparencia y la
colaboración dentro del equipo, asegurando que las preocupaciones se abordan
abiertamente y contribuyendo a un entorno de proyecto cohesivo.
6. Resolución individual de problemas: mejorar las habilidades de resolución de problemas abordando de forma independiente los desafíos encontrados durante el proyecto, fomentando la resiliencia y la creatividad para encontrar soluciones.
7. Habilidades de autoaprendizaje: enfatizando la importancia del autoaprendizaje
continuo para mantenerse actualizado con nuevas tecnologías y metodologías, permitiendo el crecimiento personal y profesional en el campo en constante evolución del desarrollo full-stack.

## Entidades
### User
**Nombre**              **Tipo de datos**
Email               String
Password            String
First Name          String
Last Name           String
Birth Date          Date

### Flat
**Nombre**              **Tipo de datos**
City                String
Street name         String
Street number       Number
Area size           Number
Has AC              Boolean
Year built          Number
Rent price          Number
Date available      Date

## Validación
### User
- Todos los campos son requeridos.
- Verificación de tipo de datos.
- Email debe ser formato email.
- Los dos nombres (first y last) deben tener por lo menos 2 caracteres.
- La edad derivada debe estar en el rango de 18-120.
- Password de tener al menos 6 caracteres.
- Password debe contener
    - Letras
    - Números
    - Un caracter que no sea ni letra ni número.

### Flat
- Todos los campos son requeridos.
- Verificación de tipo de datos.

## Interfaz del Usuario
### Página “All Flats”
La página “All flats” contiene una tabla con todos los departamentos que el usuario ha insertado hasta ahora.
Cada línea en la tabla va a contener:
- Todas las propiedades de “flat” como se especifica en la sección de Entidades.
- Un botón de alternación para marcar/desmarcar un “flat” como favorito.

Adicionalmente, la tabla va a tener capacidades de filtrar y ordenar.
Campos de opciones de filtro:
1. Ciudad
2. Rango de precio
3. Rango de tamaño del área

Categorias para ordenar:
1. Ciudad
2. Precio
3. Tamaño del área

### Página “New Flat”
- Inputs para todas las propiedades de “flat” como se especifica en la sección de entidades.
- Botón de “Save”

Si todos inputs son válidos, los datos se guardan. Un “flat” nuevo es asignado como favorito.

### Encabezado
- Hello - Nombre completo del usuario
- Botón de “Log out”
- Logo de la compañía
- Un menú para todas las páginas

### Página “Home”
La página “Home” contiene una tabla de todos los “flats” favoritos del user. La estructura de la tabla debe ser la misma que en la tabla de Página "All Flats", con una distinción: en lugar de un botón de alternancia, cada fila va a tener un botón de “remove”. Después de presionarlo, la fila va a ser removida de la tabla y ese “flat” no va a ser considerado como favoritos del usuario.

### Página Login
- Input para Email
- Input para Password
- Botón de Login
- Botón de Register

La primera página que el usuario ve cuando abre el app. Después de un acceso exitoso, el usuario será redireccionado a la página “home”. Otro proceso de login será requerido después de 60 minutos. Si el usuario no está registrado aún, puede dar click en el botón de “Register” y lo va a redireccionar a la página de registro.

### Página “Register”
- Inputs para todas las propiedades de “user” como se especifica en la sección de entidades.
- Input para confirmación de “password”.
- Botón de “Register”.

Si todos los inputs son válidos entonces los datos van a ser guardados. Un registro exitoso va a redireccionar al usuario a la página “home”.

### Página “Profile Update”
- Inputs para todas las propiedades de “user” como se especifica en la sección de entidades.
- Botón de “Update”.

En esta página, el usuario va a poder editar sus detalles. SI todos los inputs son válidos, los datos van a ser guardados. Después de una actualización exitosa, el usuario va a ser redireccionado a la página “Home”.