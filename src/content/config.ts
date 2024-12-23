import { defineCollection, z } from 'astro:content';

// Define the 'about' collection schema
const aboutCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    about: aboutCollection, // Register the 'about' collection
};
