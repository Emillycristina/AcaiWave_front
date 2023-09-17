import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, IconButton } from "@mui/material";
import AddBoxSharp from "@mui/icons-material/AddBoxSharp";
import { styled } from '@mui/material/styles';
import copo from "../../assets/copo 1.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  // Defina o estado para rastrear as seleções do usuário
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAccompaniments, setSelectedAccompaniments] = useState([]);

  // Função para selecionar o tamanho
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Função para selecionar acompanhamentos
  const handleAccompanimentSelection = (accompaniment) => {
    setSelectedAccompaniments([...selectedAccompaniments, accompaniment]);
  };

  // Função para confirmar o pedido
  const confirmOrder = () => {
    // Aqui você pode fazer algo com as seleções, como enviar para o servidor
    console.log("Tamanho selecionado:", selectedSize);
    console.log("Acompanhamentos selecionados:", selectedAccompaniments);
  };

  return (
    <div style={{ padding: 40 }}>
      <Box
        sx={{
          display: "flex",
          marginTop: "25px",
          marginBottom: "25px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant='h5' component='div' 
        sx={{ color: "#35155D",  alignItems: "center",justifyContent: "center",}}>Monte Seu Pedido</Typography>
      </Box>

      <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#35155D",
              color: "#fff",
              padding: "10px",
              marginRight: "10px", // Espaço entre o box azul e o card
              borderTopLeftRadius: "10px", // Borda esquerda arredondada
              borderBottomLeftRadius: "20px", // Borda esquerda arredondada
              borderTopRightRadius: "10px", // Borda direita arredondada
              borderBottomRightRadius: "20px", // Borda direita arredondada
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tamanho</Typography>
          </Box>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{
          padding: "50px",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
         {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4} lg={3} className="relative">
            <Paper elevation={3} className="w-48 h-64 p-4">
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
              <Typography>400 ml</Typography>
              <Typography variant="body">R$ 10,00</Typography>
            </Paper>
            <IconButton
              variant="contained"
              color="secondary"
              className="absolute right-4 top-4"
              sx={{ fontSize: 24 }}
              onClick={() => selectedSize("400ml")}
              
            >
              <AddBoxSharp />
            </IconButton>
          </Grid>

        {/* Item 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3} className="relative">
            <Paper elevation={3} className="w-48 h-64 p-4">
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
              <Typography>500 ml</Typography>
              <Typography variant="body">R$ 15,00</Typography>
            </Paper>
            <IconButton
              variant="contained"
              color="secondary"
              className="absolute right-4 top-4"
              sx={{ fontSize: 24 }}
              onClick={() => selectedSize("500ml")}
            >
              <AddBoxSharp />
            </IconButton>
          </Grid>

        {/* Item 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3} className="relative">
            <Paper elevation={3} className="w-48 h-64 p-4">
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
              <Typography>700 ml</Typography>
              <Typography variant="body">R$ 17,00</Typography>
            </Paper>
            <IconButton
              variant="contained"
              color="secondary"
              className="absolute right-4 top-4"
              sx={{ fontSize: 24 }}
              onClick={() => selectedSize("700ml")}
            >
              <AddBoxSharp />
            </IconButton>
          </Grid>

      </Grid>
      

      {/* ACOMPANHAMENTOS*/}
      <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#35155D",
              color: "#fff",
              padding: "10px",
              marginRight: "10px", // Espaço entre o box azul e o card
              borderTopLeftRadius: "10px", // Borda esquerda arredondada
              borderBottomLeftRadius: "20px", // Borda esquerda arredondada
              borderTopRightRadius: "10px", // Borda direita arredondada
              borderBottomRightRadius: "20px", // Borda direita arredondada
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Acompanhamentos</Typography>
          </Box>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{
          padding: "50px",
          justifyContent: "space-around",
        }}
      >
      
      <Box sx={{ width: '50%', padding: '30px', display: 'center', alignItems: 'flex-end', textAlign: "right",}}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Banana</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Banana")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid  xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Granola</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Granola")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Morango</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Morango")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid  xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Abacaxi</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Abacaxi")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid  xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Manga</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Manga")}><AddBoxSharp /></IconButton>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Leite Cond</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("LeiteCond")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Confeite</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Confeite")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Sufler</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Sufler")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Leite em pó</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("LeiteEmPo")}><AddBoxSharp /></IconButton>
          </Grid>
          <Grid xs={6} sx={{ margin: '2px', display: 'flex', alignItems: 'center' }}>
            <Item>Kiwi</Item>
            <IconButton variant="contained" color="secondary" onClick={() => selectedAccompaniments("Kiwi")}><AddBoxSharp /></IconButton>
          </Grid>
        </Grid>
      </Box>
      </Grid>

       {/* Botão de confirmar pedido */}
       <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <Button variant="contained" color="secondary" onClick={confirmOrder}>
          Confirmar Pedido
        </Button>
      </Box>
    </div>
  );
}

export default App;
