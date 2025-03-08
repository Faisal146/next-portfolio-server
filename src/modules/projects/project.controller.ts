import { Request, Response } from 'express';
import { projectServices } from './project.servics';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    message: 'Project created successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.getAllProject(req.query);

  sendResponse(res, {
    message: 'Projects fetched successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.getSingleProjectFromDB(req.params.id);

  sendResponse(res, {
    message: 'Project feched successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.deleteSingleProjectIntoDB(req.params.id);

  sendResponse(res, {
    message: 'Project deleted successfully',
    success: true,
    data: result,
    statusCode: 200,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
  deleteProject,
};
