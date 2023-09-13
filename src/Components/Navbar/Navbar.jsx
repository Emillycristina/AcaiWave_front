import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box  from '@mui/material/Box';
import {useMediaQuery, useTheme, List, ListItem, ListItemText, Link, Drawer } from '@mui/material/'
import Logo from '../../assets/açai1.png'
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = React.useState(false);

  
 
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderNavLinks = () => {
    return (
      <List>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText secondary="ENTRAR" style={{ color: "#fff", textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText secondary="CADASTRAR" style={{ textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
      </List>
    );
  };
  
  return (
<AppBar position="static" sx={{ backgroundColor: '#35155D', height: '4rem' }}>
  <Box sx={{ height: '4rem', display: 'flex', alignItems: 'center' }}>
    <img src={Logo} alt="logo" width={100} />
  </Box>
  <Toolbar>
  {isMobile ? (
    <IconButton edge="start" color="inherit" aria-label="menu">
     <AiOutlineMenu />
    </IconButton>
  ):(
    <Box sx={{alignItems:'rigth'}}>
     <Typography sx={{color:'#FFF', marginRight:'2rem'}}>
       Cadastrar
     </Typography>
     <Typography sx={{color:'#FFF'}}>
       Entrar
     </Typography>
    </Box>
    )}
  </Toolbar>
  <Drawer anchor="left"  open={openDrawer} onClose={toggleDrawer}>
   {renderNavLinks()}
  </Drawer>
</AppBar>

  )
}

export default Navbar