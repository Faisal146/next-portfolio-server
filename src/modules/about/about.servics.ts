import AppError from '../../app/errors/AppError';
import { About } from './about.model';

const getAboutFromDB = async () => {
  try {
    const result = await About.find();
    return result;
  } catch (error) {
    throw new AppError(400, 'error fetching');
  }
};
const updateAboutIntoDB = async (updates: any) => {
  try {
    console.log(updates);

    const result = await About.findOneAndUpdate(
      {},
      { ...updates },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    throw new AppError(400, 'error updating');
  }
};

export const aboutServices = {
  updateAboutIntoDB,
  getAboutFromDB,
};
