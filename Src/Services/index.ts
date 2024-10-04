import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://custom-dev.onlinetestingserver.com/world-kicken-backend/api',
});


export async function fetchToken() {
    const url = '/user/login';

    const credentials = {
        email: "tom@mailinator.com",
        password: "12345678",
    };

    try {
        const response = await axiosInstance.post(url, credentials);
        console.log('API Response:', response.data); 
        return response.data.data.token; 
    } catch (error) {
        console.error('Error fetching access token:', error.response ? error.response.data : error.message);
        return null;
    }
}




export async function getStore(accessToken: string) {
    const url = '/user/store/1';
    
    try {
        const response = await axiosInstance.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`, 
            },
        });
        
        console.log(response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        return null; 
    }
}
