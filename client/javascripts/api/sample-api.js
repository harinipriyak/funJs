  
import http from './http';
  export const getemployeeNameApi = async (keyword) => {
    const response = await http.get(`${keyword}`);
    return response.data;
  };