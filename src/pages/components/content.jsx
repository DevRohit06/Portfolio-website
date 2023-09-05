import { PropTypes } from "prop-types"
import PageHead from "./pageHead"
import Footer from "../../components/Footer"
import { ArrowCircleRight } from "@mui/icons-material"
export default function Content(props){

    return(
        <>
        <PageHead/>
        <section className="text-gray-400  body-font">
        <h1 className="mt-24 text-gray-300 text-5xl font-bold text-center font-sans">{props.title}</h1>
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg  overflow-hidden">
        <iframe alt="content" className="object-cover object-center w-full" src={props.url} height='550'></iframe>
      </div>
      <h1 className="text-2xl text-white  text-center font-bold pt-4">Built using </h1>
      <div className="mt-6 text-center flex flex-wrap gap-4 items-center justify-center">
        {props.used.map((item, index) => {
            return <span key={index} className="bg-yellow-100 items-center text-gray-800  font-medium mr-2 px-3 py-2 rounded ">{item}</span>
        })}
        
      </div>
      <div className="">
        
        <div className="mt-6 text-center ">
          <p className=" leading-relaxed text-lg mb-4">{props.description}</p>
          <br />
          <a
                href={props.url} target="_blank" rel="noreferrer"
                className=" bg-white bg-opacity-10 px-6 py-4 text-lg font-semibold text-gray-400 shadow-sm rounded-sm border border-gray-200 border-opacity-20"
              >
                Live Site <ArrowCircleRight/>
              </a>
             
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
        </>
    )
}
Content.propTypes = {
    used: PropTypes.any,
    title: PropTypes.any,
    url: PropTypes.any,
    description: PropTypes.any
}