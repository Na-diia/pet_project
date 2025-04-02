'use client';
import { useRouter } from "next/navigation";

export default function Button () {
    const router = useRouter();

    return (
        <div className="btn-hover hover:btn-circle duration-300">
        <button type="button"  
        onClick={() => router.push('/destination')}
        className="absolute top-[20%] left-[20%] z-0 cursor-pointer w-36 h-36 bg-white  rounded-[50%] text-lg">EXPLORE</button>
        </div>
    )
}