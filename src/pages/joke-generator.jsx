import Content from "./components/content";

export default function Joke(){
    const Used = ['React', 'Javascript', 'Css', 'Tailwind css', 'express', 'nodejs'];
    return(
        <>
        <Content title='Joke Generator' url='https://jokes-generator-with-api.vercel.app/' description='The website which generates joke with multi topics such as anime, programming, etc. It follows all modern UI/UX.' used={Used} />
        </>
    )
}