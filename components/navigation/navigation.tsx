import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation () {
    const pathname = usePathname();

    return (
        <nav>
           <ul className='ml-8 mt-4 flex flex-col gap-8'>
                <li className='text-white mr-3'>00
                    <Link href='/' className='ml-3'>HOME</Link>
                    {pathname === '/' ?
                    <span className='absolute right-[10px] font-bold'>|</span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3'>01
                    <Link href='/destination' className='ml-3'>DESTINATION</Link>
                    {pathname === '/destination' ?
                    <span className='absolute right-[10px] font-bold'>|</span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3'>02
                    <Link href='/crew' className='ml-3'>CREW</Link>
                    {pathname === '/crew' ?
                    <span className='absolute right-[10px] font-bold'>|</span>
                    : <></>
                    }
                </li>
                <li className='text-white mr-3'>03
                    <Link href='/technology' className='ml-3'>TECHNOLOGY</Link>
                    {pathname === '/technology' ?
                    <span className='absolute right-[10px] font-bold'>|</span>
                    : <></>
                    }
                </li>
            </ul>
        </nav>
    )
};