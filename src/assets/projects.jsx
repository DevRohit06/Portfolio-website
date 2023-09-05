import ras from "./images/ras.png";
import joke from "./images/joke.png";
import lofi from "./images/lofi.png";
import blog from "./images/blog.png";
import docAid from "./images/docAid.png";
const data = [
    {
        name: "DocAid",
        type: "Website",
        url: "https://doc-aid.vercel.app/",
        image: docAid,
        slug: "docaid",
        description: "Website template for Health related businesses",
        tech: ['HTML', 'Javascript', 'CSS', 'Tailwind css', 'ReactJS']
    },
    {
        name: "DevBlogs",
        type: "WebApp",
        url: "https://www.devblogs.xyz/",
        image: blog,
        slug: "devblogs",
        description: "This is a Blogging website made for technology lovers.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    },
    {
        name: "Ras Production",
        type: "Website",
        url: "https://rasproduction.vercel.app/",
        image: ras,
        slug: "ras",
        description: "This is an Portfolio website for videography businesses made using HTML, Javascript, Css and Tailwind css it practices modern ui with dark theme ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css']
    },
    {
        name: "Joke Generator",
        type: "WebApp",
        url: "https://jokes-generator-with-api.vercel.app/",
        image: joke,
        slug: "joke",
        description: "The website which generates joke with multi topics such as anime, programming, etc.",
        tech: ['React', 'Javascript', 'Css', 'Tailwind css', 'express', 'nodejs']
    },

    {
        name: "Lofi Beats",
        type: "Website",
        url: "https://lofibeats-3oo4q8gbg-lofi.vercel.app/",
        image: lofi,
        slug: "lofibeats",
        description: "Website that was built for Discord music bot named lofi beats built using plain html javascript and tailwind css",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css']
    },
]

export function getData(){
    return data;
}