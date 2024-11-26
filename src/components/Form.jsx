import React from 'react'

const Form = () => {
    return (
        <section>
            <div className='text-secondary_color'>
                <h2 className='text-3xl font-bold py-3'> Contact Us</h2>
                <p className='py-2 text-[14px]'>If you have any Question  please , fill this form </p>
            </div>
            <form>
                <input
                    type='text'
                    id='name'
                    name='name'
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                    className="mt-5 w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm  placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
                    placeholder={("Name")}
                />
                <input
                    type='email'
                    id='email'
                    name='email'
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    className="mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
                    placeholder={("Email")}
                />
                <input
                    type='number'
                    id='phone'
                    name='phone'
                    // value={formData.phone}
                    // onChange={handleChange}
                    required
                    className="mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white py-3 pl-5 pr-3 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm"
                    placeholder={("Phone")}
                />
                <textarea
                    id='message'
                    name='message'
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                    className="col mt-5 block w-full rounded-md border border-s-4 border-slate-300 border-s-primary_color bg-white pb-10 pl-5 pr-3 pt-2 shadow-sm placeholder:text-start placeholder:italic placeholder:text-slate-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 sm:text-sm "
                    cols={5}
                    placeholder={("Message")}
                />

                <div className='flex justify-center'>
                    <button
                        className={`hover:bg-secondary_color  text-xl font-bold uppercase py-3 my-5
         bg-primary_color font-Outfit  p-1 text-center m-auto  w-64  md:w-48 lg:w-[38rem] rounded-lg `} type='submit'>{("Send")}</button>
                </div>

                <div>
                    {/* <ResponseMessage message={responseMessage} /> */}
                </div>
            </form>
        </section>
    )
}

export default Form