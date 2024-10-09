import axios from 'axios';
import Store from '../Redux/Store';
const axiosInstance = axios.create({
  baseURL:
    'https://custom-dev.onlinetestingserver.com/world-kicken-backend/api',
});

export async function fetchToken(email?: string, password?: string) {
  const url = '/user/login';

  const credentials = {
    email: email,
    password: password,
  };

  const response = await axiosInstance.post(url, credentials);
  console.log('response fro================>', response);

  return response;
}

const state=Store.getState()
const acesstoken=state.auth.token
export async function getStore() {
  console.log('acess=====>',acesstoken)
  const url = '/user/store/1'; 
    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${acesstoken}`,
      },
    });

    console.log("GetStore=",response.data);
    return response.data.data;
}



