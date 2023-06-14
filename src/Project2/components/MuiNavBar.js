import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,} from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MuiDrawer from './MuiDrawer';
import { PAGES } from '../database/Data';
import { useNavigate } from 'react-router-dom';
function MuiNavBar(){

    const navigate=useNavigate()

    const [index,setIndex]=useState(0)
    const theme=useTheme()
    
    const isMobile=useMediaQuery(theme.breakpoints.down("sm"))
    
    // console.log(isMobile)

    const handleLogin=()=>{
      navigate("./login")
    }


  return (
    <>
        <AppBar sx={{backgroundColor: "lightcyan"}}>
            <Toolbar>

            <ShoppingCartIcon sx={{color:"black"}}/>
            <Typography sx={{color:"black"}} variant='h6'>ShopMart</Typography>
            {isMobile ? <MuiDrawer/>: 
            <>
            <Tabs value={index} onChange={((e,i)=>{setIndex(i)})}>
              {PAGES.map((page,i)=>{
                return  <Tab key={i} label={page}/>
              })}
                
            </Tabs>
            <Button onClick={handleLogin} sx={{marginLeft: "auto"}} variant='contained'>LOGIN</Button> 
            </>}

            </Toolbar>
        </AppBar>
    </>
  )
}

export default MuiNavBar