import React from "react"
import { Modal, Input } from "antd"

//import ThemeButton from "../Button/Button"

import styles from "./Newsletter.module.css"

import FormValidation from "../../../utils/formValidations"

function Newsletter() {
    
    const [ email, setEmail ] = React.useState('')
    const inputRef = React.useRef(null)

    function success() {
        Modal.success({
            content: 'Your subscribed successfully!',
        });
    }

    return <div className={`flexColAroundCenter ${styles.NEWSLETTER} `} >
        <h2 className="lastHeading" > Subscribe to our newsletter </h2>
        <p className="paragraph"> A short sentence describing what someone will receive </p>
        <form className="flexCenterCenter" >
            <Input placeholder="Email" type="email" width="200" ref={inputRef}
            required={true} value={email} onChange={e => setEmail(e.target.value)} />
            <button className="primaryActionButton" type="submit" onClick={e => {
                e.preventDefault()
                    new FormValidation(inputRef.current.input, success)
                    .validateEmail(email)
                }
            } > Subscribe </button>
        </form>
    </div>
}

export default React.memo(Newsletter)