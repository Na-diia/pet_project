import data from '../../../lib/data.json';
import Planet from '@/components/planet/planet';


export default function DestinationPage ({params}: {params: {planet: string}}) {

    const planetName = params.planet;

    const result = data.destinations.filter((item) => item.name.toLocaleLowerCase() === planetName);
   
    return (
        <main className="
        bg-[url(../public/images/destination/background-destination-mobile.jpg)] 
        md:bg-[url(../public/images/destination/background-destination-tablet.jpg)]
        xl:bg-[url(../public/images/destination/background-destination-desktop.jpg)] bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full p-6">
        <div className="mt-[88px] pt-6">
        <p className="text-base font-bold">
            <span className="mr-6 text-gray-400">01</span>PICK YOUR DESTINATION
        </p>
        <Planet props={result}/>
        </div>
        </main>
    )
};