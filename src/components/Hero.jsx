import face from "../assets/smiling.png";
import { ArrowCircleRight } from "@mui/icons-material";
export default function Hero() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 mb-56">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="animate-roam relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffdf80] to-[#89fc91] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-4">
          <div className="w-40 text-center mx-auto">
            <img className="" src={face} alt="" />
          </div>
          <div className="text-center">
            <h1 className=" font-light tracking-tight text-gray-300">
              Hi, I&apos;m Rohit
            </h1>
            <p className="animate-text mt-6 text-4xl leading-25 font-bold text-gray-300 text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161] sm:text-3xl md:text-6xl">
              Building digital products, brands, and experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" bg-white bg-opacity-10 px-6 py-4 text-lg font-semibold text-gray-400 shadow-sm rounded-sm border border-gray-200 border-opacity-20"
              >
                Learn more <ArrowCircleRight/>
              </a>
             
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="animate-roam1 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e6ff80] to-[#62fa8d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
