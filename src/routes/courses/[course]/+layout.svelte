<script lang="ts">
    // Lógica o props que afecten a todas las rutas dentro de /courses/[course]
    // Por ejemplo, cargar datos del curso aquí
</script>

<div class="course-layout">
    <slot />
</div>

<style>
    /* Estilos específicos para el layout del curso */
    .course-layout {
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto; /* Centra el contenido */
        flex-grow: 1; /* Permite que este layout crezca y ocupe espacio si está dentro de un flex container */
    }
</style>