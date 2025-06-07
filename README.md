# 🚀 Svelte Blog para Principiantes

¡Bienvenido al repositorio de **Svelte Blog**! Este proyecto nace con la firme intención de **apoyar a los principiantes** en el mundo de Svelte, guiándolos paso a paso en la creación de un blog completamente funcional, **sin necesidad de una API externa**. El objetivo es que, al final, tengas un blog robusto y performante construido íntegramente con SvelteKit, manejando su contenido de forma nativa.

Este proyecto está construido con **SvelteKit**, elegido precisamente por su **facilidad en la gestión de rutas y su estructura nativa**, lo que simplifica enormemente el desarrollo de aplicaciones complejas como un blog.

## ✨ Características Principales

* **Rutas Nativas y Anidadas con SvelteKit:** Aprovecha el sistema de archivos de SvelteKit para una organización de rutas intuitiva y potente.
* **Contenido Estático (sin API):** El blog gestiona su contenido directamente desde archivos locales, ideal para aprender el manejo de datos en Svelte sin la complejidad de una base de datos o backend.
* **Enfoque en Principiantes:** Cada paso se explica detalladamente, desde la configuración inicial hasta la creación de componentes reutilizables y la implementación de estilos.
* **Estilos CSS Modulares y Globales:** Uso de variables CSS y encapsulamiento de estilos para una gestión limpia y organizada.

## 📚 Estructura del Proyecto

Este proyecto sigue una estructura modular y organizada para facilitar el aprendizaje:

* `src/lib/content/`: Almacena todo el contenido de las lecciones y cursos en formato JSON.
* `src/lib/styles/`: Contiene los estilos globales y variables CSS.
* `src/lib/utils/`: Funciones de utilidad para cargar y gestionar el contenido.
* `src/routes/`: La columna vertebral de la aplicación, donde SvelteKit gestiona todas las rutas, incluyendo layouts anidados y páginas dinámicas (`[course]`, `[module]`, `[lesson]`).
* `src/components/`: Aquí residirán los componentes reutilizables como el `Sidebar.svelte` y el `Header.svelte`.

## 🛠️ Comenzando con el Proyecto

Si estás viendo este README, probablemente ya has clonado el repositorio. ¡Felicidades, estás un paso más cerca!

### Instalación de Dependencias

Una vez que hayas clonado el proyecto, navega a la raíz del directorio en tu terminal e instala las dependencias:

```bash
npm install
# o si usas pnpm
# pnpm install
# o si usas yarn
# yarn
