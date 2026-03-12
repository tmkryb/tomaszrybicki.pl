import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    industry: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  articles,
};
