import { Router } from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { blogControllers } from './blog.controller';
import { blogSchemas } from './blog.validation';

const router = Router();

router.get('/', blogControllers.getAllBlog);
router.post(
  '/',
  validateRequest(blogSchemas.CreateBlogSchema),
  blogControllers.createBlog,
);
router.get('/:id', blogControllers.getSingleBlog);
router.delete('/:id', blogControllers.deleteBlog);

export const blogRouter = router;
