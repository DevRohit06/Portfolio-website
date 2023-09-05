import { getData } from "../assets/projects";
const data = getData();
export default function Project() {
  return (
    <>
      <section className="text-gray-300 body-font m-6 w-5/6 mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
            Projects
          </h1>
          <hr className="w-56 mx-auto my-8 opacity-25 border-gray-300" />
          <p className="text-gray-400 font-medium text-lg text-center mb-16">
            Here are the projects that i recently worked recently and are open
            sourced
          </p>
          <div className="max-w-screen grid grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 ">
            {data &&
              data.map((item, index) => {
                return (
                    <a key={index}
                      href={`/projects/${item.slug}`}
                      className="relative mx-auto max-w-md overflow-hidden rounded-lg shadow"
                    >
                      <div>
                        <img
                          src={item.image}
                          className=" object-cover bg-cover w-full h-full rounded-xl"
                          width={1280}
                          height={800}
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                        <p className="mb-1  text-white text-center text-opacity-80">
                          {item.type}
                        </p>
                        <h3 className="text-2xl text-center font-medium text-white">
                          {item.name}
                        </h3>
                      </div>
                    </a>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
