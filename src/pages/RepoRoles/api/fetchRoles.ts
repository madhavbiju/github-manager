import axiosInstance from '../../../config/configAxios';
import { baseUrl } from '../../../config/configUrls';

export const fetchCollaborators = async (owner: string, repo: string) => {
  try {
    const response = await axiosInstance.get(`${baseUrl.collaborators}?owner=${owner}&repo=${repo}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching collaborators:', error);
    throw error;
  }
};
