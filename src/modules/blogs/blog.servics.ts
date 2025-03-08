import QueryBuilder from '../../app/builder/QueryBuilder';
import AppError from '../../app/errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBLogIntoDB = async (payload: TBlog) => {
  try {
    const result = await Blog.create(payload);
    return result;
  } catch (error) {
    throw new AppError(400, 'error creating');
  }
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const ProjectSearchableFields = ['title', 'description', 'author'];

  const studentQuery = new QueryBuilder(Blog.find(), query)
    .search(ProjectSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await studentQuery.countTotal();
  const result = await studentQuery.modelQuery;

  return {
    meta,
    result,
  };
};
const getSingleBlogFromDB = async (id: string) => {
  try {
    const result = await Blog.findById(id);
    return result;
  } catch (error) {
    throw new AppError(400, 'error fetching');
  }
};
const updateSingleBlogIntoDB = async (id: string, updates: any) => {
  try {
    const result = await Blog.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    throw new AppError(400, 'error updating');
  }
};

const deleteSingleBlogIntoDB = async (id: string) => {
  try {
    const result = await Blog.findByIdAndUpdate(
      id,
      { $set: { isDeleted: true } },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    throw new AppError(400, 'error deleting');
  }
};

export const blogServices = {
  createBLogIntoDB,
  getAllBlogs,
  getSingleBlogFromDB,
  updateSingleBlogIntoDB,
  deleteSingleBlogIntoDB,
};
