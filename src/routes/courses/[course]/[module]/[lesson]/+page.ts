// src/routes/courses/[course]/[module]/[lesson]/+page.ts

import type { PageLoad } from './$types'; // SvelteKit genera esta interfaz
import { error } from '@sveltejs/kit';
import { findLessonById, findModuleById, findLevelById } from '$lib/course/_data/course-index';
import type { Lesson, Module, Level } from '$lib/course/_data/course-index';
import { loadLessonContent } from '$lib/utils/contentLoader'; // Importamos la función de carga de contenido
import type { LessonContent } from '$lib/utils/contentLoader'; // Importamos la interfaz de contenido

export const load: PageLoad = async ({ params }) => {
    const { course, module, lesson } = params;

    // 1. Encontrar la lección en nuestra estructura de cursos
    const currentLesson: Lesson | undefined = findLessonById(course, module, lesson);

    if (!currentLesson) {
        throw error(404, {
            message: 'Lección no encontrada. Por favor, verifica la URL.'
        });
    }

    // 2. Cargar el contenido real de la lección (desde el archivo JSON)
    let lessonContent: LessonContent;
    try {
        lessonContent = await loadLessonContent(course, module, lesson);
    } catch (e) {
        // loadLessonContent ya lanza un error 404, pero lo re-capturamos aquí
        // para asegurar que el mensaje sea coherente o para añadir más contexto
        if (e && typeof e === 'object' && 'status' in e && e.status === 404) {
            throw e; // Re-lanza el error 404 de SvelteKit directamente
        }
        console.error('Error al cargar contenido de la lección:', e);
        throw error(500, 'Error interno del servidor al cargar el contenido de la lección.');
    }

    // 3. Obtener el módulo y nivel para la navegación o breadcrumbs
    const currentModule: Module | undefined = findModuleById(course, module);
    const currentLevel: Level | undefined = findLevelById(course);

    if (!currentModule || !currentLevel) {
        // Esto no debería suceder si currentLesson se encontró, pero es una buena verificación
        throw error(404, {
            message: 'Estructura de curso inconsistente.'
        });
    }

    // Retornar los datos que serán accesibles en +page.svelte
    return {
        currentLesson,
        lessonContent,
        currentModule,
        currentLevel
    };
};