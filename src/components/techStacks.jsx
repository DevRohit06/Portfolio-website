import { ArrowCircleRight } from "@mui/icons-material";
export default function Aboutme() {
  return (
    <>
    <br id="about" />
      <section  className="w-5/6 mx-auto m-6">
        <h1 className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
          About Me
        </h1>
        <hr className="w-56 mx-auto my-8 opacity-25 border-gray-300" />
        <div className="gap-8 py-8 px-4 mx-auto  xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Get to know me!
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              I&apos;m a <b className="font-bold">FullStack Web Developer</b>{" "}
              building the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the Projects section.
              <br /> <br />I also like sharing content related to the stuff that
              I have learned over the years in Web Development so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my{" "}
              <a href="" className="text-yellow-300 font-medium">
                Linkedin
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
              <br /> <br />
              I&apos;m open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don&apos;t hesitate to contact me.
            </p>
            <div className="mt-10 flex items-center  gap-x-6">
              <a
                href="#"
                className=" bg-transparent bg-opacity-10 px-6 py-4 text-lg font-semibold text-gray-400 shadow-sm rounded-sm border border-gray-200 border-opacity-20"
              >
               Contact Now <ArrowCircleRight />
              </a>
            </div>
          </div>
          <section className="py-10">
            <div className="container p-2 mx-auto space-y-6  lg:p-8 lg:space-y-8 ">
              <h2 className="text-gray-300 text-center text-3xl font-bold mt-4 md:mt-0">
                My Skills
              </h2>
              <div className="flex flex-wrap items-center  justify-center lg:justify-between lg:grid lg:grid-cols-4 lg:gap-6">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400"
                >
                  <title>CSS 3</title>
                  <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                  <path
                    d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                    fill="white"
                  />
                </svg>

                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400"
                >
                  <title>Html 5</title>
                  <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                  <path
                    d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                    fill="white"
                  />
                </svg>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400"
                >
                  <title>Javascript</title>
                  <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
                  <path
                    d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                    fill="#3E3E3E"
                  />
                  <path
                    d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                    fill="#3E3E3E"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-label="React"
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-blue-400"
                >
                  <title>React</title>
                  <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
                </svg>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-red-600"
                >
                  <title>Astro</title>
                  <path d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z" />
                </svg>
                <img
                  className="w-18 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
                  src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                  alt="Node JS"
                  title="Nodejs"
                />
                <img
                  className="w-12 h-8 mx-10 my-6 fill-current md:mx-12 lg:m-0"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                  alt="Php"
                  title="php"
                />
                <img
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
                  src="https://pngimg.com/uploads/mysql/mysql_PNG11.png"
                  alt="mysql"
                  title="mysql"
                />
                <img
                  className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
                  src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
                  alt="Flutter"
                  title="Flutter"
                />
                <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png" alt="Tailwind Css" title="Tailwind css" />

              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}