import React from 'react';
import { Row, Col, Input, Typography }  from "antd"

import styles from "./Footer.module.css"
import globalStyles from "../../styles/globalStyle.module.css"

const { Title } = Typography

function Footer() {
    return (
        <footer id={styles.footer} >
           <Row id={styles.footer_row} >
               <Col lg={6} xs={24} sm={6} >
                   logo
               </Col>
               <Col lg={6} xs={10} sm={6} >
                   <ul>
                       <li>Search</li>
                       <li>Contact</li>
                       <li>Returns</li>
                       <li>Delivery</li>
                       <li>Gift Cards</li>
                       <li>Mobile</li>
                   </ul>
               </Col>
               <Col lg={6} xs={10} sm={6} >
                    <ul>
                       <li>About us</li>
                       <li>Suppliers</li>
                       <li>Manufactures</li>
                       <li>New Products</li>
                       <li>Top Sellers</li>
                       <li>Service</li>
                   </ul>
               </Col>
               <Col lg={6} xs={24} sm={6} className={globalStyles.flexColumnStartStart} >
                   <Title level={4} >Join our newsletter</Title>

                   <Input size="default size" placeholder="Email" type="email" />
               </Col>
            </Row> 
        </footer>
    )
}

export default Footer;
