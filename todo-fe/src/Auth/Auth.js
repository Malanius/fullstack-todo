import axios from 'axios';

class Auth {

    userKey = 'authenticatedUser';

    registerLogin(username) {
        sessionStorage.setItem(this.userKey, username);
        this.setAxiosInterceptors();
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

    setAxiosInterceptors() {

        const username = 'test';
        const password = 'test';
        const authHeader = 'Basic ' + window.btoa(username + ":" + password);

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