// src/lib/utils/contentLoader.ts

import { error } from '@sveltejs/kit';

// Define la estructura esperada del contenido de una lección
export interface LessonContent {
    id: string;
    title: string;
    content: string; // El contenido de la lección, podría ser Markdown
    // Puedes añadir más propiedades aquí si tus archivos JSON las tienen (ej. `summary`, `tags`, etc.)
}

/**
 * Carga el contenido de una lección desde un archivo JSON.
 * @param courseId El ID del curso (ej. "beginner").
 * @param moduleId El ID del módulo (ej. "module-1").
 * @param lessonId El ID de la lección (ej. "what-is-svelte").
 * @returns Una Promesa que resuelve con el contenido de la lección o lanza un error.
 */
export async function loadLessonContent(
    courseId: string,
    moduleId: string,
    lessonId: string
): Promise<LessonContent> {
    try {
        // La importación dinámica utiliza una ruta relativa desde la raíz del proyecto.
        // Asegúrate de que tus archivos de lección estén en src/lib/content/courses/...
        const module = await import(`$lib/content/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}.json`);
        
        // Asegúrate de que el módulo importado tenga una exportación 'default' si es un JSON
        // o si es una exportación nombrada si el bundler lo trata diferente.
        // Por defecto, cuando importas JSON directamente, su contenido es la exportación por defecto.
        const content: LessonContent = module.default;

        return content;
    } catch (e) {
        // Si el archivo no se encuentra o hay un error de parseo JSON
        console.error(`Error al cargar la lección: ${courseId}/${moduleId}/${lessonId}`, e);
        // Lanza un error de SvelteKit que puede ser capturado por +error.svelte
        throw error(404, `Contenido de la lección no encontrado para: ${lessonId}`);
    }
}