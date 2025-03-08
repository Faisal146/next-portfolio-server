import { Router } from 'express';
import { ProjectControllers } from './project.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { projectSchemas } from './project.validation';

const router = Router();

router.get('/', ProjectControllers.getAllProject);
router.post(
  '/',
  validateRequest(projectSchemas.CreateProjectSchema),
  ProjectControllers.createProject,
);
router.get('/:id', ProjectControllers.getSingleProject);
router.delete('/:id', ProjectControllers.deleteProject);

export const projectRouter = router;
