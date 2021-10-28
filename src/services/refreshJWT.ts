import { API_URL } from 'src/config';
import { http } from 'src/lib';
const refrestJwt = async () => {
  return await http.post(`${API_URL}/auth/refresh-token`);
};

export default refrestJwt;
