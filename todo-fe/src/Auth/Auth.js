import axios from 'axios';

class Auth {

    userKey = 'authenticatedUser';

    validateLogin(username, password){
        return axios.get('http://localhost:8080/auth',
            {
                headers: {
                    authorization: this.createBasicAuthToken(username, password)
                }
            }
        );
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerLogin(username, password) {
        sessionStorage.setItem(this.userKey, username);
        this.setAxiosInterceptors(this.createBasicAuthToken(username, password));
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

    setAxiosInterceptors(authHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()) {
                    config.headers.authorization = authHeader;
                }
                return config;
            }
        )
    }
}

export default new Auth();