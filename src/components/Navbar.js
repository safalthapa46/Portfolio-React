import React, { useState } from 'react'
import Logo from '../assets/safal.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] bg-[#0a192f] text-gray-300 flex justify-between items-center px-4'>
            <div>
                <img src={Logo} alt="/" style={{ width: '70px' }} />
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div
                onClick={handleClick}
                className='md:hidden z-10'
            >{!nav ? <FaBars /> : <FaTimes />}
            </div>


            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center '}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skill
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex items-center justify-between text-gray-300 w-full'
                            href='https://www.linkedin.com/in/safal-thapa-5a9512231/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex items-center justify-between text-gray-300 w-full'
                            href='https://github.com/safalthapa46'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex items-center justify-between text-gray-300 w-full'
                            href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex items-center justify-between text-gray-300 w-full'
                            href='https://discord.com/channels/@safal#8899'>
                            Discord <FaDiscord size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex items-center justify-between text-gray-300 w-full'
                            href='https://www.facebook.com/safal.thapa.5621/'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
