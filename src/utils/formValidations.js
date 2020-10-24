class FormValidations {

    constructor(refElement, callback = () => {}) {
        this.refElement = refElement
        this.callback = callback
    }

    validateEmail(email = '') {
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        this.handleSubmits(pattern.test(email))
    }
    
    validateTexts (texts = '') {
        const specialCharPattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        const numberPattern = /^[A-Za-z]+$/
    
        this.handleSubmits(!specialCharPattern.test(texts) && numberPattern.test(texts))
    }
    
    validateAddress (address = '') {
        const pattern = /^[a-zA-Z0-9\s,'-]*$/

        this.handleSubmits(pattern.test(address))
    }
    
    validateZip (code = ''){
        const pattern = /^\d{5}$|^\d{5}-\d{4}$/

        this.handleSubmits(pattern.test(code))
        return pattern.test(code)
    }

    handleSubmits(values) {
        if(values) {
            this.refElement.style.border = "2px solid green"
            this.callback()
            return true
        }
        else {
            this.refElement.style.border = "2px solid red"
            
            return false
        }
    }
}

export default FormValidations