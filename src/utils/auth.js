class Auth {
    constructor() {
        this.authenticated = false
    }

    allowCheckout(cb) {
        this.authenticated = true
        cb()
    }
    
    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()