'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CrewProps } from "@/lib/types";



export default function MemberTeam ({team} : CrewProps) {

    const pathname = usePathname();
    console.log(pathname)

    return (
        <>
        {team.map((item) => 
        <div  key={item.id}>
        <div className="pt-10 pb-10 flex flex-col justify-center items-center mb-6">
                <h3 className=" font-bellefair text-lg mb-2 text-gray-400">{item.role}</h3>
                <h1 className="font-bellefair tracking-normal text-white text-2xl mb-6">{item.name}</h1>
                <p className="font-barlow_norm text-[15px] text-center text-[#D0D6F9]">{item.bio}</p>
        </div>
      <ul className="flex gap-[16px] justify-center items-center">
        <li className="rounded-[50%] bg-white w-[10px] h-[10px]">
        <Link href={`${pathname}`} color="#fff"/>
        </li>
     
        <li className="rounded-[50%] bg-[#979797] w-[10px] h-[10px]">
            <Link href="/crew/"/>
        </li>

        <li className="rounded-[50%] bg-[#979797] w-[10px] h-[10px]"></li>

        <li className="rounded-[50%] bg-[#979797] w-[10px] h-[10px]"></li>
      </ul>
                
        </div>)}
        </>
    )
}