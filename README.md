
# Angular Consumo de API

Se presenta una explicación del código  que corresponde a un proyecto Angular que utiliza Angular Material para la interfaz de usuario y hace uso de componentes para mostrar datos de una API:

Módulo Material
El primer bloque de código crea un módulo que agrupa varios módulos de Angular Material, permitiendo que se utilicen en otras partes de la aplicación.

NgModule: Es un decorador que define un módulo de Angular. Aquí, se está exportando un conjunto de módulos de Angular Material que se usarán en la aplicación.
exports: La propiedad exports permite que otros módulos importen este módulo y accedan a los componentes de Angular Material.

Componente de Personajes (CharactersComponent)
Este componente se encarga de obtener y mostrar una lista de personajes humanos.

Component: Define el componente de Angular.
HttpClient: Se utiliza para realizar solicitudes HTTP a la API de Rick and Morty.
ngOnInit: Método del ciclo de vida que se ejecuta al inicializar el componente, se utiliza para obtener los personajes de la API y filtrar solo los humanos.

Componente de Comentarios (CommentsComponent)

Este componente muestra una lista de comentarios filtrados por un dominio específico.

filteredComments: Se almacena la lista de comentarios que cumplen con la condición del dominio @garfield.biz.
Se realiza una solicitud HTTP a una API de comentarios y se filtran los resultados antes de mostrarlos.

Componente Raíz (AppComponent)

Este es el componente principal de la aplicación que incluye la barra de navegación.

RouterOutlet: Se utiliza para definir dónde se cargarán los componentes de las rutas configuradas.
MatToolbar: Se utiliza para crear una barra de herramientas con botones de navegación.
Configuración de Rutas
El siguiente bloque establece las rutas de la aplicación.

Routes: Define las rutas de la aplicación y especifica qué componente se debe cargar para cada ruta.

Finalmente, la configuración de la aplicación

ApplicationConfig: Especifica la configuración global de la aplicación, incluyendo el enrutador, el cliente HTTP y las animaciones de Angular.

# Conclusión

En resumen, este código establece una aplicación Angular que utiliza Angular Material para la interfaz de usuario, obtiene datos de dos APIs y permite la navegación entre componentes a través de un menú. También incluye configuraciones para pruebas unitarias. Si tienes alguna pregunta específica sobre alguna parte del código o si necesitas más detalles, ¡no dudes en preguntar!
## Tech Stack

**Client:**

Angular: Un marco de trabajo para construir aplicaciones web de una sola página (SPA) utilizando TypeScript. En el código proporcionado, se utilizan varios componentes de Angular Material para crear una interfaz de usuario atractiva.

Angular Material: Una biblioteca de componentes UI que proporciona elementos preconstruidos que siguen las pautas de diseño de Google Material, facilitando la creación de interfaces de usuario modernas y responsivas.

**Server:**
Node.js: Utilizado implícitamente para la ejecución del código Angular y para el desarrollo del servidor, si se implementara un backend en Node.js (aunque no está incluido en el código proporcionado).

Express (potencial): Aunque no se menciona directamente en el código proporcionado, es común utilizar Express como un servidor para manejar las solicitudes API, especialmente en aplicaciones Angular que requieren un backend.

**API**

https://jsonplaceholder.typicode.com/comments


## Screenshots

![Consumo de API](DAWII_T3_HUAMANCHUMO_CORTAVIARTE_MANUEL_ALEJANDRO/src/img/Api.png.)


>>>>>>> 1a7706e576693d5be5b2fae69fe7b1eae8bf2d69
