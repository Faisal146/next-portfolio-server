import z from 'zod';

const updateAboutSchema = z.object({
  name: z.string().min(3).max(50).optional(),
  description: z.string().optional(),
  about: z.string().optional(),
  img: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
});

export default updateAboutSchema;
