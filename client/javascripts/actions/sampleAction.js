import {
    GET_EMPLOYEE_NAME,
    UPDATE_EMPLOYEE_NAME,
  } from './types'; 
  
export const getemployeeName = keyword => (
  {
      type: GET_EMPLOYEE_NAME,
      keyword,
    }
);

export const updateemployeeName = name => (
{
  type: UPDATE_EMPLOYEE_NAME,
  name,
}
);