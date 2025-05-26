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
        <div  key={item.id} className="xl:flex ">
            <div className="xl:mr-8">
        <div className="xl:w-[539px] xl:h-[631px] pt-10 pb-10 xl:p-0 flex flex-col justify-center xl:justify-center items-center xl:items-start mb-6 xl:mb-10 ">
                <h3 className=" font-bellefair text-lg md:text-2xl  xl:text-[32px] mb-2 md:mb-4 xl:mb-8 text-gray-400">{item.role}</h3>
                <h1 className="whitespace-nowrap font-bellefair tracking-normal h-auto text-white text-2xl md:text-[40px] xl:text-[56px] mb-6 xl:mb-8">{item.name}</h1>
                <p className="md:w-[512px] font-barlow_norm text-[16px] xl:text-lg text-center xl:text-start text-[#D0D6F9]">{item.bio}</p>
        </div>
      <ul className="flex gap-[16px] xl:gap-10 justify-center xl:justify-start  items-center xl:items-start mb-[37px] xl:mb-[48px]">
        {pathname.includes('c-1') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] xl:w-4 h-[10px] xl:h-4"/>
        </li> :   <li>
            <Link href="/crew/c-1" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li>}

        {pathname.includes('c-2') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li> :   <li>
            <Link href="/crew/c-2" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li>}
        {pathname.includes('c-3') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li> :   <li>
            <Link href="/crew/c-3" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li>}

        {pathname.includes('c-4') ?  <li>
        <Link href={`${pathname}`} color="#fff" className="flex rounded-[50%] bg-white w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li> :   <li>
            <Link href="/crew/c-4" className="flex rounded-[50%] bg-[#979797] w-[10px] h-[10px] xl:w-4 xl:h-4"/>
        </li>}
           </ul>  
           </div>  
          <div className=" flex justify-center items-center xl:h-[676px] xl:mt-[30px] xl:mb-[30px]">
            <Image src={item.images.png} alt={item.name} priority width={271} height={340} className="md:w-[446px] xl:w-[540px] xl:h-full "/>
            </div> 
        </div>)}
        </>
    )
}