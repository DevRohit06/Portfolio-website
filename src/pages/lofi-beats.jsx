import Content from "./components/content"
export default function LofiBeats() {
    
    const Used = ['HTML', 'Javascript', 'Css', 'Tailwind css']
    return(
        <>
        <Content title="Lofi Beats  " url='https://lofibeats.tk' description='Website that was built for Discord music bot named lofi beats built using plain html javascript and tailwind css' used={Used} />
        </>
    )
}