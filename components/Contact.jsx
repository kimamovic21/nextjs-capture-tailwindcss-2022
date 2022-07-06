import React from 'react';
import {MdContactMail} from 'react-icons/md';

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>

        <div className='flex justify-center'>
            <h1 className='text-2xl font-bold text-center p-4'>
                Let's work together.
            </h1>
            <MdContactMail size={30}
                           className='mt-3'/>
        </div>

        <form id='my-form'
              action='https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33'
              method='POST'
              className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 outline-none focus:scale-105 ease-out duration-200'
                       type="text" 
                       placeholder='Name' 
                />
                <input className='border shadow-lg p-3 outline-none focus:scale-105 ease-out duration-200'
                       type="text" 
                       placeholder='Surname' 
                />
            </div>
            <input className='border shadow-lg p-3 w-full my-2 outline-none focus:scale-105 ease-out duration-200'
                   type="text" 
                   placeholder='Subject' 
            />
            <input className='border shadow-lg p-3 w-full my-2 outline-none focus:scale-105 ease-out duration-200'
                   type="text" 
                   placeholder='Subject' 
            />
            <textarea className='border shadow-lg p-3 w-full outline-none focus:scale-105 ease-out duration-200'
                      cols="30" 
                      rows="10"
                      placeholder='Message'
            />
            <button className='border shadow-lg p-3 w-full mt-2 bg-[#0073f7] text-[#efefef] rounded-xl 
                             hover:bg-[#0a10bc] ease-in-out duration-300 hover:scale-105'>
                Submit
            </button>
        </form>

    </div>
  );
};

export default Contact;






// 1. dodajemo elemente
// 2. dodajemo klase roditelj div elementu
// 3. dodajemo klase ostalim elementima
// 4. dodajemo atribute form elementu
// 5. uredujemo submit button element na kraju contact stranice

