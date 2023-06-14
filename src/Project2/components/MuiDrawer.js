import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Pages } from '@mui/icons-material';
import { PAGES } from '../database/Data';

function MuiDrawer() {


    const [open,setOpen]=useState(false)

    return (
        <>
            <Drawer open={open} onClose={()=> setOpen(false)}>
                <List>

                    {PAGES.map((page,i)=>{
                        return (
                            <>                            <ListItemButton>
                        <ListItemIcon key={i}>
                            <ListItemText>Products</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    </>
                        )
                    })}
                    
                </List>
            </Drawer>
            <IconButton sx={{marginLeft:"auto"}} onClick={()=>setOpen(!open)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default MuiDrawer