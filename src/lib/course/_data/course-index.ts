// src/lib/course/_data/course-index.ts

// Interfaces para definir la estructura de nuestro curso
export interface Lesson {
    id: string; // Ej: "what-is-svelte"
    title: string; // Ej: "¿Qué es Svelte?"
    path: string; // Ruta relativa dentro del módulo, Ej: "what-is-svelte"
    slug: string; // Slug completo para la URL, Ej: "beginner/module-1/what-is-svelte"
}

export interface Module {
    id: string; // Ej: "module-1"
    title: string; // Ej: "Módulo 1: Introducción a Svelte"
    path: string; // Ruta relativa dentro del nivel, Ej: "module-1"
    slug: string; // Slug completo para la URL, Ej: "beginner/module-1"
    lessons: Lesson[];
}

export interface Level {
    id: string; // Ej: "beginner"
    title: string; // Ej: "Curso para Principiantes"
    path: string; // Ruta relativa para el curso, Ej: "beginner"
    slug: string; // Slug completo para la URL, Ej: "beginner"
    modules: Module[];
}

// Estructura principal del curso
export const courseStructure: Level[] = [
    {
        id: 'beginner',
        title: 'Curso para Principiantes',
        path: 'beginner',
        slug: 'beginner',
        modules: [
            {
                id: 'module-1',
                title: 'Módulo 1: Fundamentos de Svelte',
                path: 'module-1',
                slug: 'beginner/module-1',
                lessons: [
                    {
                        id: 'what-is-svelte',
                        title: 'Lección 1: ¿Qué es Svelte?',
                        path: 'what-is-svelte',
                        slug: 'beginner/module-1/what-is-svelte'
                    },
                    {
                        id: 'svelte-components',
                        title: 'Lección 2: Componentes en Svelte',
                        path: 'svelte-components',
                        slug: 'beginner/module-1/svelte-components'
                    },
                    {
                        id: 'reactivity',
                        title: 'Lección 3: Reactividad en Svelte',
                        path: 'reactivity',
                        slug: 'beginner/module-1/reactivity'
                    }
                ]
            },
            {
                id: 'module-2',
                title: 'Módulo 2: Props y Eventos',
                path: 'module-2',
                slug: 'beginner/module-2',
                lessons: [
                    {
                        id: 'props-in-svelte',
                        title: 'Lección 1: Pasar Props',
                        path: 'props-in-svelte',
                        slug: 'beginner/module-2/props-in-svelte'
                    },
                    {
                        id: 'event-handling',
                        title: 'Lección 2: Manejo de Eventos',
                        path: 'event-handling',
                        slug: 'beginner/module-2/event-handling'
                    }
                ]
            }
            // Agrega más módulos y lecciones aquí
        ]
    },
    {
        id: 'intermediate',
        title: 'Curso Intermedio',
        path: 'intermediate',
        slug: 'intermediate',
        modules: [
            {
                id: 'module-1-int',
                title: 'Módulo 1: Svelte Stores',
                path: 'module-1-int',
                slug: 'intermediate/module-1-int',
                lessons: [
                    {
                        id: 'writable-stores',
                        title: 'Lección 1: Writable Stores',
                        path: 'writable-stores',
                        slug: 'intermediate/module-1-int/writable-stores'
                    }
                ]
            }
        ]
    }
    // Agrega más niveles (cursos) aquí
];


// Funciones de utilidad para buscar en la estructura del curso
export function findLevelById(levelId: string): Level | undefined {
    return courseStructure.find(level => level.id === levelId);
}

export function findModuleById(levelId: string, moduleId: string): Module | undefined {
    const level = findLevelById(levelId);
    return level ? level.modules.find(module => module.id === moduleId) : undefined;
}

export function findLessonById(levelId: string, moduleId: string, lessonId: string): Lesson | undefined {
    const module = findModuleById(levelId, moduleId);
    return module ? module.lessons.find(lesson => lesson.id === lessonId) : undefined;
}

export function findLessonBySlug(slug: string): Lesson | undefined {
    for (const level of courseStructure) {
        for (const module of level.modules) {
            for (const lesson of module.lessons) {
                if (lesson.slug === slug) {
                    return lesson;
                }
            }
        }
    }
    return undefined;
}

export function findModuleByLessonSlug(lessonSlug: string): Module | undefined {
    for (const level of courseStructure) {
        for (const module of level.modules) {
            for (const lesson of module.lessons) {
                if (lesson.slug === lessonSlug) {
                    return module;
                }
            }
        }
    }
    return undefined;
}

export function findLevelByModuleSlug(moduleSlug: string): Level | undefined {
    for (const level of courseStructure) {
        for (const module of level.modules) {
            if (module.slug === moduleSlug) {
                return level;
            }
        }
    }
    return undefined;
}