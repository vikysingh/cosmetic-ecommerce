import React from "react"
import { useFormik } from "formik"

function CartForm() {
    const formik = useFormik({
        initialValues: {
            contactEmail: ""
        }
    })

    React.useEffect(()=> {
        console.log(formik.values.contactEmail)
    }, [formik.values.contactEmail])

    return <form>
        <label htmlFor="contactEmail">Contact email</label>
        <input id="contactEmail" name="contactEmail" type="email" 
        onChange={formik.handleChange} value={formik.values.contactEmail} />

        <input type="checkbox" name="newsletter" id="newsletter" />
        <label htmlFor="newsletter" > Keep me up to date on new offers </label>

        <h5>Shipping address</h5>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Appartment suite, etc. (optional)" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Country/Region" />
        <input type="text" placeholder="Postal code" />
    </form>
}

export default CartForm