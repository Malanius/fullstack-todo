import axios from 'axios';

class Auth {

    userKey = 'authenticatedUser';
    tokenKey = 'userToken'

    validateLogin(username, password) {
        return axios.post('http://localhost:8080/authenticate', { username, password });
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerLogin(username, jwtToken) {
        sessionStorage.setItem(this.userKey, username);
        sessionStorage.setItem(this.tokenKey, jwtToken);
        this.setAxiosInterceptors(jwtToken);
    }

    deregisterLogin() {
        sessionStorage.removeItem(this.userKey);
    }

    isLoggedIn() {
        const user = sessionStorage.getItem(this.userKey);
        return user !== null;
    }

    getUser() {
        return sessionStorage.getItem(this.userKey);
    }

    setAxiosInterceptors(jwtToken) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = 'Bearer ' + jwtToken;
                }
                return config;
            }
        )
    }
}

export default new Auth();