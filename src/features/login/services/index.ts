import { API_URL } from 'src/config';
import { http } from 'src/lib';

export const loginWithEmailAndPassword = async (queryParams: string) => {
  return await http.post(`${API_URL}/auth/login?${queryParams}`);
};
