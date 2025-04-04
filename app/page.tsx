import Button from "@/components/button/button";

export default function Home() {
  return (
    <main className=" bg-[url(../public/images/home/background-home-mobile.jpg)]
    md:bg-[url(../public/images/home/background-home-tablet.jpg)]  bg-cover bg-no-repeat items-center justify-items-center min-h-screen w-full p-6">
   <div className=" mt-20 flex flex-col justify-center items-center">
    <p className="text-white">SO, YOU WANT TO TRAVEL TO</p>
   <h1 className="text-8xl  text-white mt-6">SPACE</h1>
   <p className="text-[#D0D6F9] mt-12 text-lg text-center">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
   <Button />
   </div>
    </main>
  );
}
