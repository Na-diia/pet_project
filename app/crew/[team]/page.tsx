import data from '../../../lib/data.json';

export default function TeamPage ({params}: {params:{crew: string}}) {

    const crewName = params.crew;

    const result = data.crew.filter((item) => item.name.toLocaleLowerCase() === crewName);

    return (
        <div className="
        bg-[url(../public/images/crew/background-crew-mobile.jpg)] 
        md:bg-[url(../public/images/crew/background-crew-tablet.jpg)]
        xl:bg-[url(../public/images/crew/background-crew-desktop.jpg)] bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full p-8">
        
        
        
        </div>
    )
}