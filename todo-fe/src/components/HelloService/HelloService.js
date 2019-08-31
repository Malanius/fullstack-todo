import axios from 'axios';

class HelloService {

    executeHello() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloBean() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }
}

export default new HelloService();