<script lang="ts">
    // Lógica o props que afecten a todas las rutas dentro de /courses/[course]/[module]
    // Por ejemplo, cargar datos del módulo aquí, o una barra lateral de navegación del módulo
</script>

<div class="module-layout">
    <slot />
</div>

<style>
    /* Estilos específicos para el layout del módulo */
    .module-layout {
        padding: 1rem;
        display: flex; /* Podrías usar flex para un sidebar y el contenido */
        gap: 2rem; /* Espacio entre elementos flex */
        flex-grow: 1; /* Permite que este layout crezca y ocupe espacio */
    }
</style>