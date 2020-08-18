import { useState, useEffect } from "react"

function useFetch() {
    const [ data, setData ] = useState(null)
    /*const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)*/

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        let data = await response.json()

        setData(data)
    }

    return { data }
}

export default useFetch