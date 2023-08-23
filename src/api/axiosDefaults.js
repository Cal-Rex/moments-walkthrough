import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-walkthrough-8fb26a5960d5.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();