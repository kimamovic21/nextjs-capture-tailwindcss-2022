import React from 'react';
import Nature1 from '../public/images/nature1.jpeg';
import Nature2 from '../public/images/nature2.jpeg';
import Nature3 from '../public/images/nature3.jpeg';
import Nature4 from '../public/images/nature4.jpeg';
import Nature5 from '../public/images/nature5.jpeg';
import Nature6 from '../public/images/nature6.jpeg';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>

        <p className='text-2xl font-bold'>
            Follow me on Instagram
        </p>
        <p className='pb-4'>Capture</p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Nature1}/>
            <InstagramImg socialImg={Nature2}/>
            <InstagramImg socialImg={Nature3}/>
            <InstagramImg socialImg={Nature4}/>
            <InstagramImg socialImg={Nature5}/>
            <InstagramImg socialImg={Nature6}/>
        </div>

    </div>
  );
};

export default Instagram;


// 1. importujemo slike
// 2. dodajemo InstagramImg komponentu
// 3. dodajemo klasu roditelj div elementu
// 4. divu u kojem se nalaze slike dodajemo klase za grid
