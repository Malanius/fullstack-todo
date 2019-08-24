class Auth {

    userKey = 'authenticatedUser';

    registerLogin(username) {
        sessionStorage.setItem(this.userKey, username);
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
}

export default new Auth();