<script lang="ts">
    // Lógica global para toda la aplicación si es necesaria
</script>

<svelte:head>
    <title>Svelte Blog de Cursos</title>
    <meta name="description" content="Tu plataforma de aprendizaje de Svelte y desarrollo web." />
</svelte:head>

<div class="app-container">
    <slot />
</div>

<style global>
    /* Importa tus estilos globales.
       La directiva 'global' asegura que estos estilos afecten a todos los elementos
       en el DOM, no solo a los encapsulados por este componente.
    */
    @import '$lib/styles/global.css';

    /* Estilos específicos para este layout raíz, si los necesitas. */
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Asegura que el contenedor principal ocupe toda la altura */
        background-color: var(--color-background-1); /* Fondo principal de la app */
        color: var(--color-text); /* Color de texto principal de la app */
    }
</style>