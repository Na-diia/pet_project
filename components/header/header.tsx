'use client';
import Image from 'next/image';
import Link from 'next/link';

import useWindowSize from '@/lib/useWindowSize';
import logo from '../../public/images/shared/logo.svg';
import MobHeader from './mobHeader';
import { Navigation } from '../navigation/navigation';


export default function Header () {
  const windowSize = useWindowSize();

    return (
     <header className='absolute top-0 w-full h-20 md:pt-0 md:h-24  md:pb-6  md:pl-10 m-0 p-6'>
      {windowSize.width < 768 ?
        <MobHeader />: 
        <div className='flex justify-between items-center'>
        <Link href="/" >
        <Image src={logo} alt='Logo' width={48} height={48} className='mr-10'/>
        </Link>
        <div className='md:bg-white/10 md:backdrop-blur-sm md:pt-[36px] md:pb-[36px] w-full h-full ml-10 pl-[87px] pr-10  ' >
        <Navigation />
        </div>
        </div>
      }
      </header>
    )
}