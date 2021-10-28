import { API_URL } from 'src/config';
import { http } from 'src/lib';

export const getCallsList = async (queryParams: any) => {
  return await http.get(`${API_URL}/calls?${queryParams}
    `);
};
export const getCallData = async (callId: string) => {
  return await http.get(`${API_URL}/calls/${callId}`);
};

export const archiveCall = async (callId: string) => {
  return await http.put(`${API_URL}/calls/${callId}/archive`);
};
