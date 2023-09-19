import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import copo from "../../assets/copo 1.png";
import CardMedia from "@mui/material/CardMedia";

const Listagem = () => {
  const [pedido, setPedido] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fazer uma solicitação GET à API para obter todos os pedidos
    fetch("http://34.41.148.34/orders")
      .then((response) => response.json())
      .then((data) => {
        // Verifique se os dados foram obtidos com sucesso
        if (Array.isArray(data) && data.length > 0) {
          // Ordene os pedidos por data de criação em ordem decrescente (do mais recente ao mais antigo)
          const pedidosOrdenados = data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });

          // Se o pedido mais recente existir, atualize o estado com ele
          if (pedidosOrdenados[0]) {
            setPedido(pedidosOrdenados[0]);
          } else {
            setPedido(null); // Caso contrário, defina o pedido como nulo
          }
        } else {
          setPedido(null); // Caso não haja dados, defina o pedido como nulo
        }

        setLoading(false); // Marque que o carregamento foi concluído
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <p>Carregando...</p>
      ) : pedido ? (
        <div className="text-center justify-center  m-4" >
          <Typography variant="h5" sx={{ color: "#35155D", padding: "16px" }}>
            Detalhes do Último Pedido
          </Typography>
          <Card className="max-w-md mx-auto mt-4 bg-white ">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}> 
                <div className="mb-4">
                  <CardMedia
                    component="img"
                    sx={{ height: "30%", width: "30%" }}
                    image={copo}
                    alt="copo"
                  />
                </div>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Typography variant="h6" sx={{ color: "#512B81", fontWeight: 700, justifyItems:'flex-end',mt: 1 }}>
                  Tamanho do copo: {pedido.size_order || "Não especificado"}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#512B81", fontWeight: 700, mt: 1 }}>
                    Acompanhamentos: {pedido.options.join(", ") || "Nenhum acompanhamento selecionado"}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#512B81", fontWeight: 700, mt: 1 }}>
                    Status do Pedido: {pedido.status}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      ) : (
        <p>Nenhum pedido encontrado.</p>
      )}
    </div>
  );
};

export default Listagem;
