import axios from 'axios';
import { API_URL } from '../../constants';

class HelloService {

    executeHello() {
        return axios.get(API_URL + '/hello-world')
    }

    executeHelloBean() {
        return axios.get(API_URL + '/hello-world-bean')
    }

    executeHelloParam(name) {
        return axios.get(`${API_URL}/hello-world-param/${name}`);
    }
}

export default new HelloService();