'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/images/shared/logo.svg';
import MobHeader from './mobHeader';


export default function Header () {

    return (
     <header className='absolute top-0 w-full h-20 m-0 p-6'>
      
        <MobHeader />
      

        <div className='hidden'>
        <Link href="/" >
        <Image src={logo} alt='Logo' width={40} height={40} className='mt-6 mb-6 ml-6'/>
        </Link>
        </div>
      </header>
    )
}