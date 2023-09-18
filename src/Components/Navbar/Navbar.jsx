import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import {useMediaQuery, useTheme, List, ListItem, ListItemText, Drawer, Typography } from '@mui/material/'
import Logo from '../../assets/açai1.png'
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@mui/material/Link';


const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const location = useLocation();

  
 
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderNavLinks = () => {
    // Verifique se a localização atual não é "/" ou "/CriarConta"
    if (location.pathname !== '/' && location.pathname !== '/CriarConta') {
      return (
        <List>
        <ListItem>
          <MuiLink component={RouterLink} to="/Pedidos" onClick={toggleDrawer}>
            <ListItemText secondary="PEDIDOS" style={{ textDecoration: 'none', cursor: 'pointer' }} />
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/PedidoStatus" onClick={toggleDrawer}>
            <ListItemText secondary="STATUS PEDIDOS" style={{ textDecoration: 'none', cursor: 'pointer' }} />
          </MuiLink>
        </ListItem>
       <ListItem>
          <MuiLink component={RouterLink} to="/Home" onClick={toggleDrawer}>
            <ListItemText secondary="MONTE SEU PEDIDO" style={{ textDecoration: 'none', cursor: 'pointer' }} />
          </MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink component={RouterLink} to="/" onClick={toggleDrawer}>
            <ListItemText secondary="SAIR" style={{ textDecoration: 'none', cursor: 'pointer' }} />
          </MuiLink>
        </ListItem>
      </List>
      
      );
    }
    return null; // Não renderize os links nas rotas "/" e "/CriarConta"
  };

  if (location.pathname === '/' || location.pathname === '/CriarConta') {
    return null;
  }

 



  return (
    <AppBar position="static" style={{ backgroundColor: '#35155D', height: '4rem' }}>
    <Toolbar style={{ display: 'flex' }}>
      <Grid container>
        <Grid item>
          <img src={Logo} alt="logo" width={100} height={100} />
        </Grid>
      </Grid>
      {isMobile ? (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <AiOutlineMenu style={{ cursor: 'pointer' }} />
        </IconButton>
      ) : (
        <Grid container spacing={1}>
          <Grid item style={{ marginLeft: 'auto' }}>
            <RouterLink to="/Home"  >
              <Typography variant='body' sx={{color: "#FFF", textDecoration:"none", marginRight:'4px' }}>
                Monte Seu Pedido
              </Typography>
            </RouterLink>
          </Grid>
          <Grid item>
            <RouterLink to="/Pedidos" >
            <Typography variant='body' sx={{color: "#FFF", textDecoration:"none", marginRight:'4px'}}>
                Pedidos
            </Typography>
            </RouterLink>
          </Grid>
         <Grid item>
            <RouterLink to="/PedidoStatus">
            <Typography variant='body' sx={{color: "#FFF", textDecoration:"none", marginRight:'4px' }}>
                Status Pedido
            </Typography>
            </RouterLink>
          </Grid>
           <Grid item>
            <RouterLink to="/" >
            <Typography variant='body' sx={{color: "#FFF", textDecoration:"none", marginRight:'4px' }}>
                Sair
              </Typography>
            </RouterLink>
          </Grid>
        </Grid>
      )}
    </Toolbar>
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      {renderNavLinks()}
    </Drawer>
  </AppBar>
  )
}

export default Navbar