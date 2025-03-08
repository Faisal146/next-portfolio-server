import { Request, Response } from 'express';
import { blogServices } from './blog.servics';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.createBLogIntoDB(req.body);

  sendResponse(res, {
    message: 'Blog created successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getAllBlogs(req.query);

  sendResponse(res, {
    message: 'Blogs fetched successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getSingleBlogFromDB(req.params.id);

  sendResponse(res, {
    message: 'Blog feched successfully',
    success: true,
    data: result,
    statusCode: 201,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.deleteSingleBlogIntoDB(req.params.id);

  sendResponse(res, {
    message: 'Blog deleted successfully',
    success: true,
    data: result,
    statusCode: 200,
  });
});

export const blogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  deleteBlog,
};
