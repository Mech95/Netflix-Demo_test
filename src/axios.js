import axios from "axios";
import {baseUrl} from './constants/constants'


//create instance of axios
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance