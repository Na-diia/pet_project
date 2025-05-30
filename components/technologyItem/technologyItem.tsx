import Image from "next/image";

import { TecnologyProps } from "@/lib/types";

export default function TechnologyItem ({item}: TecnologyProps) {

    return (
        <>
        {item.map((tchlg) => (
            <div key={tchlg.id} className="w-[375px] h-[258px]">
                <Image src={tchlg.images.landscape} alt={tchlg.name} width={375} height={258} className="w-full h-full mb-8"/>

            </div>
        ))}
        </>
    )
}