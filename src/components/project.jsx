import ras from "../assets/images/ras.png";
import joke from "../assets/images/joke.png";
import lofi from "../assets/images/lofi.png";
export default function Project() {
  return (
    <>
      <section className="text-gray-300 body-font m-6 w-5/6 mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
            Projects
          </h1>
          <hr className="w-56 mx-auto my-8 opacity-25 border-gray-300" />
          <p className="text-gray-400 font-medium text-lg text-center mb-16">Here are the projects that i recently worked recently and are open sourced</p>
          <div className="max-w-screen grid grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 ">
            <a  href='/ras' className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div >
                <img
                  src={ras}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                <p className="mb-1 text-sm text-white text-opacity-80">
                  Website 
                </p>
                <h3 className="text-xl font-medium text-white">
                  Ras Production
                </h3>

              </div>
            </a>
            <a href="/joke-generator" className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img
                  src={joke}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                <p className="mb-1 text-sm text-white text-opacity-80">
                  Web App
                </p>
                <h3 className="text-xl font-medium text-white">
                  Jokes generator
                </h3>

              </div>
            </a>
            <a href="/lofibeats" className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <div>
                <img
                  src={lofi}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
              <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                <p className="mb-1 text-sm text-white text-opacity-80">
                  Website 
                </p>
                <h3 className="text-xl font-medium text-white">
                  Lofi Beats 
                </h3>

              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}