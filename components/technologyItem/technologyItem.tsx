'use client';
import Image from "next/image";
import { useState } from "react";

import { TecnologyProps } from "@/lib/types";
import Pagination from "../pagination/pagination";
import data from '../../lib/data.json';

interface Props {
    getParams: (page: number) => number
}

export default function TechnologyItem () {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePagination = (page: number) => {
        setCurrentPage(page);
    };

    const filteredData = data.technology.filter((item) => item.id === currentPage)

    return (
        <>
        {filteredData.map((techno) => (
            <div key={techno.id} className="w-[375px] h-[258px]">
                <Image src={techno.images.portrait} alt={techno.name} width={375} height={258} className="w-full h-full mb-8"/>
            <Pagination perPage={1} length={data.technology.length} handlePagination={handlePagination}/>
            </div>
        ))}
        </>
    )
}