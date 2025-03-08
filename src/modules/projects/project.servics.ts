import QueryBuilder from '../../app/builder/QueryBuilder';
import AppError from '../../app/errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  try {
    const result = await Project.create(payload);
    return result;
  } catch (error) {
    throw new AppError(400, 'error creating');
  }
};

const getAllProject = async (query: Record<string, unknown>) => {
  const ProjectSearchableFields = ['title', 'description', 'technologies'];

  const studentQuery = new QueryBuilder(Project.find(), query)
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
const getSingleProjectFromDB = async (id: string) => {
  try {
    const result = await Project.findById(id);
    return result;
  } catch (error) {
    throw new AppError(400, 'error fetching');
  }
};
const updateSingleProjectIntoDB = async (id: string, updates: any) => {
  try {
    const result = await Project.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    throw new AppError(400, 'error updating');
  }
};

const deleteSingleProjectIntoDB = async (id: string) => {
  try {
    const result = await Project.findByIdAndUpdate(
      id,
      { $set: { isDeleted: true } },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    throw new AppError(400, 'error deleting');
  }
};

export const projectServices = {
  createProjectIntoDB,
  getAllProject,
  getSingleProjectFromDB,
  updateSingleProjectIntoDB,
  deleteSingleProjectIntoDB,
};
