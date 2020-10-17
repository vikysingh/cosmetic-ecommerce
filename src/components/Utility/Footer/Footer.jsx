import React from "react"

import { Link } from "react-router-dom"
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons"

import PaymentIcon from "react-payment-icons-inline"

import styles from "./Footer.module.css"

import routes from "../../../constants/routes.json"

export default function Footer() {
    return <footer className={styles.FOOTER}>
        <div>
            <Link to={routes.shippingReturn}> Shipping and returns </Link>
            <Link to={routes.contact}> Contact </Link>
        </div>
        <div className="flexRowAroundCenter">
            <div className="flexRowAroundCenter">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined className={styles.FOOTER__social_icons} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined className={styles.FOOTER__social_icons} />
                </a>
            </div>
            <div>
                &#169; 2020, CosmeticCommerce
            </div>

            <div className="flexRowAroundCenter" >
                <PaymentIcon className={styles.FOOTER__payment_icons} icon="visa" style={{ margin: 10, width: 50 }} />
                <PaymentIcon className={styles.FOOTER__payment_icons} icon="mastercard" style={{ margin: 10, width: 50 }} />
                <PaymentIcon className={styles.FOOTER__payment_icons} icon="paypal" style={{ margin: 10, width: 50 }} />
            </div>
        </div>
    </footer>
}