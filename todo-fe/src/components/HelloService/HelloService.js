import axios from 'axios';

class HelloService {

    executeHello() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloBean() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloParam(name) {
        return axios.get(`http://localhost:8080/hello-world-param/${name}`)
    }
}

export default new HelloService();