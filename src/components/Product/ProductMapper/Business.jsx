import React, { useState, useEffect } from 'react'
import axios from "axios"

import ProductMapper from "./ProductMapper"
import Message from "../../Utility/Messages/Message"

const baseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json"

export default function Business() {
    const [ dataList, setDataList ] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        let response = await axios.get(baseUrl+"?brand=maybelline&product=blush")

        setDataList(response.data)
    }

    return (
        <>
            {
                dataList !== null ? <ProductMapper urlMap={dataList} /> : 
                <Message type="loading" />
            }
        </>
    )
}
