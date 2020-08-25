import { useState, useEffect } from "react"

function useFetch(url) {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            let response = await fetch(url)
            let data = await response.json()

            setLoading(false)
            setData(data)
        } catch {
            setError(true)
            setLoading(false)
        }
    }

    return { data, loading, error }
}

export default useFetch