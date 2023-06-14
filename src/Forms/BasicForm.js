import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function BasicForm() {

    const [formData, setFormData]=useState({
      username:"",
      email:"",
      password:""
    })

    const [data,setData]=useState([])

    const handleChange=(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        // setFormData(e.target.value)
        setFormData((prev)=>({...prev,[e.target.name]: e.target.value}))
        
        //useing destructring
        //   const {name,value}=e.target;

        // setFormData((prev)=>({...prev,[name]:value}))
      }
      // console.log(formData)
      const handleSubmit=(e)=>{
        e.preventDefault()
        setData([...data, formData])
      }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            UserName:
            <input name="username" value={formData.username} type='text' onChange={handleChange}/>
        </label><br />
        <label>
            Email:
            <input name="email" value={formData.email} type='email' onChange={handleChange}/>
        </label><br />
        <label>
            Password:
            <input name="password" value={formData.password} type='password' onChange={handleChange}/>
        </label> <br/>
        <button type='submit'>Submit</button>
    </form>
    <div>
      {/* {JSON.stringify(formData)} */}
      {/* {Object.keys(formData).map((item)=>{
        return <ul>
          <li>{formData[item]}</li>
        </ul>
      })} */}
      {data.map((item,i)=>{
        return <ul key={i}>
          <li>{item.username}</li>
          <li>{item.email}</li>
          <li>{item.password}</li>
          
        </ul>
      })}
    </div>
    </>

  )
}

export default BasicForm;