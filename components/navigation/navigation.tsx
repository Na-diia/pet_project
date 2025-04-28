import Link from "next/link"
import { usePathname } from "next/navigation";
import useWindowSize from "@/lib/useWindowSize";

export function Navigation () {
    const pathname = usePathname();
    const windowSize = useWindowSize()

    return (
        <nav className="">
           <ul className='ml-8 mt-4 flex flex-col gap-8 md:justify-center xl:justify-end md:items-center md:h-full md:flex-row md:gap-12 md:ml-0 md:mt-0'>
                <li className='text-white mr-3 md:mr-0 font-bold md:relative'>00
                    <Link href='/' className='ml-3 font-thin'>HOME</Link>
                    {pathname === '/'  ? 
                    <span className='absolute right-[10px]  font-bold md:left-0 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "_________"}</span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative md:mr-0 font-bold'>01
                    <Link href='/destination' className='ml-3 font-thin'>DESTINATION</Link>
                    {pathname.includes('/destination') ?
                    <span className='absolute right-[10px] font-bold md:left-1 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "________________"}
                    </span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative md:mr-0 font-bold'>02
                    <Link href='/crew' className='ml-3 font-thin'>CREW</Link>
                    {pathname === '/crew' ?
                    <span className='absolute right-[10px] font-bold md:left-0 md:right-auto md:top-10'>
                        {windowSize.width < 768 ? "|" : "__________"}
                    </span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3 md:relative md:mr-0 font-bold'>03
                    <Link href='/technology' className='ml-3 font-thin'>TECHNOLOGY</Link>
                    {pathname === '/technology' ?
                    <span className='absolute right-[10px] font-bold md:left-0 md:right-auto md:top-10'>
                       {windowSize.width < 768 ? "|" : "________________"}
                    </span>
                    : <></>
                    }
                </li>
            </ul>
        </nav>
    )
};