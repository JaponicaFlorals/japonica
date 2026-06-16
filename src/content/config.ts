import { defineCollection, z } from 'astro:content';

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    show_on: z.enum(['home', 'weddings', 'portfolio']).default('home'),
    order: z.number().default(0),
  }),
});

const studio = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    link: z.string().default('https://www.instagram.com/__japonica__'),
    alt: z.string().default('Japonica floral work'),
    order: z.number().default(0),
  }),
});

const weddings = defineCollection({
  type: 'content',
  schema: z.object({
    couple: z.string(),
    venue: z.string(),
    date: z.string(),
    photographer: z.string().optional(),
    photographer_url: z.string().optional(),
    feature: z.string().optional(),
    feature_url: z.string().optional(),
    review: z.string().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const galleries = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { testimonials, studio, weddings, galleries };
