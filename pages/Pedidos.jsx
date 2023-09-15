
import Navbar from '../src/Components/Navbar/Navbar'
import Listagem from '../src/Components/Listagem/Listagem'
import CarouselImage from '../src/Components/Corousel/CarouselImage'
import MontarPedidos from '../src/Components/MontarPedido/MontarPedido'

const Pedidos = () => {
  return (
    <div>
     <Navbar/>
     <CarouselImage />
     <MontarPedidos/>
    </div>
  )
}

export default Pedidos