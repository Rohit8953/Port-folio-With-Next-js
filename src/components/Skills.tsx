import React from 'react'
import { data2 } from '@/data/dataInfo'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='bg-gray-900 flex flex-col justify-center pb-20 pt-10 '>
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              Tech Stack
        </h2>
        <div className='grid mt-4 grid-cols-2 gap-5 p-5 sm:gap-10 w-full justify-end items-center content-center sm:grid-cols-3 lg:grid-cols-4'>
           { 
             data2.map((data,index)=>{
                return(
                    <div key={index} className='text-4xl max-w-[10rem] mx-auto hover:scale-110 transition-all duration-300 hover:border-2 rounded-2xl p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20'>
                     <Image src={data.image} alt="icons" className="w-full h-auto"/>
                    </div>
                )
             })
            }
        </div>
    </div>
  )
}

export default Skills