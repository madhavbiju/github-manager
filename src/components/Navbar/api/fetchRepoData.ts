// api.ts
import axiosInstance from '../../../config/configAxios';
import { baseUrl } from '../../../config/configUrls';

export const fetchRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await axiosInstance.get<ApiResponse>(`${baseUrl.repos}`);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    throw new Error('Failed to fetch repositories');
  } catch (error) {
    throw new Error("error.message");
  }
};
