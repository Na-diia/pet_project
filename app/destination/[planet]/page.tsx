import data from '../../../lib/data.json';
import Planet from '@/components/planet/planet';


export default function DestinationPage ({params}: {params: {planet: string}}) {

    const planetName = params.planet;

    const result = data.destinations.filter((item) => item.name.toLocaleLowerCase() === planetName);
   
    return (
        <main className="
        bg-[url(../public/images/destination/background-destination-mobile.jpg)] 
        md:bg-[url(../public/images/destination/background-destination-tablet.jpg)]
        xl:bg-[url(../public/images/destination/background-destination-desktop.jpg)] bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full p-6 md:p-10 xl:pl-[165px] xl:pr-[165px] xl:pb-12">
        <div className=''>
        <div className='pt-6 md:pt-0 w-full mt-[88px] xl:mt-[144px]'>
        <p className="font-barlow tracking-[3px] flex md:justify-start md:items-start text-base md:text-[20px]/10 xl:text-[28px] font-[400]  justify-center items-center">
            <span className="mr-6 text-gray-400">01</span>PICK YOUR DESTINATION
        </p>
        </div>
        <div className="xl:mt-6 flex md:justify-start md:items-start justify-center items-center flex-col">
        <Planet props={result}/>
        </div>
        </div>
        </main>
    )
};