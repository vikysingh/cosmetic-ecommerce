import React from "react"

import { Link } from "react-router-dom"
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons"

import PaymentIcon from "react-payment-icons-inline"

import styles from "./Footer.module.css"
import globalStyles from "../../../styles/Globals.module.css"

export default function Footer() {
    return <footer id={styles.FOOTER}>
        <div>
            <Link to="/about/spedizione"> Spedizione e restituzione </Link>
            <Link to="/about/contatti"> Contatti </Link>
        </div>
        <div className={globalStyles.flexRowAroundCenter}>
            <div className={globalStyles.flexRowAroundCenter}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined id={styles.FOOTER__social_icons} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined id={styles.FOOTER__social_icons} />
                </a>
            </div>
            <div>
                &#169; 2020, CosmeticCommerce
            </div>

            <div className={globalStyles.flexRowAroundCenter} >
                <PaymentIcon id={styles.FOOTER__payment_icons} icon="visa" style={{ margin: 10, width: 50 }} />
                <PaymentIcon id={styles.FOOTER__payment_icons} icon="mastercard" style={{ margin: 10, width: 50 }} />
                <PaymentIcon id={styles.FOOTER__payment_icons} icon="paypal" style={{ margin: 10, width: 50 }} />
            </div>
        </div>
    </footer>
}