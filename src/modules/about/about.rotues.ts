import { Router } from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { aboutControllers } from './about.controller';
import updateAboutSchema from './about.validation';

const router = Router();

router.get('/', aboutControllers.getAbout);
router.post(
  '/',
  validateRequest(updateAboutSchema),
  aboutControllers.updateAbout,
);

export const aboutRouter = router;
