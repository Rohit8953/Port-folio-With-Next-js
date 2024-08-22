import React from 'react'
import { data2 } from '@/data/dataInfo'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='bg-gray-900 flex flex-col justify-center pb-10 '>
        <div className='mx-auto mt-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Tech Stack</div>
        <div className='grid mt-4 grid-cols-2 gap-5 p-5 sm:gap-10 w-full justify-end items-center content-center sm:grid-cols-2 lg:grid-cols-3'>
           { 
             data2.map((data,index)=>{
                return(
                    <div key={index} className='text-4xl max-w-[14rem] mx-auto hover:scale-110 transition-all duration-300 hover:border-2 rounded-2xl p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20' >
                     <Image src={data.image} alt="icons"/>
                    </div>
                )
             })
            }
        </div>
    </div>
  )
}

export default Skills