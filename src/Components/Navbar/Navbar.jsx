import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
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
        <ListItem  component={Link} to="/Home" onClick={toggleDrawer}>
          <ListItemText secondary="HOME" style={{ textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
        <ListItem  component={Link} to="/Pedidos" onClick={toggleDrawer}>
          <ListItemText secondary="PEDIDOS" style={{ textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
        <ListItem  component={Link} to="/CriarConta" onClick={toggleDrawer}>
          <ListItemText secondary="CADASTRAR" style={{ textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText secondary="SAIR" style={{ textDecoration: "none", cursor:"pointer"}} />
        </ListItem>
      </List>
    );
  };
  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#35155D', height: '4rem' }}>
    <Toolbar sx={{ display: 'flex' }}>
      <Grid container>
        <Grid item>
          <img src={Logo} alt="logo" width={100} height={100} />
        </Grid>
      </Grid>
      {isMobile ? (
        <IconButton edge="start" color="inherit" aria-label="menu"  onClick={toggleDrawer}>
          <AiOutlineMenu sx={{ cursor: 'pointer' }} />
        </IconButton>
      ) : (
        <Grid container spacing={1} >
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Typography variant='body' sx={{ color: '#FFF', marginRight: '2rem', cursor: 'pointer' }}>
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body' sx={{ color: '#FFF', cursor: 'pointer', marginRight: '2rem' }}>
              Pedidos
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body' sx={{ color: '#FFF', cursor: 'pointer', marginRight: '2rem' }}>
            Cadastrar
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body' sx={{ color: '#FFF', cursor: 'pointer', marginRight: '2rem' }}>
              Entrar
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body' sx={{ color: '#FFF', cursor: 'pointer' }}>
              Sair
            </Typography>
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