import { useState } from "react";
export default function IndexNav() {
  const [hide, isHide] = useState(false);
  return (
    <>
      <div id="hamburger" className=" relative z-50">
        <div className="">
          <div className="fixed right-[-10px] top-[50%] rotate-[270deg]">
            <div className="">
              <div className="w-full">
                <button 
                onClick={() => {isHide(!hide)}}
                className="bg-primary  font-bold px-4 py-1 rounded-t-xl cursor-pointer">
                  
                  {
                    hide ?
                    <svg className="h-4" height="1em"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
                    :
                    <svg className="h-4" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></g></svg>
                    
                  }
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      {
        hide ?
        <div className="overflow-y-none">
        <div className="-z-10 top-[0px] left-[0px]  fixed bg-primary  h-[100%] custom w-[100%]">
          <div className="h-[100%] custom w-[100%] flex items-center justify-center">
            <ul className="flex flex-col text-4xl font-bold text-center space-y-10">
              <a onClick={() => isHide(false)} ariaLabel="Home" href="/">Home</a>
              <a onClick={() => isHide(false)} ariaLabel="projects" href="/projects">Projects</a>
              <a onClick={() => isHide(false)} ariaLabel="about" href="/#about">About</a>
              <a onClick={() => isHide(false)} ariaLabel="blogs" href="/blog">Blogs</a>
              <a onClick={() => isHide(false)} ariaLabel="contact" href="/#contact">Contact</a>
              <a>Download CV</a>
            </ul>
          </div>
        </div>
      </div>
      : null
      }
      </div>
    </>
  );
}
