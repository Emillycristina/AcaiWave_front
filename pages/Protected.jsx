import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Protected() {
    const [user] = useState(null);
    const navigate = useNavigate(); // Obtenha a função de navegação1

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const token = localStorage.getItem('token'); // Recupere o token armazenado

    if (!token) {
      // Se não houver token, redirecione para a página de login
       return navigate('/Home')
    } 
}, []);

  

  return (
     <>
      {user ? (
         navigate('/Home')
      ) : (
        <p>Carregando...</p>
      )}
   </>
  );
}

export default Protected;
