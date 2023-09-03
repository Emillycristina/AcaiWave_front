//import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


const EstiloNavbar = {
  backgroundColor: '#35155D',
}

const Navbar = () => {
  return (
    <AppBar position="static" style={EstiloNavbar}>
      <Toolbar >
        <IconButton edge="start" color="inherit" aria-label="menu">
         
        </IconButton>
        <Typography variant="h6">
        
        </Typography>
      </Toolbar>
    </AppBar>
    
  )
}

export default Navbar