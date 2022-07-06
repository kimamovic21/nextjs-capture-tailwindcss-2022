import Image from 'next/image';
import React from 'react';
import {FaInstagram} from 'react-icons/fa';

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>

        <Image src={socialImg} 
               alt='/'
               className='w-full h-full'
               layout='responsive'
        />

        {/* Overlay div */}
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
            <p className='text-gray-300 hidden group-hover:block'>
              <div className='flex justify-center items-center'>
                  <FaInstagram size={30}/>
                  <p className='ml-2'>Nature image</p>
              </div>
            </p>
        </div>


    </div>
  );
};

export default InstagramImg;






// 1. dodajemo react props
// 2. dodajemo NextJS Image komponentu
// 3. dodajemo overlay div element
// 4. dodajemo klasu roditelj div elementu
// 5. dodajemo klasu Image komponenti

