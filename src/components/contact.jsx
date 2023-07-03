import EmailIcon from '@mui/icons-material/Email';
import { Instagram } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
function handleForm(e){
  e.preventDefault();

  axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.post('https://formsubmit.co/ajax/technicalrohit06@gmail.com', {
    name: name,
    message: message,
    email: email,
})
    .then((response) =>{
       if(response.status === 200){
      toast.success('Message Sent Successfully', {style: {backgroundColor: '#303030',color: '#fff'}});
    }})
    .catch(error => console.log(error));
}
    return(
        <>
        <div><Toaster/></div>
        <section className="m-6 w-5/6 mx-auto">
        <h1 className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
          Contact
        </h1>
        <hr className="w-56 mx-auto my-8 opacity-25 border-gray-400" />
        <div className="text-center w-full">

      </div>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-transparent text-gray-400 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-200 mt-8">
              Hate forms? Send us an <a href='mailto:technicalrohit06@gmail.com' className=" text-yellow-400">email</a> instead.
            </div>
             <a href="mailto:technicalrohit06@gmail.com" className='mt-8 flex flex-row items-center'>
                <div  className='p-4 flex w-10 h-10 bg-gray-300 rounded-full bg-opacity-10 items-center justify-center '>
                <EmailIcon className='text-gray-300' sx={{fontSize: 16}} />
                </div>
                <h3 href='mailto:technicalrohit06@gmail.com' className="  pl-4 text-gray-300 lg:flex md:flex pointer-events-none"> technicalrohit06@gmail.com</h3>
                </a>
                <a href="https://www.instagram.com/rohitk.06" className='mt-2 flex flex-row items-center'>
                <div  className='p-4 flex w-10 h-10 bg-gray-300 rounded-full bg-opacity-10 items-center justify-center '>
                <Instagram className='text-gray-300' sx={{fontSize: 16}} />
                </div>
                <h3 href='https://www.instagram.com/rohitk.06' className="  pl-4 text-gray-300 lg:flex md:flex pointer-events-none"> rohitk.06</h3>
                </a>
                <a href="https://github.com/DevRohit06" className='mt-2 flex flex-row items-center'>
                <div  className='p-4 flex w-10 h-10 bg-gray-300 rounded-full bg-opacity-10 items-center justify-center '>
                <GitHub className='text-gray-300' sx={{fontSize: 16}} />
                </div>
                <h3 href='https://github.com/DevRohit06' className="  pl-4 text-gray-300 lg:flex md:flex pointer-events-none"> DevRohit06</h3>
                </a>
          </div>
          <div className="mt-8 text-center">
        
          </div>
        </div>
        <form method="POST" onSubmit={handleForm} id='form' className=""  >
          <div>
            <label htmlFor='name' className="uppercase text-sm text-gray-400 font-bold">Full Name</label>
            <input onChange={e => setName(e.target.value)} name='FullName' id='name' className="w-full border border-opacity-10 bg-transparent text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter Your Name" required/>
          </div>
          <div className="mt-8">
            <label htmlFor='EMail' className="uppercase text-sm text-gray-400 font-bold">Email</label>
            <input onChange={e => setEmail(e.target.value)} name='Email' id='email' className="w-full bg-transparent border border-opacity-5 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" placeholder="Email address" required/>
                <input name="_formsubmit_id" type="text" className='hidden'/>
                <input name="_redirect" type="hidden" id="name" value=""/>
          </div>
          <div className="mt-8">
            <label htmlFor='message' className="uppercase text-sm text-gray-400 font-bold">Message</label>
            <textarea onChange={e => setMessage(e.target.value)} name='Message' id='message'
              className="w-full h-32 bg-transparent border border-opacity-5 text-gray-400 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Enter Your Message" required></textarea>
          </div>
          <div className="mt-8">
            <button type='submit'
              className="uppercase text-sm font-bold tracking-wide bg-yellow-500 bg-opacity-50 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
        </section>
        </>
    )
}