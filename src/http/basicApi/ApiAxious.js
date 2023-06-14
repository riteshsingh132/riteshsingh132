import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiAxious() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(data)

    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            // setData(response)
            setData(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        <div>

        </div>
    )
}

export default ApiAxious