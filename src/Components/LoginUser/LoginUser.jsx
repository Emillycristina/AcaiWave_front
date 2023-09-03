//import React from 'react'
import { Box, Button, Container, TextField, InputLabel, Typography} from '@mui/material';
import logo from '../../assets/açai1.png'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
//import React from 'react';


const EstiloMetadeRoxa = {
  backgroundColor: '#35155D', 
  minHeight: '100vh',
  width: '50%', 
  float: 'left', 
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
};

const EstiloMetadeBranca = {
  backgroundColor: '#FFF',
  minHeight: '100vh',
  width: '50%', 
  float: 'right', 
  padding: 0,
  margin: 0,
};

const EstiloContainer = {
  
  display: 'flex',
  padding: 0,
  margin: 0,
  width:'100%'
};


const EstiloButton ={
  backgroundColor: '#35155D',
  color: '#FFF' ,
  marginTop: '1.8rem'


}

const EstiloTitulo ={
  color:'#35155D',
  marginTop: '1rem',
  marginLeft: '0.1rem',
  fontWeight: 'bold',
}


const EstiloForm = {
  width: '90%' ,
  marginTop: '0.5rem',
  padding: '3rem',
  
}

const EstiloTextField ={
  height: '2rem'
}

const EstiloLabel ={
  color: '#35155D',
  marginTop: '1.5rem '
}

const Estilofrase ={
  color: "#d3d3d3",
  alignText: 'center',
  marginTop:'1rem',
  fontSize: '0.8rem'

}

const EstiloLink ={
  color: '#1A5D1A',
  fontWeight: 'bold',
  textDecoration: 'none'
}

const Estilodiv ={
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center'
}

const LoginUser = () => {
  const isLargeScreen = useMediaQuery('(min-width: 751px)')


  return (
    
    <Container style={EstiloContainer}>
      {isLargeScreen ? (
      <>
      <Box style={EstiloMetadeRoxa}>
        <img  src={logo} alt='logo' />
      </Box>
      <Box style={EstiloMetadeBranca}>
      
      
      <form style={EstiloForm}>
      <Typography variant="h4" style={EstiloTitulo}>
        Login
      </Typography>
        <InputLabel htmlFor="bootstrap-input" style={EstiloLabel}>
             Email
            </InputLabel>    
            <TextField
              placeholder="ex: 123@hotmail.com"
              variant="outlined"
              fullWidth
              margin="none"
              size="small"
              sx={EstiloTextField}
            />
            <InputLabel htmlFor="bootstrap-input" style={EstiloLabel}>
              Senha
             </InputLabel>
            <TextField
              placeholder="******"
              variant="outlined"
              fullWidth
              margin="none"
              size="small"
              sx={EstiloTextField}
            />
            <Button type="submit" fullWidth style={EstiloButton}>
              Entrar
            </Button>
            <div style={Estilodiv}>
            <Typography style={Estilofrase}>
              Não possui uma conta? <Link to='/' style={EstiloLink}>Cadastre-se</Link>
            </Typography>
            </div>


        </form>
      </Box>
      </>
      ) : (
    <Box style={EstiloMetadeBranca}>
      <form style={EstiloForm}>
       <Typography variant="h4" style={EstiloTitulo}>
        Login
      </Typography>
        <InputLabel htmlFor="bootstrap-input" style={EstiloLabel}>
             Email
            </InputLabel>    
            <TextField
              placeholder="ex: 123@hotmail.com"
              variant="outlined"
              fullWidth
              margin="none"
              size="small"
              sx={EstiloTextField}
            />
            <InputLabel htmlFor="bootstrap-input" style={EstiloLabel}>
              Senha
             </InputLabel>
            <TextField
              placeholder="******"
              variant="outlined"
              fullWidth
              margin="none"
              size="small"
              sx={EstiloTextField}
            />
            <Button type="submit" fullWidth style={EstiloButton}>
              Entrar
            </Button>
            <div style={Estilodiv}>
            <Typography style={Estilofrase}>
              Não possui uma conta? <Link to='/' style={EstiloLink}>Cadastre-se</Link>
            </Typography>
            </div>


        </form>
      </Box>
      )}
    </Container>
    
  )
}

export default LoginUser