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
     <header className='absolute top-0 w-full h-20 md:pt-0 md:h-24  md:pb-6 xl:pl-16  md:pl-10 m-0 p-6 md:pr-0'>
      {windowSize.width < 768 ?
        <MobHeader />: 
        <div className='flex justify-between items-center'>
        <Link href="/" className='xl:mt-10'>
        <Image src={logo} alt='Logo' width={40} height={40} className='mr-10 md:mr-0 xl:mr-16 md:w-12'/>
        </Link>
        {windowSize.width > 1279 ? 
        <hr className='absolute z-20 right-[694px] top-[87.5px] xl:w-[480px] 2xl:w-[680px] h-[1px] bg-[#979797] border-0 rounded-sm '/> 
        : <></>}
        <div className=' md:bg-white/10 md:backdrop-blur-sm md:pt-[36px] xl:mt-10  md:pb-[36px] h-full xl:max-w-fit xl:pl-[150px] pl-[87px] pr-10  ' >
        <Navigation />
        </div>
        </div>
      }
      </header>
    )
}