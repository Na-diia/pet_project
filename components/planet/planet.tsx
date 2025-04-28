'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useWindowSize from "@/lib/useWindowSize";
import { PlanetProps } from "@/lib/types";

export default function Planet ({props}: PlanetProps) {

    const pathname = usePathname();
    const windowSize = useWindowSize();

    return (
        <div className="mt-6">
       {props.map((item, index) => {
        return (
        <div key={index}>
        <div className="mt-[50.5px] md:mt-[42px] mb-[58.5px] md:mb-[86px] flex justify-center items-center">    
       <Image src={item.images.png} alt={item.name} width={150} height={150} className="md:w-[300px] md:h-[300px]"/>
       </div>
       <ul className="flex gap-4 items-center justify-center text-[16px] text-[#D0D6F9] ">
        <li className="relative"><Link href='/destination' className="hover:text-white active:text-white selection:text-white">MOON</Link>
        {pathname.includes('moon')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "_______" : "_______"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/mars' className="hover:text-white active:text-white">MARS</Link>
        {pathname.includes('mars')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "______" : "______"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/europa' className="hover:text-white active:text-white">EUROPA</Link>
        {pathname.includes('europa')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "________" : "________"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/titan' className="hover:text-white active:text-white">TITAN</Link>
        {pathname.includes('titan')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "______" : "______"}</span>
                    : <></>
        }
        </li>
       </ul>
       <h1 className="mt-8 flex justify-center items-center text-[56px] md:text-[80px] mb-6 md:p-0">{item.name}</h1>
       <p className="mb-6 text-center md:w-[514px] flex justify-center items-center text-base text-[#D0D6F9]">{item.description}</p>
       <hr className="h-[1px] border-[#979797] mb-6"/>
       <div className="md:flex md:justify-center md:items-center md:gap-6">
       <div className="flex flex-col justify-center items-center md:w-[245px]">
        <h3 className="mb-3 text-[14px] text-[#D0D6F9]">AVG. DISTANCE</h3>
        <h2 className="text-[28px] text-white">{item.distance}</h2>
       </div>
       <div className="flex flex-col justify-center items-center mt-6 md:mt-0 md:w-[245px]">
        <h3 className="mb-3 text-[14px] text-[#D0D6F9]">EST. TRAVEL TIME</h3>
        <h2  className="text-[28px] text-white">{item.travel}</h2>
       </div>
       </div>
       </div>)
       })}
        </div>
    )
}