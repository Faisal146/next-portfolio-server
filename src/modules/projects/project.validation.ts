import z from 'zod';

const CreateProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  github: z.string(),
  link: z.string(),
  img: z.array(z.string()),
});

export const projectSchemas = {
  CreateProjectSchema,
};
