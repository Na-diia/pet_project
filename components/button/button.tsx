'use client';
import { useRouter } from "next/navigation";

export default function Button () {
    const router = useRouter();

    return (
        <div className="btn-hover hover:btn-circle duration-300">
        <button type="button"  
        onClick={() => router.push('/destination')}
        className="font-bellefair absolute top-[20%] md:top-[15%] left-[20%] md:left-[15%] z-0 cursor-pointer w-36 md:w-[272px] h-36 md:h-[272px] bg-white  rounded-[50%] text-lg md:text-[32px]">EXPLORE</button>
        </div>
    )
}