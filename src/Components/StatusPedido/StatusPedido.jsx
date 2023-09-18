
// import Table from "@mui/material/Table";
// import { TableBody, TableContainer } from "@mui/material";
// import { TableCell } from "@mui/material";
// import { TableHead } from "@mui/material";
// import { TableRow } from "@mui/material";
// import { Paper } from "@mui/material";
// import { Box } from "@mui/material";
// import { styled } from "@mui/material";
// import {Typography} from "@mui/material";
// import { useEffect, useState } from "react";
// import * as React from 'react';


// const StyledTableRow = styled(TableRow)(({  }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "#512B81",
//     borderRadius:"25px",
//   },
//   "&:nth-of-type(even)": {
//     backgroundColor: "#35155D",
//   },
// }));

// const StyledLeftCell = styled(TableCell)(({  }) => ({
//   borderRadius:"25px 0px 0px 25px"
// }));

// const StyledRightCell = styled(TableCell)(({  }) => ({
//   borderRadius:"0px 25px 25px 0px"
// }));

// const StatusPedido = () => {
//   const [produto, setProduto] = useState([])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://34.41.148.34/orders', {
//         method: 'GET',
//       } );
//       setProduto(response.data);
//   } catch (error) {
//     // Lidar com erros de rede ou outros erros
//     console.error('Erro ao fazer a solicitação:', error);
//   }}

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Typography
//           variant="h5"
//           component="div"
//           sx={{ color: "#35155D", marginTop: 5, marginX: "auto", maxWidth: "300px", align:"center" }}
//         >
//           Acompanhe seus pedidos
//         </Typography>
//       <Box
//         marginX={"auto"}
//         maxWidth={"90%"}
//         marginTop={"20px"}
//         alignContent={"center"}
//         sx={{ borderRadius: "25px", overflow: "hidden" }}
//       >
//         <TableContainer component={Paper} sx={{ backgroundColor: "#35155D" }}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ borderRadius: "25px" }}>
//                 <TableCell
//                   align="center"
//                   sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                 >
//                   Número
//                 </TableCell>
//                 <TableCell
//                   align="center"
//                   sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                 >
//                   Nome
//                 </TableCell>
//                 <TableCell
//                   align="center"
//                   sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                 >
//                   Status
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {produto.map((row) => (
//                 <StyledTableRow key={row.numero}>
//                   <StyledLeftCell
//                     align="center"
//                     component="th"
//                     scope="row"
//                     sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                   >
//                     {row.numero}
//                   </StyledLeftCell>

//                   <TableCell
//                     align="center"
//                     sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                   >
//                     {row.nome}
//                   </TableCell>
//                   <StyledRightCell
//                     align="center"
//                     sx={{ color: "#FFF", borderBottom: "none", fontSize:22 }}
//                   >
//                     {row.status}
//                   </StyledRightCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </div>
//   );
// };

// export default StatusPedido;


import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#512B81",
    borderRadius: "25px",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#35155D",
  },
}));

const StyledLeftCell = styled(TableCell)(({ theme }) => ({
  borderRadius: "25px 0px 0px 25px",
}));

const StyledRightCell = styled(TableCell)(({ theme }) => ({
  borderRadius: "0px 25px 25px 0px",
}));

const StatusPedido = () => {
  const [produto, setProduto] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://34.41.148.34/orders", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setProduto(data);
      } else {
        console.error("Erro ao fazer a solicitação:", response.statusText);
      }
    } catch (error) {
      // Lidar com erros de rede ou outros erros
      console.error("Erro ao fazer a solicitação:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: "#35155D",
          marginTop: 5,
          marginX: "auto",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        Acompanhe seus pedidos
      </Typography>
      <Box
        marginX="auto"
        maxWidth="90%"
        marginTop="20px"
        sx={{ borderRadius: "25px", overflow: "hidden" }}
      >
        <TableContainer component={Paper} sx={{ backgroundColor: "#35155D" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ borderRadius: "25px" }}>
                <TableCell
                  align="center"
                  sx={{
                    color: "#FFF",
                    borderBottom: "none",
                    fontSize: 22,
                  }}
                >
                  Número
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#FFF",
                    borderBottom: "none",
                    fontSize: 22,
                  }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#FFF",
                    borderBottom: "none",
                    fontSize: 22,
                  }}
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
                    sx={{
                      color: "#FFF",
                      borderBottom: "none",
                      fontSize: 22,
                    }}
                  >
                    {row.numero}
                  </StyledLeftCell>

                  <TableCell
                    align="center"
                    sx={{
                      color: "#FFF",
                      borderBottom: "none",
                      fontSize: 22,
                    }}
                  >
                    {row.nome}
                  </TableCell>
                  <StyledRightCell
                    align="center"
                    sx={{
                      color: "#FFF",
                      borderBottom: "none",
                      fontSize: 22,
                    }}
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
