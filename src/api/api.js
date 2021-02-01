import {
  getRequest,
  postRequest
} from '@/utils/request'
export const register = (params) => {
  return postRequest('/exchange/sell/register', params)
}
