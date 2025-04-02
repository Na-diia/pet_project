import Image from 'next/image';
import { useState } from 'react';

import { Navigation } from '../navigation/navigation';
import burgerIcon from '../../public/images/shared/icon-hamburger.svg';
import logo from '../../public/images/shared/logo.svg';
import closeIcon from '../../public/images/shared/icon-close.svg';

export default function MobHeader () {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };
   
    return (
        <>
        <div className='flex justify-between items-center relative'>
        <Image src={logo} alt='Logo' width={40} height={40}/>
        <button type='button' className='flex' onClick={toggleMenu}>
        <Image src={burgerIcon} alt='Burger icon' width={24} height={21}/>
        </button>
        </div>
      {menuIsOpen ? <div className='z-10 backdrop-blur-lg absolute top-0 w-64 right-0 h-screen transition-all v overflow-y-auto visible '>
        <div className=''>
         <div className='flex justify-end'>
        <button type='button' onClick={toggleMenu} className='mr-8 mb-8 mt-8'>
        <Image src={closeIcon} alt='Close' width={24} height={21}  />
        </button>
        </div>
     <Navigation />
        </div>
     </div> :
      <div className='-right-full'></div>
     } 
     </>
    )
};