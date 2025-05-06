import Button from "@/components/button/button";

export default function Home() {
  return (
    <main className=" bg-[url(../public/images/home/background-home-mobile.jpg)]
    md:bg-[url(../public/images/home/background-home-tablet.jpg)]
    xl:bg-[url(../public/images/home/background-home-desktop.jpg)]
    bg-cover bg-no-repeat flex items-center justify-center min-h-screen w-full p-6">
   <div className="xl:mt-[136px] md:pt-32 md:ml-[88px] xl:m-0 md:mr-[88px] md:pl-10 xl:pl-[141px] xl:pr-[141px] xl:pb-[104px] md:pr-10 md:pb-[194px] md:mt-24 mt-20 flex flex-col xl:flex-row justify-center xl:items-end xl:justify-between items-center">
    <div className="flex flex-col justify-center xl:justify-start xl:items-start items-center">
    <p className="text-[#D0D6F9] md:text-[28px] font-barlow">SO, YOU WANT TO TRAVEL TO</p>
   <h1 className=" text-8xl md:text-[144px]  text-white mt-6 font-bellefair">SPACE</h1>
   <p className="xl:h-[96px] xl:w-[540px] xl:text-[18px] md:w-[512px] text-[#D0D6F9] mt-12 text-lg text-center xl:text-start font-barlow_norm">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
   </div>
   <div className="xl:ml-[298px]">
   <Button />
   </div>
   </div>
    </main>
  );
}
