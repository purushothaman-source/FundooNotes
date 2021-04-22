import AxiosService from './axiosService';

const axios = new AxiosService();

export default class userService {
    baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

    registration = (data) => {
        return axios.postMethod(`${this.baseUrl}user/userSignUp`, data);
    }

    login = (data) => {
        return axios.postMethod(`${this.baseUrl}user/login`, data);
    }
    forgetpassword =(data)=>{
        return axios.postMethod(`${this.baseUrl}user/reset`,data)
    }
    resetpassword =(data,token)=>{
        console.log(token);
        console.log(data);
        return axios.postMethod(`${this.baseUrl}user/reset-password`,data,{
            headers:{
                'Authorization':token,
            }})
    }

   


}