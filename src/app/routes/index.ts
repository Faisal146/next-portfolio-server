import { Router } from 'express';
import { projectRouter } from '../../modules/projects/project.rotues';
import { blogRouter } from '../../modules/blogs/blog.rotues';
import { aboutRouter } from '../../modules/about/about.rotues';

const router = Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: projectRouter,
  },
  {
    path: '/blogs',
    route: blogRouter,
  },
  {
    path: '/about',
    route: aboutRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
