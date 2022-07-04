import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#fff');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 40) {
            setColor('#fff')
            setTextColor('#000')
        } else {
            setColor('transparent')
            setTextColor('#fff');
        }
    }
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}}
         className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-[#fff]'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}}
                    className='font-bold text-4xl'>
                    Capture
                </h1>
            </Link>
            <ul style={{color: `${textColor}`}}
                className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href=''>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contant</Link>
                </li>
            </ul>

            {/* Mobile button */}
            <div onClick={handleNav} 
                 className='sm:hidden block z-10'>
                {nav ? 
                <AiOutlineClose style={{color: `${textColor}`}} 
                                className='cursor-pointer' 
                                size={20}/> : 
                <AiOutlineMenu style={{color: `${textColor}`}}
                               className='cursor-pointer' 
                               size={20}/>
                }
                {/* <AiOutlineMenu size={20}/> */}
            </div>

            {/* Mobile menu */}
            <div className={nav ? 
                'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 
                'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
              <ul>
                <li className='p-4 text-4xl text-gray-400'>
                    <Link href=''>Home</Link>
                </li>
                <li className='p-4 text-4xl text-gray-400'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 text-4xl text-gray-400'>
                    <Link href='/portfolio'>Work</Link>
                </li>
                <li className='p-4 text-4xl text-gray-400'>
                    <Link href='/contact'>Contant</Link>
                </li>
              </ul>
            </div>

        </div>  

    </div>
  )
}

export default Navbar;







// 1. dodajemo div u kojem se nalazi Link element sa h1 elementom
// 2. dodajemo ul element i unutar njega li elemente
// 3. dodajemo div za Mobile button
// 4. dodajemo div za Mobile menu
// 5. stiliziramo div elemente
// 6. dodajemo useState hook za prikazivanje mobile menu diva
// 7. dodajemo onClick dogadaj Mobile button divu
// 8. dodajemo useState hook za promjenu boje navbar elementa kada se skrola stranica
// 9. dodajemo useState hoook za promjenu boje teksta u navbar komponenti
// 10. dodajemo style atribut roditelj divu
// 11. h1 elementu dodajemo style atribut
// 12. ul elementu dodajemo style atribut
// 13. ikonicama u divu za mobile dodajem style atribut
// 14. dodajemo useEffect hook
// 15.  



