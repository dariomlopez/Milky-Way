import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        company: z.string(),
        dates: z.string(),
        description: z.string(),
        stack: z.array(z.string()).optional(),
        website: z.string().optional()
    })
});

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        platform: z.string().optional(),
        stack: z.array(z.string()),
        website: z.string().optional(),
        github: z.string().optional()
    })
});

export const collections = {
    'experience': experienceCollection,
    'projects': projectsCollection
};
