import axios from "axios"

const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json"

export default async function getProducts() {
    
    let res = await axios.get(baseUrl+"?product_type=eyeliner&brand=maybelline")
    let { data } = res

    return data
}