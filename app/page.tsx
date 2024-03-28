import HeaderCanvasBack from '../components/headerBack';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex container mx-auto ">
      <HeaderCanvasBack />
      <div className="h-full w-full bg-black bg-clip-padding backdrop-filter backdrop-blur-3xl absolute bg-opacity-50 left-0 top-0 right-0 bottom-0"></div>
      <div className="self-center z-10 p-3">
        <div className="lg:text-8xl text-4xl  text-white font-bold">
          Hey, I&apos;m Jay Prakash Pathak
        </div>
        <div className="text-white/85 lg:text-3xl text-xl mt-3">
          I&apos;m a full stack developer
        </div>
        <div className="mt-3 text-white/50">
          As a software developer i create softwares that makes peoples lives
          easier and make there life better.
        </div>
        <button className="px-3 py-2 bg-white/50 mt-6 rounded-md text-xl">
          Know more
        </button>
      </div>
    </div>
  );
}
