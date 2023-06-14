import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MuiForm() {

    const [isSignUp,setIsSignUp]=useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

    }


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))

    }

    const handleSwitch =()=>{
        setIsSignUp(!isSignUp)
    }
    

    return (

        <>

            <form onSubmit={handleSubmit}>
                <Box
                    borderRadius={"20px"}
                    border={"0.25px solid #ccc"}
                    padding={"60px"}
                    display={"flex"}
                    flexDirection={"column"}
                    maxWidth={"550px"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>

                    <Typography color="primary" textAlign="center" variant="h4" >{isSignUp ? "Sign Up" : "LOGIN"}</Typography>
                    {isSignUp && <TextField value={formData.name} onChange={handleChange} margin='normal' name='name' placeholder='Enter Name' type='text'></TextField>}
                    <TextField value={formData.email} onChange={handleChange} margin='normal' name='email' placeholder='Enter Email' type='text'></TextField>
                    <TextField value={formData.password} onChange={handleChange} margin='normal' name='password' placeholder='Enter Password' type='text'></TextField>
                    <Button  sx={{ mt: 2 }} type='submit' variant='contained'>{isSignUp ? "Sign Up" : "LOGIN"}</Button>
                    <Button sx={{ mt: 2 }} type='submit' onClick={handleSwitch} >{isSignUp ? "Click Here to LOGIN" : "Click Here to SIGN UP"}</Button>

                </Box>
            </form>
        </>
    )
}

export default MuiForm