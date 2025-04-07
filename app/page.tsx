import Button from "@/components/button/button";

export default function Home() {
  return (
    <main className=" bg-[url(../public/images/home/background-home-mobile.jpg)]
    md:bg-[url(../public/images/home/background-home-tablet.jpg)]
    xl:bg-[url(../public/images/home/background-home-desktop.jpg)]
    bg-cover bg-no-repeat items-center justify-center min-h-screen w-full p-6">
   <div className="xl:mt-[136px] md:pt-32 md:ml-[88px] md:mr-[88px] md:pl-10 md:pr-10 md:pb-[194px] md:mt-24 mt-20 flex flex-col justify-center items-center">
    <p className="text-[#D0D6F9] md:text-[28px]">SO, YOU WANT TO TRAVEL TO</p>
   <h1 className=" text-8xl md:text-[144px]  text-white mt-6">SPACE</h1>
   <p className=" w-[512px] text-[#D0D6F9] mt-12 text-lg text-center">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
   <Button />
   </div>
    </main>
  );
}
