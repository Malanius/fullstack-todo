import axios from 'axios';

class Auth {

    userKey = 'authenticatedUser';

    registerLogin(username, password) {
        sessionStorage.setItem(this.userKey, username);
        const authHeader = 'Basic ' + window.btoa(username + ":" + password);
        this.setAxiosInterceptors(authHeader);
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