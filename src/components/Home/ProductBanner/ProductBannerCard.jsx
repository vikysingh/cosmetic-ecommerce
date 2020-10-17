import React from 'react'
import { useHistory } from "react-router-dom"

import PropTypes from "prop-types"

import ThemeButton from "../../Utility/Button/Button"

import routes from "../../../constants/routes.json"

function Productbannercard({ title, imgSrc, text, setDispatch }) {
    let history = useHistory()

    return (
        <div className="promotionBanners" >
            <img src={imgSrc} alt="" />
            <h2 className="titleHeading" >{title}</h2>
            <p className="paragraph" >{text}</p>

            <ThemeButton className="primaryActionButton"
            clickHandler={() => {
                history.push(routes.shop)
                setDispatch()
            }}
            > SHOP NOW  </ThemeButton>
        </div>
    )
}

Productbannercard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}



export default Productbannercard