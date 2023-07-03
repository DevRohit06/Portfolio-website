
import '../index.css'
import Content from "./components/content"
export default function Ras() {
    const Used = ['HTML', 'Javascript', 'Css', 'Tailwind css']
    return(
        <>
        <Content title="Videography Website - Portfolio" url='https://rasproduction.vercel.app' description='This is an Portfolio website for videography businesses made using HTML, Javascript, Css and Tailwind css it practices modern ui with dark theme ' used={Used} />
        </>
    )
}