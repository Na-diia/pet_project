'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { CrewProps } from "@/lib/types";



export default function MemberTeam ({team} : CrewProps) {

    const pathname = usePathname();

    return (
        <>
        {team.map((item) => 
        <div  key={item.id}>
        <div className="pt-10 pb-10 flex flex-col justify-center items-center mb-6">
                <h3 className=" font-bellefair text-lg md:text-2xl mb-2 md:mb-4 text-gray-400">{item.role}</h3>
                <h1 className="font-bellefair tracking-normal text-white text-2xl md:text-[40px] mb-6">{item.name}</h1>
                <p className="w-[512px] font-barlow_norm text-[16px] text-center text-[#D0D6F9]">{item.bio}</p>
        </div>
      <ul className="flex gap-[16px] justify-center items-center mb-[37px]">
        {pathname.includes('c-1') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px]"/>
        </li> :   <li>
            <Link href="/crew/c-1" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px]"/>
        </li>}

        {pathname.includes('c-2') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px]"/>
        </li> :   <li>
            <Link href="/crew/c-2" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px]"/>
        </li>}
        {pathname.includes('c-3') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px]"/>
        </li> :   <li>
            <Link href="/crew/c-3" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px]"/>
        </li>}

        {pathname.includes('c-4') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px]"/>
        </li> :   <li>
            <Link href="/crew/c-4" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px]"/>
        </li>}
           </ul>    
          <div className=" flex justify-center items-center">
            <Image src={item.images.png} alt={item.name} priority width={271} height={340} className="md:w-[446px]"/>
            </div> 
        </div>)}
        </>
    )
}