import ChevronIcon from '@/icons/ChevronIcon'
import ListIcon from '@/icons/ListIcon'
import React, { useState } from 'react'

export default function Dropdown({ children }) {

    const [toggleDropdown, setToggleDropdown] = useState(true);

    return (
        <section className=''>
            <button
                type='button'
                className='border border-gray-400 rounded-md text-white bg-primary-400 bg-opacity-60 flex gap-2 items-center w-full mt-6 mb-4 px-4 py-2 shadow-md shadow-primary-400 transition-all duration-300'
                onClick={() => setToggleDropdown(!toggleDropdown)}
            >
                <span className='w-5 h-5 block'><ListIcon /></span>
                <span>Your todos</span>

                <span className={`ml-auto w-5 h-5 block transition-all duration-100 ease-linear ${toggleDropdown ? 'rotate-0' : 'rotate-180'}`}><ChevronIcon /></span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${toggleDropdown ? 'h-full opacity-100 visible ' : 'h-0 opacity-0 invisible'}`}>
                {
                    
                }
                {children}
            </div>
        </section>
    )
}
