<script lang="ts">
    // Importamos el tipo de datos que viene de nuestro +page.ts
    import type { PageData } from './$types';

    // Accedemos a los datos que retorna la función `load` de +page.ts
    export let data: PageData;
</script>

<svelte:head>
    <title>{data.lessonContent.title} - Svelte Blog</title>
    <meta name="description" content="Aprende sobre {data.lessonContent.title} en este curso de Svelte." />
</svelte:head>

<article class="lesson-page">
    <h1>{data.lessonContent.title}</h1>

    <div class="lesson-content">
        {data.lessonContent.content}
    </div>

    <div class="lesson-navigation">
        </div>
</article>

<style>
    /* Estilos básicos para la página de la lección */
    .lesson-page {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        background-color: var(--color-background-2);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: var(--color-text);
    }

    .lesson-page h1 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--color-primary);
        text-align: center;
    }

    .lesson-content {
        line-height: 1.6;
        font-size: 1.1rem;
        white-space: pre-wrap; /* Mantiene saltos de línea y espacios del texto JSON */
        word-wrap: break-word; /* Asegura que palabras largas no desborden el contenedor */
    }

    .lesson-navigation {
        margin-top: 2rem;
        text-align: center;
    }

    .button { /* Este selector actualmente no se usa porque el botón está comentado */
        display: inline-block;
        padding: 0.8rem 1.5rem;
        background-color: var(--color-accent);
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .button:hover { /* Este selector actualmente no se usa */
        background-color: var(--color-accent-dark);
    }
</style>