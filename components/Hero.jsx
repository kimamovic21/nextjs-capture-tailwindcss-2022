import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover 
        bg-[url(https://images.unsplash.com/photo-1615075650468-4e8e293d4989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)]'
    >

        {/* Overlay div */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'>
        </div>

        {/* Content div */}
        <div className='p-5 text-[#fff] z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 rounded-xl bg-[#5b5de3] hover:bg-[#4b4dd2] hover:scale-105 duration-300 ease-in-out'>Book</button>
        </div>

    </div>
  )
}

export default Hero;





// 1. dodajemo overlay div
// 2. dodajemo jos jedan div sa html elementima
// 3. dodajemo roditelj divu klase
// 4. uredujemo overlay div element
// 5. uredujemo content div element i elemente unutar njega
// 6. dodajemo react props
