
import '../index.css'
import Content from "./components/content"
export default function Blog() {
    const Used = ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    return(
        <>
        <Content title="DevBlog" url='https://blog-trohit06.vercel.app' description='This is a Blogging website made for technology lovers,' used={Used} />
        </>
    )
}