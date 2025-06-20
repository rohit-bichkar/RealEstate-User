import axios from "axios";

export const BASE_URL = 'http://localhost:2000/api'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
     headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Content-Type':'image/png, image/jpeg, image/jpg'
    },
});

export const getToken = ()=> localStorage.getItem('token');

export const getUser = ()=>{
    const user = localStorage.getItem("token");
    return user ? JSON.parse(user) : null;
}

 export const LogOutApi = () => {
    localStorage.removeItem("token");  
    window.location.href = "/";
  };

   export const apiRequest = async(endpoint, data = {}, method = "get")=>{
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
         const response = await axiosInstance.request({
            url: endpoint,
            method,
            headers,
            data,
        });
        return response.data;
    } catch (error) {
         console.log("API Error:", error.response?.data || error.message);
        throw error.response?.data || { message: "An error occurred" };
    }
  };

  export const loginApi = async(payload)=>{
    const data =  await apiRequest('/user/login', payload, 'post')
    if(data?.token){
        localStorage.setItem("token",data.token)
    };
    return data;
  }

  export const registerApi = async(payload)=>{
    const data = await apiRequest('/user/register', payload,'post');
    if(data?.token){
        localStorage.setItem("token",data.token)
    };
    return data;
  }

  export const getUserInfo = async () => {
    return await apiRequest('/user/getUserInfo', {}, "get");
  }

  export const getAllProperties = async()=>{
    return await apiRequest('/properties/getAllProperties', {}, "get");
  }
  export const getAllPropertiesById = async(ID)=>{
    return await apiRequest(`/properties/getPropertiesByID/${ID}`,{},"get")
  }

  export const createProperties = async(payload)=>{
    return await apiRequest('/inquiry/createInquiry',payload,"post")
  }

  export default axiosInstance