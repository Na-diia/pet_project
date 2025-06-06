'use client';

import TechnologyItem from '@/components/technologyItem/technologyItem';

export default function ItemPage ({params}: {params: {item: number}}) {

    const toggleParams = (page: number) => {
      
        const result = params.item === page;
        return page;
    };

    return (
          <div className="bg-[url(../public/images/technology/background-technology-mobile.jpg)]
        md:bg-[url(../public/images/technology/background-technology-tablet.jpg)]  
        xl:bg-[url(../public/images/technology/background-technology-desktop.jpg)] 
        bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full pt-8">
            <div className='mt-[56px] pt-6 mb-[88px]'>  
        <p className="font-barlow tracking-[3px] flex md:justify-start md:items-start text-base md:text-[20px]/10 xl:text-[28px] font-[400]  justify-center items-center">
            <span className="mr-6 text-gray-400">03</span>SPACE LAUNCH 101
        </p>
        </div> 
        <TechnologyItem />
        </div>
    )

}