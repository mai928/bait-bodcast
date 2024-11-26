import React from 'react'
import { Link } from 'react-router-dom'
import { iconsNavbar } from '../data'

const Social = () => {
    return (
        <section className='flex justify-center items-center gap-5 lg:gap-7 '>

         {
            iconsNavbar?.map((item)=>(
                <Link to={'/'} className='border-[1px] p-2 bg-primary_color rounded-full border-primary_color border-opacity-55'>{item.icon}</Link>
            ))
         }

        </section>
    )
}

export default Social