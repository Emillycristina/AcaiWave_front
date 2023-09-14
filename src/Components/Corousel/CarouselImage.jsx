//import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Foto1 from '../../assets/açai.jpg'
import Foto2 from '../../assets/açai3.png'
import Foto3 from '../../assets/açai2.jpg'



const CarouselImage = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div>
        <img src={Foto1} alt="Imagem 1" height={400} />
       
      </div>
      <div>
        <img src={Foto2} alt="Imagem 2" height={400}/>
        
      </div>
      <div>
        <img src={Foto3} alt="Imagem 3" height={400}/>
       
      </div>
    </Carousel>
  );
};

export default CarouselImage;
