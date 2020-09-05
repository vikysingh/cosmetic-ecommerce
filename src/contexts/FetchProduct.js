import axios from "axios"

const baseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json"

export default async function getProducts(params) {
    let res;

    if(params !== undefined) {
        res = await axios.get(baseUrl + params)
    }
    else res = await axios.get(baseUrl)
    let { data } = res

    return data
}