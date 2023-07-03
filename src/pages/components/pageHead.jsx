import { ArrowBackIosNew } from "@mui/icons-material"
export default function PageHead(){

return(
    <>
    <header className="m-6 mx-auto w-5/6">
        <nav className="">
            <a href="/" className=" mx-auto flex items-center justify-center rounded-lg p-2  text-gray-300">
                <ArrowBackIosNew sx={{fontSize: 20}} /> &nbsp;
                <h1  className="">  Back to Home </h1>
            </a>
            <hr className="bg-gray-400" />
        </nav>
    </header>
    </>
)

}