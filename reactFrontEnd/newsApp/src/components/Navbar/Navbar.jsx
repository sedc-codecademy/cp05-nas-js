import React, { useState } from 'react'
// import { Iconoir } from 'iconoir-react';
import { Menu, DeleteCircle } from 'iconoir-react'
import { Link } from 'react-router-dom'
import './navBar.css'

const Links = [
  { name: 'HOME', link: '/' },
  { name: 'WORLD NEWS', link: '/world' },
  { name: 'SPORT', link: '/sport' },
  { name: 'LogIn', link: '/logIn' },
  { name: 'JOIN US', link: '/create' }
]


function Navbar() {
  let [open, setOpen] = useState(false)


  return (
    // <div className='flex bg-slate-200 justify-end h-16 items-center'>\
    <div className='shadow-md w-full fixed top-0 left-0 bg-indigo-300 navContainer'>
      <div className='flex items-center justify-between'>
        <div className="items-center ml-7">NewsApp</div>
        <div onClick={() => setOpen(!open)} className='absolute right-6 top-2 cursor-pointer md:hidden'>

          <div className=''>
            {open ? <DeleteCircle /> : <Menu />}
          </div>

        </div>
        <ul className={`md:flex bg-indigo-300 py-4 gap-7 mb-4 md:items-center justify-end mr-7
                md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                ${open ? 'top-20' : 'top-[-90px]'}`}>
          {
            Links.map((link) => (
              <Link
                className='text-gray-800 hover:text-gray-400 duration-100 flex'
                to={link.link}
                key={link.name}
              >
                {link.name}

              </Link>
            ))
          }
        </ul>
      </div>


    </div>
  )
}

export default Navbar
