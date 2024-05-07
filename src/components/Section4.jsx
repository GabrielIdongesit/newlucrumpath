import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

const Section4 = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="w-full col-span-2 justify-between mx-auto lg:col-span- h-ful shadow-lg shadow-gray-400 rounded-lg border">
                <button onClick={() => setIsOpen((prev) => !prev)} className='p-1 pl-2 w-full justify-between flex items-center cursor-pointer border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                  <div className='justify-between  flex'>
                    {!isOpen ? (
                      <AiOutlineCaretDown className='mt-1 mr-1' size={20} />
                    ) : (
                      <AiOutlineCaretUp className='mt-1 mr-1' size={20} />
                    )}
                    <h1 className='lg:font-medium font-bold text-[10px] lg:text-[12px]'>What can I trade with Lucrum Path Fx Broker ?</h1>
                  </div>
                </button>
                {isOpen && (
                  <div className='w-full'>
                    <div className='flex'>
                      <ul className='border-1 items-center ml-3 border-black'>
                        <li className='text-[11px]'>Simple Fx is dedicated to providing a variety of cryptocurrencies for trade based on the prevailing price and fluctuations.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
    </div>
  )
}

export default Section4