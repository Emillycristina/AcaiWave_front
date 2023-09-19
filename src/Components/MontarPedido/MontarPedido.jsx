import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import AddBoxSharp from "@mui/icons-material/AddBoxSharp";
import { styled } from "@mui/material/styles";
import copo from "../../assets/copo 1.png";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [number_order] = useState(null); // Alterei o nome para corresponder ao número do pedido
  const [size_order, setSizeOrder] = useState(null); // Alterei o nome para corresponder ao tamanho do copo
  const [options, setOptions] = useState({}); // Alterei o nome para corresponder aos acompanhamentos selecionados
  const [selectedSizesCount, setSelectedSizesCount] = useState({});
  const [redirectToPedidos, setRedirectToPedidos] = useState(false);

  const handleSizeSelection = (size) => {
    setSizeOrder(size);
    setSelectedSizesCount({
      ...selectedSizesCount,
      [size]: (selectedSizesCount[size] || 0) + 1,
    });
  };

  const handleAccompanimentSelection = (accompaniment) => {
    setOptions({
      ...options,
      [accompaniment]: (options[accompaniment] || 0) + 1,
    });
  };

  const clearSelections = () => {
    setSizeOrder(null);
    setOptions({});
  };

  // Função para calcular e imprimir o preço total no console
  const calculateTotal = () => {
    let total = 0;

    if (size_order === "400ml") {
      total += 10; // Preço do copo de 400ml
    } else if (size_order === "500ml") {
      total += 15; // Preço do copo de 500ml
    } else if (size_order === "700ml") {
      total += 17; // Preço do copo de 700ml
    }

    // Adiciona o custo dos acompanhamentos (R$ 2 cada)
    total += Object.keys(options).length * 2;

    console.log("Preço total: R$", total.toFixed(2)); // Imprime o preço total no console

    clearSelections();
    sendOrderToAPI(total);
    setRedirectToPedidos(true); // Redireciona para a página de pedidos com o preço total como parâmetro de consulta
  };

  const confirmOrder = () => {
    console.log("Tamanho selecionado:", size_order);
    console.log("Acompanhamentos selecionados:", options);
    calculateTotal(); // Calcula e imprime o preço total no console antes de confirmar o pedido
  };

  const sendOrderToAPI = async (totalPrice) => {
    const orderData = {
      number_order: number_order, // Substitua pelo número do pedido real
      size_order: size_order,
      options: Object.keys(options),
      totalPrice: totalPrice,
    };

    try {
      const response = await fetch("http://34.41.148.34/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Pedido enviado com sucesso!");
      } else {
        console.error("Falha ao enviar o pedido para a API.");
      }
    } catch (error) {
      console.error("Erro ao enviar o pedido para a API:", error);
    }
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
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "#35155D",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Monte Seu Pedido
        </Typography>
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Tamanho
          </Typography>
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
            <Badge
              badgeContent={selectedSizesCount["400ml"] || 0}
              color="secondary"
            >
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
            </Badge>
            <Typography>400 ml</Typography>
            <Typography variant="body">R$ 10,00</Typography>
          </Paper>
          <IconButton
            variant="contained"
            color="secondary"
            className="absolute right-4 top-4"
            sx={{ fontSize: 24 }}
            onClick={() => handleSizeSelection("400ml")}
          >
            <AddBoxSharp />
          </IconButton>
        </Grid>

        {/* Item 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3} className="relative">
          <Paper elevation={3} className="w-48 h-64 p-4">
            <Badge
              badgeContent={selectedSizesCount["500ml"] || 0}
              color="secondary"
            >
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
            </Badge>
            <Typography>500 ml</Typography>
            <Typography variant="body">R$ 15,00</Typography>
          </Paper>
          <IconButton
            variant="contained"
            color="secondary"
            className="absolute right-4 top-4"
            sx={{ fontSize: 24 }}
            onClick={() => handleSizeSelection("500ml")}
          >
            <AddBoxSharp />
          </IconButton>
        </Grid>

        {/* Item 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3} className="relative">
          <Paper elevation={3} className="w-48 h-64 p-4">
            <Badge
              badgeContent={selectedSizesCount["700ml"] || 0}
              color="secondary"
            >
              <img src={copo} alt="copo" className="w-full h-32 mb-2" />
            </Badge>
            <Typography>700 ml</Typography>
            <Typography variant="body">R$ 17,00</Typography>
          </Paper>
          <IconButton
            variant="contained"
            color="secondary"
            className="absolute right-4 top-4"
            sx={{ fontSize: 24 }}
            onClick={() => handleSizeSelection("700ml")}
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
            marginBottom: "px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Acompanhamentos
          </Typography>
        </Box>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          padding: "50px",
          justifyContent: "space-around",
          marginTop: '20px'
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} sx ={{ display:'flex', alignItems:'center'}}>
          {[
            { label: "Leite Cond", key: "LeiteCond" },
            { label: "Confeite", key: "Confeite" },
            { label: "Suflair", key: "Suflair" },
            { label: "Leite em pó", key: "LeiteemPo" },
            { label: "Morango", key: "Morango" },
            { label: "Banana", key: "Banana" },
            { label: "Abacaxi", key: "Abacaxi" },
            { label: "Kiwi", key: "Kiwi" },
            { label: "Manga", key: "Manga" },
            { label: "Granola", key: "Granola" },

          ].map((acompanhamento) => (
            <Grid
              xs={12}
              sx={{ margin: "1px", display: "flex", alignItems: "center",}}
              key={acompanhamento.key}
            >
              <Item>{acompanhamento.label}</Item>
              <Badge
                badgeContent={options[acompanhamento.key] || 0}
                color="secondary"
              >
                <IconButton
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    handleAccompanimentSelection(acompanhamento.key)
                  }
                >
                  <AddBoxSharp />
                </IconButton>
              </Badge>
            </Grid>
          ))}
        </Grid>
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
        <Link to="/pedidos">
          <Button variant="contained" color="secondary" onClick={confirmOrder}>
            Confirmar Pedido
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default App;
