
import Table from "@mui/material/Table";
import { TableBody, TableContainer } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/material";
import {Typography} from "@mui/material";
import { useEffect, useState } from "react";
//import axios from "axios";


// const fetchData = async () => {
//   try {
//     const response = await fetch('http://34.41.148.34/customers', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(rows),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const responseData = await response.json();
//     setData(responseData);
//     setLoading(false);
//   } catch (error) {
//     console.error('Erro ao fazer a solicitação:', error);
//     setLoading(false);
//   }
// };

const StyledTableRow = styled(TableRow)(({  }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#512B81",
    borderRadius:"25px",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#35155D",
  },
}));

const StyledLeftCell = styled(TableCell)(({  }) => ({
  borderRadius:"25px 0px 0px 25px"
}));

const StyledRightCell = styled(TableCell)(({  }) => ({
  borderRadius:"0px 25px 25px 0px"
}));

const StatusPedido = () => {
  const [produto, setProduto] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://34.41.148.34/customers');
      setProduto(data.data)
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  // const rows = [
  //   createData(1, "Jorge", "Preparando"),
  //   createData(2, "Jorge", "Preparando"),
  //   createData(3, "Jorge", "Preparando"),
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography
          variant="h5"
          component="div"
          sx={{ color: "#35155D", marginTop: 5, marginX: "auto", maxWidth: "300px", align:"center" }}
        >
          Acompanhe seus pedidos
        </Typography>
      <Box
        marginX={"auto"}
        maxWidth={"90%"}
        marginTop={"20px"}
        alignContent={"center"}
        sx={{ borderRadius: "25px", overflow: "hidden" }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: "#35155D" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ borderRadius: "25px" }}>
                <TableCell
                  align="center"
                  sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                >
                  Número
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produto.map((row) => (
                <StyledTableRow key={row.numero}>
                  <StyledLeftCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                  >
                    {row.numero}
                  </StyledLeftCell>

                  <TableCell
                    align="center"
                    sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                  >
                    {row.nome}
                  </TableCell>
                  <StyledRightCell
                    align="center"
                    sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
                  >
                    {row.status}
                  </StyledRightCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default StatusPedido;
