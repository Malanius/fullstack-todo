import axios from 'axios';

class HelloService {

    executeHello() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloBean() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloParam(name) {
        const username = 'test';
        const password = 'test';
        const authHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.get(`http://localhost:8080/hello-world-param/${name}`,
            {
                headers: {
                    authorization: authHeader
            }
            }
        );
    }
}

export default new HelloService();