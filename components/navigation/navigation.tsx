import Link from "next/link"
import { usePathname } from "next/navigation";
import useWindowSize from "@/lib/useWindowSize";

export function Navigation () {
    const pathname = usePathname();
    const windowSize = useWindowSize()

    return (
        <nav className="">
           <ul className='font-barlow ml-8 mt-4 flex flex-col gap-8 md:justify-end md:items-center md:h-full md:flex-row md:gap-0 md:ml-0 md:mt-0'>
                <li className='text-white mr-3 font-bold md:relative md:mr-12'>00
                    <Link href='/' className='tracking-[2px] text-[#fff]/75 ml-3 font-barlow font-thin'>HOME</Link>
                    {pathname === '/'  ? 
                    <span className='absolute right-[10px]  font-bold md:left-0 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "___________"}</span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative font-bold md:mr-12'>01
                    <Link href='/destination' className='tracking-[2px] ml-3 font-thin text-[#fff]/75 font-barlow'>DESTINATION</Link>
                    {pathname.includes('/destination') ?
                    <span className='absolute right-[10px] font-bold md:left-1 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "__________________"}
                    </span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative font-bold md:mr-12'>02
                    <Link href='/crew' className='tracking-[2px] ml-3 font-thin text-[#fff]/75 font-barlow'>CREW</Link>
                    {pathname === '/crew' ?
                    <span className='absolute right-[10px] font-bold md:left-0 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "__________"}
                    </span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative md:mr-0 font-bold'>03
                    <Link href='/technology' className='tracking-[2px] ml-3 font-thin text-[#fff]/75 font-barlow'>TECHNOLOGY</Link>
                    {pathname === '/technology' ?
                    <span className='absolute right-[10px] font-bold md:left-0 md:right-auto md:top-10'>
                       {windowSize.width < 768 ? "|" : "__________________"}
                    </span>
                    : <></>
                    }
                </li>
            </ul>
        </nav>
    )
};