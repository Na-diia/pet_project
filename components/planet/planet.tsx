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
        <div key={index} className="xl:flex xl:pt-[127px]">
        <div className="xl:w-[540px] mt-[50.5px] md:mt-[42px] xl:mt-0 mb-[58.5px] md:mb-[86px] flex justify-center items-center">    
       <Image src={item.images.png} alt={item.name} width={150} height={150} className="md:w-[300px] md:h-[300px] xl:w-[480px] xl:h-[480px]"/>
       </div>
       <div className="xl:w-[540px] xl:pt-[6px] xl:pr-[47px] xl:pl-[47px] xl:flex xl:flex-col xl:justify-start">
       <ul className="font-barlow flex gap-4 xl:gap-8 items-center justify-center xl:justify-start text-[16px] text-[#D0D6F9] ">
        <li className="relative"><Link href='/destination' className="hover:text-white active:text-white selection:text-white tracking-[2px]">MOON</Link>
        {pathname.includes('moon')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "_______" : "______"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/mars' className="tracking-[2px] hover:text-white active:text-white">MARS</Link>
        {pathname.includes('mars')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "______" : "______"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/europa' className="tracking-[2px] hover:text-white active:text-white">EUROPA</Link>
        {pathname.includes('europa')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "________" : "_________"}</span>
                    : <></>
        }
        </li>
        <li className="relative"><Link href='/destination/titan' className="tracking-[2px] hover:text-white active:text-white">TITAN</Link>
        {pathname.includes('titan')  ? 
                <span className='absolute top-[15px] left-0 font-bold text-white'>
                    {windowSize.width < 768 ? "______" : "______"}</span>
                    : <></>
        }
        </li>
       </ul>
       <h1 className="font-bellefair mt-8 xl:mt-10 xl:mb-6 flex justify-center xl:justify-start items-center text-[56px] xl:text-[96px] md:text-[80px] mb-6 md:p-0">{item.name}</h1>
       <p className="font-barlow_norm mb-6 xl:mb-10 text-center xl:text-start flex justify-center xl:justify-start items-center text-base xl:text-lg text-[#D0D6F9] md:pr-[87px] md:pl-[87px] xl:pl-0 xl:pr-0">{item.description}</p>
       <hr className="h-[1px] border-[#979797] mb-6 xl:mb-10 md:mr-[87px] xl:mr-0 md:ml-[87px] xl:ml-0"/>
       <div className="md:flex md:justify-center xl:justify-start md:items-center md:gap-6">
       <div className="flex flex-col justify-center xl:justify-start xl:items-start items-center md:w-[245px]">
        <h3 className="font-barlow tracking-[2px] mb-3 text-[14px] text-[#D0D6F9]">AVG. DISTANCE</h3>
        <h2 className="font-bellefair text-[28px] text-white">{item.distance}</h2>
       </div>
       <div className="flex flex-col justify-center items-center  xl:justify-start xl:items-start mt-6 md:mt-0 md:w-[245px]">
        <h3 className="font-barlow tracking-[2px] mb-3 text-[14px] text-[#D0D6F9]">EST. TRAVEL TIME</h3>
        <h2  className="font-bellefair text-[28px] text-white">{item.travel}</h2>
       </div>
       </div>
       </div>
       </div>)
       })}
        </div>
    )
}