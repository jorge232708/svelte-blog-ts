<script lang="ts">
    // Lógica o props que afecten a la página de la lección
</script>

<div class="lesson-layout-wrapper">
    <slot />
</div>

<style>
    /* Estilos específicos para la envoltura de la lección */
    .lesson-layout-wrapper {
        flex-grow: 1; /* Para que ocupe el espacio disponible en el layout del módulo */
    }
</style>