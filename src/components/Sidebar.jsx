import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../data'
import logo from '../assets/logo.jpg'

const Sidebar = ({ toggle ,setToggle}) => {
  return (
    <div className={`sidebar bg-gray-200  ${toggle ? "open" : "close"} `}>
      <div className="p-10">
        <div className="flex justify-between items-center mb-10">
          <Link to={'/'}><img alt="logo" width={100} height={'auto'} src={logo} /></Link>
        </div>

        <ul>
          {navbar.map((item) => (
            <div key={item.name} className="flex items-center mt-7">
              <div className="p-1 bg-white-400 rounded-full me-4">
                <svg

                  xmlns="http://www.w3.org/2000/svg"
                  width={13}
                  height={13}
                  className="fill-black  "
                  viewBox="0 0 320 512"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </div>
              <li className='relative'>

                <a

                  className="text-black text-xl font-semibold   hover:text-primary_color"
                  href={item.id}
                  onClick={() => setToggle(!toggle)}
                >
                  {(item.name)}
                </a>
              </li>

            </div>

          ))}
        </ul>

        <div className="flex items-center mt-7">
          <div className="p-1 bg-white-400 rounded-full me-4">
            {/* <svg

              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={13}
              className="fill-secondary_color  "
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg> */}


          </div>
          {/* <LanguageChanger/> */}



        </div>
      </div>
    </div>
  )
}

export default Sidebar