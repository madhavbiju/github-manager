import axiosInstance from '../../../config/configAxios';
import { baseUrl } from '../../../config/configUrls';

interface AuthResponse {
  status: string;
  data: {
    url: string;
  };
}

const getGitHubAuthUrl = async (): Promise<string | null> => {
  try {
    const response = await axiosInstance.get<AuthResponse>(`${baseUrl.login}`, {
      params: {
        provider: 'github',
      },
    });

    if (response.data.status === 'success') {
      return response.data.data.url;
    } else {
      console.error('Failed to get the URL:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching the URL:', error);
    return null;
  }
};

export default getGitHubAuthUrl;
