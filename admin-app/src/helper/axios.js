import axios from 'axios';
import { api } from '../urlConfig';

const axiosIntace = axios.create({
    baseURL: api,
    // headers:{
    //     'Authorization': ''
    // }
});

export default axiosIntace;