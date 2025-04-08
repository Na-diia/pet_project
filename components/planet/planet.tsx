'use client';
import Image from "next/image";


import { PlanetProps } from "@/lib/types";


export default function Planet ({props}: PlanetProps) {

    const findImage = (path: string) => {
      
        const image = `/public/images/destination/image-${path}.png`;
        return image;
    };

    return (
        <div className="mt-6">
       {props.map((item, index) => {
        const img = findImage(item.name.toLocaleLowerCase());
        return (
        <div key={index}>    
       <Image src={img} alt="Planet photo" width={150} height={150}/>
       </div>)
       })}
        </div>
    )
}