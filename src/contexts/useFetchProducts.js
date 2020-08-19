import { useState, useEffect } from "react"

function useFetch(url) {
    const [ data, setData ] = useState(null)
    /*const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)*/

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let response = await fetch(url)
        let data = await response.json()

        setData(data)
    }

    return { data }
}

export default useFetch