import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllApiReq() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(data)

    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            // console.log(response)
            setData(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }

    }

    // const postData= async (d)=>{
        
    //     try {
    //         const response = await axios.post("https://jsonplaceholder.typicode.com/posts",d);
    //         console.log(response);
    //         setData(response.data)
    //         setLoading(false)

    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // const patchData=async (d)=>{
    //     try {
    //         const response =await axios.patch("https://jsonplaceholder.typicode.com/posts/1",d)
    //         console.log(response)
    //         setData(response.data)
    //         setLoading(false)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const putData=async (d)=>{
    //     try {
    //         const response =await axios.put("https://jsonplaceholder.typicode.com/posts/1",d)
    //         console.log(response)
    //         setData(response.data)
    //         setLoading(false)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const deleteData=async ()=>{
        try {
            const response =await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            console.log(response)
            setData(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }


    const handleClick=()=>{
        // getData()
        // postData({id:1, body: "Lorem ipsum", title:"axios post"})
        // patchData({title:"Lorem Ipsum"})
        // putData({id:1, body: "First put", title:"axios post"})
        deleteData()
    }

    

    // if (loading) {
    //     return <h2>loading...</h2>
    // }

    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default AllApiReq