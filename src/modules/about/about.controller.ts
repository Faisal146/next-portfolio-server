import { Request, Response } from 'express';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { aboutServices } from './about.servics';

const updateAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutServices.updateAboutIntoDB(req.body);

  sendResponse(res, {
    message: 'about updated successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});

const getAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutServices.getAboutFromDB();

  sendResponse(res, {
    message: 'about feched successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});

export const aboutControllers = {
  getAbout,
  updateAbout,
};
