import data from '../../../lib/data.json';
import MemberTeam from '@/components/memberTeam/memberTeam';

export default function TeamPage ({params}: {params:{team: string}}) {

    const crewName = params.team;

    const result = data.crew.filter((item) => item.id.toLocaleLowerCase() === crewName);

    return (
        <div className="
        bg-[url(../public/images/crew/background-crew-mobile.jpg)] 
        md:bg-[url(../public/images/crew/background-crew-tablet.jpg)]
        xl:bg-[url(../public/images/crew/background-crew-desktop.jpg)] bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full p-8 md:pr-10 md:pl-10 md:pt-10 md:pb-0">
        <div className='pt-6 md:pt-10 pb-6 w-full mt-[56px] xl:mt-[144px]'>
        <p className="font-barlow tracking-[3px] flex md:justify-start md:items-start text-base md:text-[20px]/10 xl:text-[28px] font-[400]  justify-center items-center">
            <span className="mr-6 text-gray-400">02</span>MEET YOUR CREW
        </p>
        </div>
        <MemberTeam team={result} /> 
        </div>
    )
}