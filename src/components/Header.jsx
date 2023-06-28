import EmailIcon from '@mui/icons-material/Email';
import { Instagram } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
export default function Header(){
    return(
        <>
        <section className="top-5 z-50 mx-auto m-6 w-5/6">
            <nav className="flex items-center justify-between">
                <a href="mailto:technicalrohit06@gmail.com" className=' flex flex-row items-center justify-center'>
                <div  className='p-4 flex w-10 h-10 bg-gray-300 rounded-full bg-opacity-10 items-center justify-center '>
                <EmailIcon className='text-gray-300' sx={{fontSize: 16}} />
                </div>
                <h3 href='mailto:technicalrohit06@gmail.com' className=" hidden pl-4 text-gray-300 lg:flex md:flex pointer-events-none"> technicalrohit06@gmail.com</h3>
                </a>
                
                <h3>
                    <div className="flex flex-1 gap-3 text-gray-300">
                       <a href='https://instagram.com/rohitk.06' className='flex flex-row items-center justify-center'>
                        <Instagram className='text-gray-300 mr-2' sx={{fontSize: 20}}/>
                       <h2 href='https://instagram.com/rohitk.06' className="text-gray-300 hidden lg:flex md:flex">Instagram</h2>
                        </a> /
                       <a href='https://github.com/DevRohit06' className='flex flex-row items-center justify-center'>
                          <GitHub className='text-gray-300 mr-2' sx={{fontSize: 20}}/>
                       <h2 className="text-gray-300 hidden lg:flex md:flex">Github</h2>
                        </a> /
                        <div className='flex flex-row items-center justify-center'>
                            <LinkedIn className='text-gray-300 mr-2' sx={{fontSize: 20}}/>
                        <a className="text-gray-300 hidden lg:flex md:flex">Linkedin</a> 
                        </div>
                    </div>
                </h3>
            </nav>
            <hr className="text-gray-300 mt-4 opacity-50" />
        </section>
        </>
    )
}