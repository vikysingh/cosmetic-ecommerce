import { useState } from "react"

import axios from "axios"

export default function useFetchProducts() {
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState(null)

    async function fetchProducts(url){
        try {
            let response = await axios.get(url)
        
            setData(response.data)
            setLoading(false)
        }

        catch(err){
            console.log(new Error("An error occurred in fetching"))
            setError(true)
            setLoading(false)
        }
    }

    return { error, loading, data, fetchProducts }
}