import z from 'zod';

const CreateBlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  img: z.string(),
});

export const blogSchemas = {
  CreateBlogSchema,
};
