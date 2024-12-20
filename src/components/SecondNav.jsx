import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ResponsiveHeader from './ResponsiveHeader';
import { navbar } from '../data';
import Sidebar from './Sidebar';
import Logo from '../assets/logo1.png'
import Social from './Social';

const SecondNav = () => {



    const [activeIndex, setActiveIndex] = useState(null);

    const [activeLink, setActiveLink] = useState(1)

    const handleLink = (id) => {
        setActiveLink(id)
    }

    const [toggle, setToggle] = useState(false)
    const [showmenuIcon, setshowmenuIcon] = useState(false)
    const [isFixed, setIsFixed] = useState(false);
    const sidebarRef = useRef(null);


    const handleClickOutside = (event) => {
        if (toggle && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setToggle(false);
        }
    };

    const handleFixed = () => {

        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }


    useEffect(() => {

        if (window.scrollY >= 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }

        handleFixed()


        const handleSize = () => {
            if (window.innerWidth <= 1024) {
                setToggle(false)
                setshowmenuIcon(true)
            } else {
                setshowmenuIcon(false)

            }
        }


        handleSize()
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize)
        }

    }, [])


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle]);


    return (
        <section className={`px-5 lg:px-16 z-10  top-0 left-0 right-0 bottom-0 bg-black   ${isFixed && ' fixed top-0 left-0 shadow-xl  h-24  '}`}>

            <div>
                {
                    showmenuIcon === true ?
                        (
                            <ResponsiveHeader setToggle={setToggle} toggle={toggle} />
                        ) : (
                            <div className={`flex  items-center justify-between    gap-20 `}>
                                <Link to={'/'}>
                                    <img width={100} height={'auto'} src={Logo} alt='Logo' />
                                </Link>
                                <div className='flex-1'>
                                    <div className='flex justify-center  gap-6 relative'>
                                        {navbar.map((nav, index) => (
                                            <div key={nav.id} className='' onClick={() => handleLink(nav.id)} >
                                                <ul key={index} className=' '>
                                                    <li className='  text-sm font-semibold text-slate-900  relative  py-2 px-3'>
                                                        <a className={`font-bold  text-[16px] text-secondary_color hover:text-primary_color`} href={nav.id}>{(nav.name)}</a>
                                                    </li>
                                                    <div >
                                                    </div>

                                                </ul>
                                            </div>
                                        ))}


                                    </div>

                                </div>

                                <div>
                                    <Social/>
                                    </div>



                            </div>
                        )
                }
                {/* sidebar */}
                <div ref={sidebarRef}>
                    <Sidebar toggle={toggle} setToggle={setToggle} />
                </div>

            </div>

        </section>
    )
}

export default SecondNav