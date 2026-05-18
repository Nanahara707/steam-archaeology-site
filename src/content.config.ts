import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    appid: z.number(),
    zombie: z.boolean().default(false),
    score: z.number().optional().default(0),
    positive: z.number().optional().default(0),
    releaseYear: z.number().optional().default(0),
    releaseDate: z.string().optional().default(''),
    hasVr: z.boolean().optional().default(false),
    isVrOnly: z.boolean().optional().default(false),
    achievementCount: z.number().optional().default(0),
    price: z.number().optional().default(0),
    status: z.string().optional().default('埋没'),
    hasUpcoming: z.boolean().optional().default(false),
    aiSuspect: z.boolean().optional().default(false),
    anomalyFlags: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    headerImage: z.string().optional().default(''),
    screenshots: z.array(z.string()).optional().default([]),
    generated: z.string().optional().default(''),
    lastChecked: z.string().optional().default(''),
  }),
});

const specials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/specials' }),
  schema: z.object({
    title: z.string(),
    theme: z.string().optional().default(''),
    featuredAppids: z.array(z.number()).optional().default([]),
    generated: z.string().optional().default(''),
  }),
});

export const collections = { articles, specials };
