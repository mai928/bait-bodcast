import React from 'react'
import { videosSrc } from '../data'

const Videos = () => {
    return (
        <section className=' px-5 lg:px-16 py-10'>
            <h2 className='text-center text-3xl font-bold pb-5'>Our Videos</h2>
            <div className='text-center m-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>


                {
                    videosSrc?.map((item) => (
                        <iframe className=' lg:w-[450px] lg:h-[240px]' src={item.src} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    ))
                }


            </div>
        </section>
    )
}

export default Videos