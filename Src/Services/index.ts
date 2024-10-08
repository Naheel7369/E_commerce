import axios from 'axios';

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
  // Assuming the structure is { data: { token, user } }
  console.log('response fro================>', response);

  return response;
}

export async function getStore() {
  const url = '/user/store/1';
  const acessToken = await fetchToken();

  try {
    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${acessToken}`,
      },
    });

    // console.log("GetStore=",response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(
      'Error fetching data:',
      error.response ? error.response.data : error.message,
    );
    return null;
  }
}

export async function getitems() {
  const url = '/user/product/id';
  const acessToken = await fetchToken();

  try {
    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${acessToken}`,
      },
    });

    console.log('Storeitem=', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching data:',
      error.response ? error.response.data : error.message,
    );
    return null;
  }
}
