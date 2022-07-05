import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  };

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>

        <h1 className='text-2xl font-bold text-center p-4'>
            Gallery
        </h1>

        <div className='relative flex justify-center p-4'>
           {SliderData.map((slide, index) => {
            return ( 
              <div key={index}
                   className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>

                   <FaArrowCircleLeft className='absolute top-[50%] left-[30px] text-[#fff]/70 cursor-pointer select-none z-[2]'  
                                      size={50}
                                      onClick={prevSlide}
                    />

                    {index === current && (
                        <Image src={slide.image} 
                        width='1440'
                        height='600' 
                        objectFit='cover'
                        alt="/" 
                        />
                    )}

                    <FaArrowCircleRight className='absolute top-[50%] right-[30px] text-[#fff]/70 cursor-pointer select-none z-[2]'  
                                        size={50}
                                        onClick={nextSlide}
                    />

                 </div>

            )   
            })}
        </div>

    </div>
  );
};

export default Slider;






// 1. dodajemo slides props
// 2. roditelj divu elemenata dodajemo id
// 3. dodajemo javascript mat metodu
// 4. dodajemo NextJS Image element sa atributima
// 5. dodajemo kljuc i klasu div roditelj elementu
// 6. dodajemo useState hook
// 7. dodajemo const length
// 8. dodajemo nextSlide i prevSlide funkcije
// 9. dodajemo if uslov
// 10. dodajemo react ikonice za listanje desno i lijevo
// 11. dodajemo klasu roditelj divu elemenata
