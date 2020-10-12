import React from "react"

import { Typography, Input, Tooltip, Modal } from "antd"

import styles from "./Form.module.css"
// import { ThemeButton } from "../../index"

import { useFormik } from 'formik';

const { Title } = Typography
const { TextArea } = Input

export default function ContactForm() {

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: null,
          message: ''
        },
        onSubmit: () => {
          showModal()
        },
      });

    function showModal() {
        Modal.success({
            content: <strong>Your message was successfuly sent 
                      and we'll contact you as soon as possible
                    </strong>
        })
    }

    return <form action="post" className={styles.CONTACT_FORM}  onSubmit={formik.handleSubmit}>
        <Title level={4}> Get in touch </Title>
        <Tooltip
                trigger={['focus']}
                title="Name"
                placement="topLeft"
                overlayClassName="text-input" >

                    <Input type="text" placeholder="Name" name="name"
                     onChange={formik.handleChange}
                    value={formik.values.name} required={true} />
        </Tooltip>

        <Tooltip
            trigger={['focus']}
            title="Email"
            placement="topLeft"
            overlayClassName="email-input">
            
                <Input type="text" placeholder="Email" name="email" 
                onChange={formik.handleChange} required={true}
                value={formik.values.email} />

      </Tooltip>

      <Tooltip
            trigger={['focus']}
            title="Phone number"
            placement="topLeft"
            overlayClassName="tel-input" >
            
                <Input type="text" placeholder="Phone number" name="phone"
                onChange={formik.handleChange} required={true}
                value={formik.values.phone}  />

      </Tooltip>

      <Tooltip
        trigger={['focus']}
        title="Message"
        placement="topLeft"
        overlayClassName="text-input" >
            
                <TextArea placeholder="Your message" autoSize={{ minRows: 6, maxRows: 15 }}
                onChange={formik.handleChange} value={formik.values.message} required={true}
                name="message"  />

      </Tooltip>

      <button type="submit" > Submit </button>
      
    </form>
}